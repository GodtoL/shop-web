# Proyecto de Tienda en Línea

Este proyecto consta de dos servidores: 
1. **Backend**: Panel de administrador desarrollado en Node.js con Express y Pug.
2. **Frontend**: Página principal de la tienda desarrollada en Go con Gin.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu sistema:
- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (generalmente incluido con Node.js)
- [Go](https://go.dev/dl/) (v1.18 o superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (para la base de datos)

---

## Configuración del Backend

1. **Clonar el repositorio** o descargar los archivos.
2. Navegar a la carpeta `backend`:
   ```bash
   cd backend
3. Instalar dependencias
   ```bash
   npm install express, pug, method-override, mongoose, jsonwebtoken
4. Configurar la conexión a MongoDB:
Asegúrate de que MongoDB esté ejecutándose localmente o proporciona una URI válida en backend/config/db.js.
5. Iniciar el servidor del backend:
   ```bash
   node server.js
El servidor estará disponible en http://localhost:3000.

Estructura del Backend
- config: Configuración de la base de datos.
- controllers: Controladores de lógica de negocio.
- middlewares: Middlewares para el manejo de solicitudes.
- models: Modelos de datos para MongoDB.
- routes: Definición de rutas.
- views: Plantillas Pug para el renderizado del frontend del panel de administración.
- 
## Configuración del Frontend
1. Navegar a la carpeta frontend:
    ```bash
   cd ../frontend
2. Configurar la conexión a MongoDB en el archivo config/db.go:
Asegúrate de que la función ConnectToMongoDB tenga una URI válida de MongoDB.

3. Ejecutar el servidor de frontend
    ```bash
   go run main.go
El servidor estará disponible en http://localhost:8080 (por defecto).

Estructura del Frontend
- config: Configuración de la base de datos.
- controllers: Controladores del frontend.
- models: Modelos de datos utilizados en Go.
- routes: Definición de rutas del servidor.
- templates: Archivos HTML renderizados por Gin.
- static: Archivos estáticos (CSS, JS, imágenes).

Notas adicionales
- Asegúrate de que ambos servidores estén ejecutándose simultáneamente.
- Las rutas del backend utilizan Express y están configuradas para /api/product, /login, y /manage.
- El frontend utiliza la librería Gin para manejar las rutas y renderizar las páginas.
¡Gracias por utilizar este proyecto!
