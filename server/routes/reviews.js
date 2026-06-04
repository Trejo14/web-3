const express = require('express')
const router = express.Router()
const pool = require('../db')

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
  const { author, email, role, message, rating } = req.body
  if (!author || !message) {
    return res.status(400).json({ error: 'Name and message are required' })
  }
  try {
    const result = await pool.query(
      `INSERT INTO reviews (author, email, role, message, rating)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, author, role, message, rating, created_at`,
      [author.trim(), email || null, role || null, message.trim(), rating || null]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error creating review' })
  }
})

router.put('/:id/approve', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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
