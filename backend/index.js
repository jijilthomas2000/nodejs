const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());

const pool = new Pool({
  host: 'postgres',
  user: 'postgres',
  password: 'postgres',
  database: 'infocaredb',
  port: 5432,
});

app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');

    res.json({
      message: 'Backend Running',
      db_time: result.rows[0].now,
    });

  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
