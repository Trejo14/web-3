# Web-3: Proyecto Parcial 3

Este es un proyecto de una aplicación web desarrollada con [React](https://reactjs.org/) y [Vite](https://vitejs.dev/), creada como parte de la evaluación del tercer parcial.

Consiste en un sitio web corporativo o portafolio interactivo (SPA) que incluye distintas secciones para mostrar información de la empresa, servicios ofrecidos, proyectos realizados y una página de contacto.

## Características

- **Navegación fluida:** Uso de `react-router-dom` para una experiencia SPA (Single Page Application) sin recargas de página.
- **Componentes modulares:** Arquitectura basada en componentes reutilizables como Botones, Tarjetas (Cards), Formularios de contacto, Navbar, Footer, entre otros.
- **Páginas principales:**
  - `Home`: Página de inicio con una sección "Hero" y resumen del sitio.
  - `About`: Información sobre el equipo o la agencia.
  - `Services`: Catálogo de los servicios que se ofrecen.
  - `Projects`: Portafolio de proyectos destacados.
  - `Contact`: Formulario de contacto.
- **Arranque rápido:** Incluye un archivo `arrancar.bat` para iniciar el entorno de desarrollo fácilmente en Windows.

## 🛠️ Tecnologías utilizadas

- **[React 18](https://react.dev/)** - Biblioteca principal para la construcción de interfaces de usuario.
- **[Vite](https://vitejs.dev/)** - Entorno de desarrollo súper rápido y empaquetador moderno.
- **[React Router DOM v6](https://reactrouter.com/)** - Enrutamiento de la aplicación.
- **[ESLint](https://eslint.org/)** - Para el análisis y mantenimiento de la calidad del código.

## Estructura del proyecto

```text
web-3/
├── src/                # Código fuente principal
│   ├── components/     # Componentes reutilizables de UI
│   ├── pages/          # Componentes de las vistas principales
│   ├── router/         # Configuración del enrutamiento (AppRouter.jsx)
│   ├── App.jsx         # Componente raíz de la aplicación
│   ├── main.jsx        # Punto de entrada de React
│   └── index.css       # Estilos globales y variables
├── arrancar.bat        # Script para iniciar el servidor de desarrollo
├── package.json        # Dependencias y scripts del proyecto
└── vite.config.js      # Configuración de Vite
```

## Instalación y ejecución local

Sigue estos pasos para correr el proyecto en tu máquina de manera local:

1. **Abre una terminal** en el directorio del proyecto (`web-3`).

2. **Instala las dependencias** necesarias usando npm:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   Si estás en Windows, puedes simplemente dar doble clic en el archivo **`arrancar.bat`**.
   Alternativamente, puedes ejecutar en la terminal:
   ```bash
   npm run dev
   ```

4. **Abre en tu navegador:**
   La aplicación estará disponible típicamente en `http://localhost:5173/`.

## Construcción para producción

Para crear una versión optimizada del proyecto, lista para ser subida a un servidor o servicio de hosting, ejecuta:

```bash
npm run build
```

Esto generará una carpeta `dist` con los archivos estáticos minimizados y listos para producción.
