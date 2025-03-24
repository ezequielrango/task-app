# Etapa 1: Construcción
FROM node:20-alpine as build

WORKDIR /app

# Copiar archivos package.json y package-lock.json (o yarn.lock si usas yarn)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Etapa 2: Contenedor final
FROM node:20-alpine

WORKDIR /app

# Copiar los archivos generados desde la etapa de construcción
COPY --from=build /app /app

# Instalar Prisma CLI
RUN npm install -g prisma

# Exponer el puerto de la aplicación
EXPOSE 3000

# Ejecutar el servidor (el comando real se establece en docker-compose.yml)
CMD ["npm", "run", "dev"]
