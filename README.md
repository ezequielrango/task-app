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
En el env del back, solo modificar la pass en las variables DATABASE_URL y POSTGRES_PASSWORD
en DATABASE_URL QUITAR < >
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
## CAPTURAS DE LA APP EN FUNCIONAMIENTO: 

![image](https://github.com/user-attachments/assets/b48ba496-7a3a-446d-abd8-03477d574a9f)

![image](https://github.com/user-attachments/assets/e307fb5b-2cab-48da-a005-23383df3867d)
![image](https://github.com/user-attachments/assets/55d90e85-9b92-46e5-be26-3110150fcfb9)
![image](https://github.com/user-attachments/assets/f0561268-c33b-4d8a-99b3-70aa28afcda4)

###Se puede buscar por titulo, descripcion y filtrar por estado: 
![image](https://github.com/user-attachments/assets/ae9eedb3-8e10-4469-93fa-3112b657fc30)

![image](https://github.com/user-attachments/assets/1d4770c8-336c-4399-b248-edc192cb4bac)
![image](https://github.com/user-attachments/assets/0504636d-6a95-400a-9ee1-c474ea6d3d2b)
![image](https://github.com/user-attachments/assets/dcc14fa8-7742-4fe0-8caa-c5545cd934bf)
![image](https://github.com/user-attachments/assets/bcc6e5d1-3cb7-45ff-8b05-d592d6772893)
Editada: 
![image](https://github.com/user-attachments/assets/25a457bf-8666-49a5-9ebd-c08717707bfd)

![image](https://github.com/user-attachments/assets/5883044e-843c-4dcc-bca3-11a270729668)

