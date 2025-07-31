# Altempo 

Landing Page de Altempo, maquetado de ejemplo para prueba

## Tecnologías Utilizadas

- React 19.1.0
- TypeScript 5.8.3
- Tailwind CSS 4.1.11
- Vite 7.0.4
- React Router DOM 7.7.1
- Swiper 11.2.10

## Instalación

### Prerrequisitos
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio
   ```bash
   git clone https://github.com/FernandaRubio74/landing-page-assessment
   cd altempo-assessment
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo
   ```bash
   npm run dev
   ```

4. Abrir en el navegador
   ```
   http://localhost:5173
   ```

## Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Vista previa de la build
npm run lint         # Ejecuta ESLint
```

## Estructura del Proyecto

```
altempo-assessment/
├── public/                 # Archivos estáticos
│   ├── artists/           # Imágenes de artistas
│   ├── brands/            # Logos de partners
│   └── ...
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── sections/      # Secciones de la página
│   │   │   ├── ArtistsSection.tsx
│   │   │   ├── MusiciansSection.tsx
│   │   │   ├── TalentHuntersSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── ...
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── HeroSection.tsx
│   ├── pages/            # Páginas principales
│   ├── assets/           # Recursos adicionales
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales y variables CSS
├── tailwind.config.js   # Configuración de Tailwind
├── vite.config.ts       # Configuración de Vite
└── package.json         # Dependencias y scripts
```

## Características

- Diseño responsive para desktop, tablet y móvil
- Secciones especializadas para músicos y talent hunters
- Carrusel automático de partners
- Formulario de contacto
- Sistema de variables CSS centralizadas

