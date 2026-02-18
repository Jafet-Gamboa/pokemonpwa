# PokemonPWA

Aplicación Web Progresiva (PWA) desarrollada con **React + Vite** que consume la API pública de Pokémon. Permite buscar Pokémon por nombre, visualizar su información básica y funcionar en modo offline mostrando el último resultado consultado.

---

## Descripción del Proyecto

Esta aplicación fue desarrollada como parte de una actividad académica cuyo objetivo es:

- Consumir una API REST pública
- Desarrollar una PWA funcional
- Implementar modo offline básico
- Estructurar un proyecto profesional en GitHub
- Documentar correctamente el software

La aplicación simula un flujo real de desarrollo: **ideación → implementación → publicación**.

---

## API Utilizada

**PokéAPI** — https://pokeapi.co/api/v2/pokemon/

No requiere autenticación ni tarjeta bancaria.

---

## Funcionalidades

- Búsqueda de Pokémon por nombre
- Visualización de imagen, tipo, altura y peso
- Guardado automático del último Pokémon consultado
- Modo offline básico (muestra el último resultado guardado)
- Instalación como aplicación en el dispositivo
- Funcionamiento en modo standalone

---

## Tecnologías Utilizadas

- React
- Vite
- JavaScript
- Service Workers
- Web App Manifest
- LocalStorage
- PokéAPI

---

## Requisitos Técnicos Cumplidos

- Aplicación PWA funcional
- Consumo de API REST pública
- Archivo `manifest.json`
- Service Worker funcional
- Instalación en dispositivo
- Modo offline básico implementado
- Repositorio público en GitHub

---

## Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Jafet-Gamboa/pokemonpwa.git
   ```

2. Entrar a la carpeta del proyecto:
   ```bash
   cd pokemonpwa
   ```

3. Instalar dependencias:
   ```bash
   npm install
   ```

4. Generar versión de producción:
   ```bash
   npm run build
   ```

5. Ejecutar en modo preview (producción local):
   ```bash
   npm run preview
   ```

> **Importante:** Las PWAs no funcionan correctamente con `npm run dev`. Siempre probar con `build` + `preview`.

---

## Cómo Probar el Modo Offline

1. Ejecutar la aplicación con `npm run preview`
2. Buscar un Pokémon (para que se guarde en localStorage)
3. Abrir DevTools (`F12`)
4. Ir a la pestaña **Network**
5. Cambiar a modo **Offline**
6. Recargar la página

La aplicación mostrará el último Pokémon guardado.

---

## Instalación como App

En **Google Chrome**:

1. Abrir la aplicación en modo preview
2. Hacer clic en el ícono de instalación en la barra de direcciones
3. Instalar la aplicación

Se ejecutará en modo standalone (sin barra del navegador).

---

## Manifest

El archivo `manifest.json` permite configurar:

- Nombre de la aplicación
- Iconos de instalación
- Tema de color
- Modo standalone
- Configuración de inicio

---

## Service Worker

El service worker implementa:

- Cache de recursos estáticos
- Estrategia cache-first
- Soporte para modo offline básico

---

Proyecto académico con fines educativos.