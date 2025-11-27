# Agencia de Viajes 🌍

Proyecto de una agencia de viajes desarrollado con **Express.js** y **Sequelize**, que proporciona una plataforma completa para explorar destinos, consultar testimoniales y gestionar información de viajes.

> 📚 **Proyecto Educativo** - Asignatura de Frameworks (2º DAW)  
> Este proyecto ha sido desarrollado con fines educativos como parte del currículo del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW).

## 📋 Características

- 🌐 **Sitio web responsivo** con interfaz moderna
- ✈️ **Catálogo de viajes** con múltiples destinos
- 💬 **Sistema de testimoniales** de clientes
- 🏢 **Sección "Nosotros"** con información de la agencia
- 🗄️ **Base de datos MySQL** integrada con Sequelize ORM
- 📱 **Diseño Bootstrap** para compatibilidad multi-dispositivo
- ⚡ **Desarrollo rápido** con Nodemon

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Node.js** | - | Entorno de ejecución |
| **Express** | ^5.1.0 | Framework web |
| **Pug** | ^3.0.3 | Motor de plantillas |
| **Sequelize** | ^6.37.7 | ORM para MySQL |
| **MySQL2** | ^3.15.3 | Driver MySQL |
| **Bootstrap** | - | Framework CSS |
| **Dotenv** | ^17.2.3 | Gestión de variables de entorno |
| **Nodemon** | ^3.1.11 | Desarrollo automático (dev) |

## 📁 Estructura del Proyecto

```
agenciaviajes/
├── index.js                 # Punto de entrada de la aplicación
├── package.json             # Dependencias del proyecto
├── .env                     # Variables de entorno (no versionado)
│
├── config/
│   └── db.js               # Configuración de conexión a MySQL
│
├── controllers/
│   └── paginaController.js # Controladores de rutas
│
├── models/
│   ├── Viaje.js            # Modelo de viajes
│   └── Testimoniales.js    # Modelo de testimoniales
│
├── routers/
│   └── index.js            # Definición de rutas
│
├── views/                  # Plantillas Pug
│   ├── inicio.pug
│   ├── nosotros.pug
│   ├── testimonios.pug
│   ├── viaje.pug
│   ├── viajes.pug
│   └── layout/
│       ├── footer.pug
│       ├── header.pug
│       ├── index.pug
│       ├── layout_testimonios.pug
│       └── layout_viajes.pug
│
└── public/                 # Archivos estáticos
    ├── css/
    │   ├── bootstrap.css
    │   └── style.css
    └── img/                # Imágenes de destinos y iconos
```

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js (v14 o superior)
- MySQL (v5.7 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/vrodrm/agenciaviajes.git
   cd agenciaviajes
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   # Base de datos
   CONEXION=nombre_base_datos
   HOST=localhost
   
   # Servidor
   PORT=3000
   ```

4. **Crear la base de datos**
   
   Crear una base de datos MySQL y asegurarse de que las tablas `viajes` y `testimoniales` estén creadas con la estructura apropiada.

5. **Iniciar el servidor**
   
   **Modo desarrollo (con auto-reload):**
   ```bash
   npm run dev
   ```
   
   **Modo producción:**
   ```bash
   node index.js
   ```

6. **Acceder a la aplicación**
   
   Abrir en el navegador: `http://localhost:3000`

## 📖 Uso de la Aplicación

### Navegación Principal

- **Inicio** - Página principal con información destacada
- **Viajes** - Catálogo completo de destinos disponibles
- **Viaje Individual** - Detalles específicos de cada destino
- **Nosotros** - Información sobre la agencia
- **Testimoniales** - Opiniones y experiencias de clientes

### Rutas Disponibles

Las rutas están definidas en `routers/index.js` y dirigidas por `controllers/paginaController.js`.

## 🗄️ Modelos de Base de Datos

### Modelo: Viaje
```javascript
- id (PrimaryKey)
- titulo
- descripcion
- destino
- precio
- duracion
- fechaSalida
- imagen
- ...
```

### Modelo: Testimoniales
```javascript
- id (PrimaryKey)
- nombre
- email
- mensaje
- puntuacion
- ...
```

## 🎨 Estilos y Diseño

- **Bootstrap** para componentes y diseño responsivo
- **CSS personalizado** en `public/css/style.css`
- **Imágenes optimizadas** de destinos en `public/img/`
- Diseño mobile-first para mejor experiencia en dispositivos móviles

## 🔧 Scripts Disponibles

```bash
npm run dev    # Ejecutar en modo desarrollo con Nodemon
```

## 📄 Licencia

Este proyecto está bajo la licencia ISC. Ver `package.json` para más detalles.

## 👤 Autor

**Vicente Rodríguez Manjón**

- GitHub: [@vrodrm](https://github.com/vrodrm)
