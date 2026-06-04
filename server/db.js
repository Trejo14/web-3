const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
})

const initDb = async () => {
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        author VARCHAR(100) NOT NULL,
        email VARCHAR(120),
        role VARCHAR(100),
        message TEXT NOT NULL,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        approved BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('Database initialized: reviews table ready')
  } catch (err) {
    console.error('Database init error:', err.message)
  } finally {
    client.release()
  }
}

initDb()

module.exports = pool
