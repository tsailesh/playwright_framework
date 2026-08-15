import mysql, {
  Pool,
  PoolConnection,
  RowDataPacket,
  ResultSetHeader,
} from 'mysql2/promise';

type DbParam = string | number | boolean | null | Buffer | Date;

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

/**
 * SELECT queries
 */
export async function query<T extends RowDataPacket[]>(
  sql: string,
  params?: DbParam[]
): Promise<T> {
  const connection: PoolConnection =
    await getDbPool().getConnection();

  try {
    const [result] = await connection.query<T>(
      sql,
      params
    );

    return result;
  } finally {
    connection.release();
  }
}

/**
 * INSERT / UPDATE / DELETE
 */
export async function execute(
  sql: string,
  params?: DbParam[]
): Promise<ResultSetHeader> {
  const connection: PoolConnection =
    await getDbPool().getConnection();

  try {
    const [result] =
      await connection.execute<ResultSetHeader>(
        sql,
        params
      );

    return result;
  } finally {
    connection.release();
  }
}

/**
 * Check whether a user exists
 */
export async function userExists(
  username: string
): Promise<boolean> {
  interface UserRow extends RowDataPacket {
    id: number;
  }

  const result = await query<UserRow[]>(
    `SELECT id
     FROM users
     WHERE username = ?
     LIMIT 1`,
    [username]
  );

  return result.length > 0;
}

/**
 * Get user by username
 */
export async function getUserByUsername(
  username: string
) {
  interface UserRow extends RowDataPacket {
    id: number;
    username: string;
    email: string;
  }

  const result = await query<UserRow[]>(
    `SELECT id, username, email
     FROM users
     WHERE username = ?
     LIMIT 1`,
    [username]
  );

  return result[0] ?? null;
}

/**
 * Get user count
 */
export async function getUserCount(
  username: string
): Promise<number> {
  interface CountRow extends RowDataPacket {
    count: number;
  }

  const result = await query<CountRow[]>(
    `SELECT COUNT(*) AS count
     FROM users
     WHERE username = ?`,
    [username]
  );

  return Number(result[0].count);
}

/**
 * Delete user
 */
export async function deleteUser(
  id: number
): Promise<number> {
  const result = await execute(
    'DELETE FROM users WHERE id = ?',
    [id]
  );

  return result.affectedRows;
}

/**
 * Close connection pool
 */
export async function closeDbPool(): Promise<void> {
  if (pool) {
    await pool.end();
  }
}