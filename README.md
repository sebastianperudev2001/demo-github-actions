# GitHub Actions Demo Lab

Este repositorio contiene un backend sencillo en Node.js con Express y tests en Jest. El objetivo de este laboratorio es aprender a configurar workflows de GitHub Actions para Integración Continua (CI).

## Estructura del Proyecto

- `src/`: Código fuente del backend.
- `tests/`: Tests de integración.
- `.github/workflows/`: Definición de los pipelines de CI.

## Comandos

- `npm start`: Inicia el servidor en el puerto 3000.
- `npm test`: Ejecuta los tests.

## Workflows

### CI (Build & Test)
El archivo `.github/workflows/ci.yml` define un workflow que se ejecuta en cada push y pull request a la rama `main`.
1. Instala dependencias.
2. Ejecuta los tests en Node.js 18.x y 20.x.

### Linter
El archivo `.github/workflows/linter.yml` es un ejemplo de cómo añadir verificaciones de estilo (aunque en este demo es básico).
