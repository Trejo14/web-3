# 🚀 TechCorp - Soluciones Digitales

¡Bienvenido al proyecto **TechCorp**! Esta es una aplicación web corporativa moderna y dinámica desarrollada en **React** con **Vite**, diseñada para demostrar el uso avanzado de componentes interactivos, navegación fluida, gestión de estados locales mediante Hooks de React y consumo asíncrono de APIs externas.

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías modernas del ecosistema frontend:

*   **Core:** [React 18](https://react.dev/) (Componentes Funcionales)
*   **Herramienta de Construcción:** [Vite](https://vite.dev/) (Rendimiento ultrarrápido y Hot Module Replacement)
*   **Enrutamiento:** [React Router DOM v6](https://reactrouter.com/) (Navegación dinámica SPA sin recargar la página)
*   **Estilos:** CSS3 Vainilla (Diseño responsive y componentes desacoplados con modularidad de archivos `.css`)
*   **Consumo de API:** Fetch API nativo de JavaScript para la comunicación asíncrona.

---

## 🧩 Implementación de Hooks de React

El proyecto sirve como demostración práctica del uso de los siguientes Hooks de React:

### 1. `useState` (Gestión de Estado Local)
Se utiliza ampliamente a lo largo de la aplicación para dotar de interactividad a las interfaces:
*   **`ContactForm.jsx`:** Maneja el estado controlado de todos los campos del formulario de contacto en un solo objeto de estado (`formData`) y gestiona los estados de envío (`isSubmitting`).
*   **`Contact.jsx`:** Controla la visibilidad de la pantalla de éxito posterior al envío del formulario mediante un renderizado condicional con el estado (`formSubmitted`).
*   **`Hero.jsx`:** Utiliza múltiples estados booleanos para disparar animaciones escalonadas de entrada de elementos visuales tras el renderizado inicial.
*   **`Projects.jsx`:** Gestiona el estado de los proyectos cargados desde la API, el estado de carga (`loading`), los estados de error en la red (`error`), y una lista dinámica de favoritos (`favorites`).

### 2. `useEffect` (Gestión de Efectos Secundarios)
*   **Peticiones Asíncronas (`Projects.jsx`):** Ejecuta una llamada `async/await` mediante `fetch` al momento de montarse el componente (`[]`) para traer información del servidor.
*   **Animaciones Escalonadas (`Hero.jsx`):** Configura temporizadores (`setTimeout`) para cambiar clases CSS y gestiona la **función de limpieza** (`clearTimeout`) al desmontarse para prevenir fugas de memoria.

### 3. `useLocation` (React Router DOM)
*   **`Navbar.jsx`:** Lee la propiedad `pathname` de la URL activa en tiempo real para aplicar dinámicamente clases CSS activas (`navbar__link--active`) en los enlaces del menú de navegación.

---

## 🌐 Consumo de APIs Externas (Fetch)

En la sección de **Proyectos** (`src/pages/Projects/Projects.jsx`), la aplicación se conecta en tiempo real a la **API REST Pública de GitHub** para obtener información real sobre los repositorios públicos de un usuario.

### Flujo de Datos con Fetch:
1.  **Estado Inicial:** El componente se monta mostrando un estado de carga (`Cargando proyectos...`).
2.  **Llamada Asíncrona:** Se realiza un `fetch` hacia `https://api.github.com/users/Trejo14/repos`.
3.  **Manejo de Errores:** Se evalúa la propiedad `response.ok`. Si es fallida, se lanza un error que se captura en el bloque `catch` y se muestra en pantalla.
4.  **Mapeo de Datos:** Los datos recibidos de GitHub se transforman en caliente al formato visual de la interfaz (mapeando campos como `name`, `description`, `language`, `html_url` y `stargazers_count`).
5.  **Actualización de UI:** El bloque `finally` apaga el indicador de carga y el estado de React renderiza automáticamente las tarjetas de proyectos reales.

---

## 📂 Estructura del Proyecto

A continuación se muestra una visión general de la arquitectura de archivos del proyecto:

```text
├── 📁 node_modules       # Dependencias del proyecto (generado al instalar)
├── 📁 src                # Código fuente principal de la aplicación
│   ├── 📁 components     # Componentes visuales y de interfaz reutilizables
│   │   ├── 📁 Button
│   │   ├── 📁 Card
│   │   ├── 📁 ContactForm
│   │   ├── 📁 Hero
│   │   ├── 📁 Navbar
│   │   └── ... otros componentes con sus estilos CSS
│   ├── 📁 pages          # Páginas/Escenas de la aplicación (Home, About, Services, Projects, Contact)
│   ├── 📁 router         # Configuración y enrutador (AppRouter.jsx)
│   ├── 📄 App.css        # Estilos generales del App
│   ├── 📄 App.jsx        # Componente raíz del Router
│   ├── 📄 index.css      # Sistema de diseño, variables HSL, tipografía y resets
│   └── 📄 main.jsx       # Punto de entrada de la aplicación en React
├── 📄 index.html         # Archivo HTML plantilla de Vite
├── 📄 iniciar.bat        # Script automatizado de inicio para Windows
├── 📄 package.json       # Manifiesto del proyecto y scripts npm
├── 📄 README.md          # Documentación del proyecto (este archivo)
└── 📄 vite.config.js     # Configuración del entorno de Vite
```

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos
*   Tener instalado [Node.js](https://nodejs.org/) (versión LTS recomendada).

### Opción 1: Inicio Rápido en Windows (Recomendado)
Simplemente haz **doble clic** en el archivo automatizado:
```bash
iniciar.bat
```
Este script:
1.  Verificará que cuentes con Node.js en tu sistema.
2.  Instalará todas las dependencias del proyecto (`npm install`) si la carpeta `node_modules` no existe.
3.  Iniciará el servidor de desarrollo de Vite.
4.  Abrirá automáticamente el sitio en tu navegador predeterminado.

### Opción 2: Ejecución Manual en Terminal
1.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```
2.  Inicia el servidor de desarrollo local:
    ```bash
    npm run dev
    ```
3.  Abre el navegador en la dirección provista en la terminal (usualmente [http://localhost:5173/](http://localhost:5173/)).

---

## 👥 Autores

Este proyecto fue desarrollado por:

*   **Adolfo Salinas**
*   **Daniel Trejo**
*   **Angel Choperena**
*   **Jose Luis Resendiz**
