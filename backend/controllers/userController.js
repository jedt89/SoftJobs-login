import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as UserModel from '../model/userModel.js';

const registerUser = async (req, res) => {
  const { email, password, rol, lenguage } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.registerUser(
      email,
      hashedPassword,
      rol,
      lenguage
    );

    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    res.json({ message: 'Sessión iniciada', user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

const getUser = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error al obtener la información del usuario' });
  }
};

export { registerUser, loginUser, getUser };
