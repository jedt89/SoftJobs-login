import express from 'express';
import * as UserController from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Registrar un nuevo usuario
router.post('/usuarios', UserController.registerUser);

// Iniciar sesión
router.post('/login', UserController.loginUser);

// Obtener datos del usuario autenticado
router.get('/usuarios', verifyToken, UserController.getUser);

export default router;
