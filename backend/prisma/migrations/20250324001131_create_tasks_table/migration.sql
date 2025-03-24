-- Crear la tabla
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- Insertar las 16 tareas
INSERT INTO "Task" ("title", "description", "done", "createdAt", "updatedAt") VALUES
('Revisar correos electrónicos', 'Revisar todos los correos importantes', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Limpiar la oficina', 'Limpiar el escritorio y el área de trabajo', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Llamar a clientes', 'Hacer llamadas de seguimiento a clientes', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Actualizar el sistema operativo', 'Instalar las últimas actualizaciones del sistema', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Redactar informe de ventas', 'Redactar el informe mensual de ventas', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Reunión de equipo', 'Participar en la reunión semanal del equipo', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Revisar inventario', 'Revisar y actualizar el inventario de productos', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Planificar el evento de la empresa', 'Coordinar detalles y logística para el evento', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Revisión de código', 'Revisar el código fuente para encontrar posibles errores', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Entrenamiento del personal', 'Capacitar a los nuevos empleados sobre procesos internos', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Llamar al proveedor de servicios', 'Contactar a los proveedores para obtener actualizaciones', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Revisar las métricas del sitio web', 'Verificar el tráfico y el rendimiento del sitio web', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Actualizar sitio web de la empresa', 'Actualizar el contenido del sitio web según las nuevas políticas', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Probar la nueva aplicación', 'Realizar pruebas para garantizar el funcionamiento adecuado de la nueva app', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Enviar presupuesto a clientes', 'Enviar cotizaciones y presupuestos solicitados a los clientes', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Revisión de contratos', 'Revisar los contratos para asegurarse de que estén en orden', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
