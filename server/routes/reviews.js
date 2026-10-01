const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const pool = require('../db')

// Protege las rutas de moderación: requiere header "Authorization: Bearer <ADMIN_TOKEN>"
function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_TOKEN
  const header = req.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : ''
  const valid = expected
    && token.length === expected.length
    && crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected))
  if (!valid) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, author, role, message, rating, created_at FROM reviews WHERE approved = true ORDER BY created_at DESC'
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error fetching reviews' })
  }
})

router.post('/', async (req, res) => {
  const author = clean(req.body.author, 100)
  const email = clean(req.body.email, 120)
  const role = clean(req.body.role, 100)
  const message = clean(req.body.message, 1000)
  const rating = Number.isInteger(req.body.rating) && req.body.rating >= 1 && req.body.rating <= 5
    ? req.body.rating
    : null

  if (author.length < 2 || message.length < 10) {
    return res.status(400).json({ error: 'El nombre y un mensaje de al menos 10 caracteres son obligatorios' })
  }
  try {
    const result = await pool.query(
      `INSERT INTO reviews (author, email, role, message, rating)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, author, role, message, rating, created_at`,
      [author, email || null, role || null, message, rating]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error creating review' })
  }
})

router.put('/:id/approve', requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE reviews SET approved = true WHERE id = $1 RETURNING *',
      [req.params.id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error approving review' })
  }
})

router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM reviews WHERE id = $1 RETURNING id', [req.params.id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json({ message: 'Review deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error deleting review' })
  }
})

module.exports = router
