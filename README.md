# Netflix Code Recovery Frontend

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)

## 📋 Descripción

**Mega Entretenimiento Colombia (MEC)** es una aplicación web que permite a los usuarios consultar y recuperar códigos de inicio de sesión y enlaces de actualización de hogar para servicios de streaming como Netflix.

## ✨ Características

- 🔐 **Recuperación de códigos de inicio de sesión** - Consulta códigos de acceso mediante correo electrónico
- 🏠 **Actualización de hogar** - Obtén enlaces de recuperación para actualización de hogar
- 🌙 **Modo oscuro/claro** - Tema adaptable con soporte para preferencias del sistema
- 📱 **Diseño responsive** - Optimizado para dispositivos móviles y desktop
- ⚡ **Turbo Mode** - Desarrollo rápido con Next.js Turbopack

## 🛠️ Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| Framework | Next.js 15.5 |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 3.3 |
| UI Components | Radix UI, MUI |
| Formularios | React Hook Form + Yup |
| HTTP Client | Axios |
| Estado | Zustand |
| Temas | next-themes |
| Notificaciones | notistack, react-hot-toast |
| Testing E2E | Cypress |

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/netflix-code-recovery-frontend.git
   cd netflix-code-recovery-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3006](http://localhost:3006) en tu navegador.

## 🚀 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack en puerto 3006 |
| `npm run dev:webpack` | Inicia el servidor de desarrollo con Webpack |
| `npm run build` | Genera la build de producción |
| `npm run start` | Inicia el servidor de desarrollo |
| `npm run lint` | Ejecuta ESLint y corrige errores automáticamente |
| `npm run lint:check` | Verifica errores de ESLint sin corregir |
| `npm run format` | Formatea código con Prettier y ESLint |
| `npm run prettier:check` | Verifica formato de código |
| `npm run typecheck` | Verifica tipos de TypeScript |
| `npm run e2e` | Ejecuta tests end-to-end con Cypress |
| `npm run e2e:open` | Abre Cypress en modo interactivo |
| `npm run clean:cache` | Limpia caché de Next.js y node_modules |

## 📁 Estructura del Proyecto

```
├── app/
│   ├── (dashboard)/           # Rutas del dashboard
│   │   ├── andres-distrinet/  # Página principal de recuperación
│   │   └── auth-register/     # Página de registro/autenticación
│   ├── components/            # Componentes reutilizables
│   │   ├── loader/            # Componentes de carga
│   │   ├── magicui/           # Componentes de UI animados
│   │   ├── toast-global/      # Sistema de notificaciones
│   │   └── ui/                # Componentes base (Button, Input, etc.)
│   ├── constants/             # Constantes y configuración
│   ├── utils/                 # Funciones utilitarias
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página de entrada
├── public/
│   ├── icons/                 # Iconos SVG
│   └── logos/                 # Logos de la aplicación
├── next.config.ts             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind CSS
└── tsconfig.json              # Configuración de TypeScript
```

## 🔧 Configuración de Git Hooks

El proyecto utiliza `simple-git-hooks` y `lint-staged` para mantener la calidad del código:

- **Pre-commit**: Formatea archivos con Prettier
- **Pre-push**: Verifica formato, tipos y linting

## 🧪 Testing

### Tests End-to-End (E2E)

```bash
# Ejecutar tests en modo headless
npm run e2e

# Ejecutar tests en modo interactivo
npm run e2e:open

# Ejecutar tests en CI
npm run e2e:ci
```

## 📄 Licencia

Este proyecto es **UNLICENSED** - Todos los derechos reservados.

## 👥 Autor

**[Sebasquez](https://www.linkedin.com/in/sebasquez)**

---

<p align="center">
  Desarrollado con ❤️ para Mega Entretenimiento Colombia
</p>