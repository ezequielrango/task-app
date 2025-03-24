# Task App

Aplicación de notas para el curso de Node.js de ForIT.

## Descripción

Este proyecto es una pequeña aplicación de notas en un monorepo que incluye tanto el backend como el frontend. Utiliza `docker-compose` para gestionar los servicios.

## Instalación y Ejecución

### 1. Clonar el Repositorio
```sh
git clone https://github.com/ezequielrango/task-app.git
cd task-app
```

### 2. Configuración de Variables de Entorno
En los directorios `backend` y `frontend` encontrarás archivos `.env.example`. Debes duplicarlos y renombrarlos como `.env`, luego configurar las variables necesarias.

```sh
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```
En el env del back, solo modificar la pass en la variable DATABASE_URL

### 3. Levantar los Servicios con Docker
```sh
docker compose up -d
```
Esto creará los siguientes servicios:

- **Frontend**: Disponible en [http://localhost:3001](http://localhost:3001)
- **API Backend**: Disponible en [http://localhost:3000](http://localhost:3000)
- **Base de Datos (PostgreSQL)**: Disponible en el puerto `5432`

Al iniciarse, el backend ejecutará automáticamente las migraciones y un seeder que creará la tabla `tasks` y la llenará con 16 registros iniciales.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express, Prisma, PostgreSQL
- **Frontend**: React + Vite
- **Base de Datos**: PostgreSQL
- **Contenerización**: Docker, Docker Compose

## Estructura del Proyecto
```
/task-app
│── backend      # Código del backend (API REST con Express)
│── frontend     # Código del frontend (React + Vite)
│── docker-compose.yml  # Definición de los servicios
│── README.md    # Documentación del proyecto
```


![image](https://github.com/user-attachments/assets/b48ba496-7a3a-446d-abd8-03477d574a9f)
