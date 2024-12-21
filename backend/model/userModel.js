import pool from '../db/connection.js';

const registerUser = async (email, password, rol, lenguage) => {
  const query =
    'INSERT INTO usuarios(email, password, rol, lenguage) VALUES($1, $2, $3, $4) RETURNING *';

  try {
    const { rows } = await pool.query(query, [email, password, rol, lenguage]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM usuarios WHERE email = $1';

  try {
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

export { registerUser, getUserByEmail };
