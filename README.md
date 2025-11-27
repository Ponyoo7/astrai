# ASTRAI: Tu Asistente de IA Personal

Aplicación web de chat impulsada por la API de Gemini (Google Gen AI) y desarrollada con React. Permite a los usuarios iniciar sesión, crear, eliminar y gestionar conversaciones con la IA de forma sencilla e intuitiva.

Proyecto desplegado en Vercel: (añade aquí tu URL de despliegue)

## Tecnologías Utilizadas

Este proyecto ha sido construido con una arquitectura Frontend pura, consumiendo dos APIs externas: una API simulada (para usuarios y conversaciones) y la API de Google Gen AI.

### Frontend

- React con Vite
- JavaScript (ES6+)

### Gestión de Estado

- React Context para la gestión global del usuario y del estado de los chats.

### Estilos

- Tailwind CSS con paleta de colores personalizada.

### Iconos

- Tabler Icons (React)

### Backend Simulado

- MockAPI para la persistencia de usuarios y conversaciones.

### Inteligencia Artificial

- Google Gen AI — Modelo gemini-2.5-flash-lite

### Generación Dinámica de Avatares

- Avatar Generator API: https://avatar.iran.liara.run/

## Características Principales

- Inicio de sesión con persistencia real en MockAPI
- Creación, consulta y eliminación de conversaciones
- Respuestas rápidas gracias al modelo Gemini Flash Lite
- Contexto de conversación mantenido en cada chat
- Avatares dinámicos para cada usuario
- Modo claro/oscuro (si aplica)
- Diseño totalmente responsive
- Despliegue optimizado en Vercel

## Instalación y Ejecución

### Requisitos previos

- Node.js 18+
- Cuenta en Google AI Studio con API Key válida
- Cuenta en MockAPI

### Pasos

1. Clonar el repositorio
   ```bash
   git clone https://github.com/tuusuario/astrai.git
   ```

2. Entrar en la carpeta del proyecto
   ```bash
   cd astrai
   ```

3. Instalar dependencias
   ```bash
   npm install
   ```

4. Crear archivo de entorno
   ```bash
   cp .env.example .env
   # Añadir tu API Key de Gemini y las URLs de MockAPI
   ```

5. Levantar el servidor de desarrollo
   ```bash
   npm run dev
   ```

## Despliegue

El proyecto está desplegado en Vercel, permitiendo un rendimiento óptimo y actualizaciones rápidas mediante integración continua.

Enlace al despliegue: https://astrai-eight.vercel.app/

## Próximas Mejoras

- Organización avanzada de chats (carpetas o etiquetas)
- Edición de mensajes
- Entrada por voz
- Integración con más modelos de IA
- Mejoras en la lógica de autenticación