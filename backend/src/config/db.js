import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
});

// Helper function to run queries
export async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

// Simple health check for DB connection
export async function health() {
  const [rows] = await pool.query('SELECT 1 as ok');
  return rows[0].ok === 1;
}


