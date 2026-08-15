import mysql, { Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

let pool: Pool;

export function getDbPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,

      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  return pool;
}

export async function query(
  sql: string,
  params?: any[]
) {
  const connection: PoolConnection = await getDbPool().getConnection();

  try {
    const [result] = await connection.query(sql, params);
    return result;
  } finally {
    connection.release();
  }
}

// Example: check if user exists
export async function userExists(username: string): Promise<boolean> {
  const result = await query(
    'SELECT id FROM users WHERE username = ?',
    [username]
  );

  const rows = result as RowDataPacket[];

  return rows.length > 0;
}