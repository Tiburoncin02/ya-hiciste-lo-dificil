# Un paso más cerca

Landing page interactiva de un solo scroll, pensada como un recordatorio cálido antes de una
revisión académica final. Repasa el esfuerzo de una carrera universitaria en cifras, valida los
nervios previos al trámite, ofrece un pasaje bíblico de aliento y cierra con una pregunta
interactiva ("¿con qué antojo celebramos?") que se envía como formulario.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing)
- Tailwind CSS 4
- Netlify Forms para capturar la respuesta del cierre interactivo
- Tipografías: **Fraunces** (display) + **Sora** (texto), vía Google Fonts

## Estructura

- `src/routes/index.tsx` — página única con las 5 secciones del guion (encabezado, métricas,
  validación emocional, versículo, cierre interactivo).
- `src/components/Reveal.tsx` — utilidad de scroll-reveal basada en `IntersectionObserver`.
- `src/styles.css` — variables de color, tipografía y animaciones.
- `public/__forms.html` — esqueleto estático requerido para que Netlify detecte el formulario
  `antojo` en build time (ver skill `netlify-forms`).

## Desarrollo local

```bash
pnpm install
pnpm dev
```

o con emulación completa de Netlify:

```bash
netlify dev --port 8889
```

## Build

```bash
pnpm build
```
