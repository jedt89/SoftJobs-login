# SoftJobs-login - Backend

## 📘 Descripción

SoftJobs-login es una API RESTful desarrollada para la plataforma SoftJobs, centrada en la autenticación y autorización de usuarios utilizando JSON Web Tokens (JWT). Esta API permite el registro de usuarios, inicio de sesión seguro y consulta de información protegida. Está construida sobre Node.js y Express, con PostgreSQL como base de datos relacional.

---

## 🚀 Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución para JavaScript en el servidor.
- **Express.js** – Framework para construir aplicaciones web y APIs.
- **PostgreSQL** – Sistema de gestión de base de datos relacional.
- **bcryptjs** – Encriptación de contraseñas.
- **jsonwebtoken (JWT)** – Autenticación basada en tokens.
- **dotenv** – Carga de variables de entorno.
- **cors** – Middleware para habilitar solicitudes entre dominios.

---

## ⚙️ Instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/jedt89/SoftJobs-login.git
cd SoftJobs-login/backend
npm install

## Configura las variables de entorno:

DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=softjobs
JWT_SECRET=tu_clave_secreta
PORT=3000

Inicia el servidor:
npm start

## El servidor estará disponible en el puerto 3000
