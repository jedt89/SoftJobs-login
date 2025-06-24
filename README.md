# Cómo ejecutar el proyecto SoftJobs (Frontend + Backend)

## Requisitos

- Node.js v16 o superior instalado
- PostgreSQL instalado y corriendo

---

## Pasos para la ejecución

### 1. Clona el proyecto y entra a la carpeta raíz
---

### 2. Crea la base de datos y la tabla manualmente (solo una vez)

1. Abre la consola de comandos (CMD o PowerShell).

2. Conéctate a PostgreSQL reemplazando `TU_USUARIO` por tu usuario real (por ejemplo, `postgres`):

```bash
psql -U TU_USUARIO -d postgres
```

3. Ingresa tu contraseña cuando se te solicite.

4. Dentro del prompt de PostgreSQL (deberías ver `postgres=#`), ejecuta estas 2 líneas una por una:

```sql
CREATE DATABASE softjobs;

\connect softjobs
```

5. Luego, crea la tabla `usuarios` pegando este bloque:

```sql
CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguage  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);
```

✅ ¡Listo! La base de datos `softjobs` y la tabla `usuarios` ya están creadas.

---

### 3. Configura el archivo `.env`

Edita el archivo `.env` ubicado en `/backend/` y reemplaza `DB_PASS` con tus credenciales de PostgreSQL:

### 4. Instala las dependencias y ejecuta el proyecto

Ejecuta este comando en la raíz del proyecto para instalar todas las dependencias y levantar el servidor y el cliente:

```bash
npm install && cd /frontend && npm install && cd /backend && npm install && cd ../../ && npm run dev
```

✅ ¡Listo! El proyecto ya está disponible.
