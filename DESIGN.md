# DESIGN SYSTEM — IEEE CAS UNI
**Sección Estudiantil · Universidad Nacional de Ingeniería · Lima, Perú**

> Extraído directamente del CSS de [ieee-cas.org](https://ieee-cas.org) vía `curl` + análisis manual.  
> Este documento es la fuente de verdad de identidad visual para el sitio de la sección estudiantil.

---

## 1. Principios de diseño

| Principio | Descripción |
|-----------|-------------|
| **Identidad heredada** | El sitio respeta la marca IEEE CAS mundial (colores, tipografía, estructura de nav) |
| **Personalidad propia** | Tono más joven, dinámico y cercano que el sitio institucional madre |
| **Accesibilidad** | Contraste mínimo WCAG 2.0 AA en todos los textos sobre fondos de color |
| **Mobile-first** | Diseño pensado desde pantallas pequeñas hacia arriba |
| **Contenido primero** | El layout sirve al contenido, no al revés |

---

## 2. Colores

### 2.1 Paleta primaria (heredada de IEEE CAS)

> Fuente: variable `--color-primary-*` del archivo `theme-7bfa3be6e8ff683c9845cd0bfc3d179a.css` de ieee-cas.org

| Token | Hex | Uso |
|-------|-----|-----|
| `primary-300` | `#339F75` | Hover de elementos sutiles, iconos secundarios |
| `primary-400` | `#008752` | **Color principal de marca** — botones, links activos, acentos |
| `primary-500` | `#006C42` | Hover de botones primarios |
| `primary-600` | `#005131` | Estados presionados, texto sobre fondo claro |
| `primary-100` | `#CCE7DC` | Fondos de chips, badges, highlights suaves |

### 2.2 Paleta secundaria — Naranja

| Token | Hex | Uso |
|-------|-----|-----|
| `secondary-200` | `#FABC89` | Fondos de alerta suave, banners informativos |
| `secondary-300` | `#F79140` | Iconos de acento, etiquetas de categoría |
| `secondary-400` | `#E26909` | **Acento principal** — CTA secundario, fechas, badges de evento |

### 2.3 Paleta de soporte

| Token | Hex | Uso |
|-------|-----|-----|
| `quaternary-300` | `#1BC7F6` | Detalles técnicos, chips de tecnología, código |
| `quaternary-400` | `#0792B9` | Links secundarios sobre fondo oscuro |
| `tertiary-300`   | `#FFCA54` | Advertencias, highlights de premios, estrellas |

### 2.4 Neutros

| Token | Valor aprox. | Uso |
|-------|-------------|-----|
| `gray-900` | `#111827` | Texto principal del body, top bar del nav |
| `gray-700` | `#374151` | Texto secundario, subtítulos |
| `gray-500` | `#6B7280` | Texto deshabilitado, placeholders |
| `gray-300` | `#D1D5DB` | Bordes, separadores, iconos inactivos |
| `gray-100` | `#F3F4F6` | Fondos de cards, secciones alternadas |
| `gray-50`  | `#F9FAFB` | Fondo general de página |
| `white`    | `#FFFFFF`  | Nav principal, cards, modales |

### 2.5 CSS Custom Properties (implementación)

```css
:root {
  /* Primarios — Verde IEEE CAS */
  --color-primary-100: #CCE7DC;
  --color-primary-300: #339F75;
  --color-primary-400: #008752;
  --color-primary-500: #006C42;
  --color-primary-600: #005131;

  /* Secundarios — Naranja */
  --color-secondary-200: #FABC89;
  --color-secondary-300: #F79140;
  --color-secondary-400: #E26909;

  /* Soporte — Cyan */
  --color-quaternary-300: #1BC7F6;
  --color-quaternary-400: #0792B9;

  /* Soporte — Amarillo */
  --color-tertiary-300: #FFCA54;

  /* Semánticos (aliases) */
  --color-brand:      var(--color-primary-400);
  --color-brand-dark: var(--color-primary-500);
  --color-accent:     var(--color-secondary-400);
  --color-info:       var(--color-quaternary-300);
  --color-warning:    var(--color-tertiary-300);

  /* Superficies */
  --surface-page:   #F9FAFB;
  --surface-card:   #FFFFFF;
  --surface-dark:   #111827;

  /* Texto */
  --text-primary:   #111827;
  --text-secondary: #374151;
  --text-muted:     #6B7280;
  --text-on-dark:   #D1D5DB;
  --text-on-brand:  #FFFFFF;
}
```

---

## 3. Tipografía

### 3.1 Fuentes

| Rol | Fuente | Peso | Origen |
|-----|--------|------|--------|
| **Body / UI** | `Inter` | 300, 400, 500, 600 | Google Fonts / system |
| **Fallback** | `ui-sans-serif, system-ui, -apple-system` | — | Sistema |

> IEEE CAS mundial usa **Inter** como fuente de sistema en toda su plataforma digital.
> No se usa ninguna fuente serif ni display especial en el sitio madre.

### 3.2 Escala tipográfica

| Nombre | Tamaño | Peso | Line-height | Uso |
|--------|--------|------|-------------|-----|
| `display-xl` | 3.5rem (56px) | 700 | 1.1 | Hero titles |
| `display-lg` | 2.5rem (40px) | 700 | 1.15 | Títulos de sección |
| `display-md` | 1.875rem (30px) | 600 | 1.2 | Subtítulos, tarjetas destacadas |
| `heading-lg` | 1.5rem (24px) | 600 | 1.3 | H2 de contenido |
| `heading-md` | 1.25rem (20px) | 600 | 1.4 | H3, títulos de card |
| `body-lg` | 1.125rem (18px) | 400 | 1.7 | Párrafos principales |
| `body-md` | 1rem (16px) | 400 | 1.6 | Texto general |
| `body-sm` | 0.875rem (14px) | 400 | 1.5 | Texto secundario, labels |
| `caption` | 0.75rem (12px) | 500 | 1.4 | Metadatos, fechas, etiquetas |
| `mono` | 0.875rem (14px) | 400 | 1.5 | Código, identificadores técnicos |

> **Regla de accesibilidad**: tamaño mínimo `15px` en body text (norma IEEE Brand Guidelines).

### 3.3 Importación

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
```

---

## 4. Espaciado

Sistema basado en múltiplos de `4px` (igual que Tailwind).

| Token | Valor | Uso típico |
|-------|-------|------------|
| `space-1` | 4px | Gaps mínimos entre iconos y texto |
| `space-2` | 8px | Padding interno de chips/badges |
| `space-3` | 12px | Padding de botones pequeños |
| `space-4` | 16px | Padding base de cards |
| `space-6` | 24px | Gap entre elementos de lista |
| `space-8` | 32px | Padding de cards grandes |
| `space-12` | 48px | Espaciado entre secciones menores |
| `space-16` | 64px | Espaciado entre secciones |
| `space-24` | 96px | Secciones hero, márgenes verticales mayores |

---

## 5. Componentes

### 5.1 Botones

```
Primario    → bg: #008752 | text: white  | hover: #006C42
Secundario  → bg: white   | text: #008752| border: #008752 | hover bg: #CCE7DC
Peligro     → bg: #E26909 | text: white  | hover: #98460A
Ghost       → bg: transparent | text: gray-700 | hover text: #008752
```

**Tamaños**:
- `sm`: padding `6px 12px`, font-size `13px`
- `md`: padding `10px 20px`, font-size `15px` ← default
- `lg`: padding `14px 28px`, font-size `16px`

**Bordes**: `border-radius: 4px` (sutil, no pills)

### 5.2 Cards

```
Fondo:      white (#FFFFFF)
Borde:      1px solid #E5E7EB (gray-200)
Radio:      8px
Sombra:     0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)
Hover:      box-shadow más pronunciada + translateY(-2px)
```

**Variante destacada**: borde superior de 3px en `#008752`

### 5.3 Navigation

**Nivel 1 — Top bar**
```
Fondo:        #111827 (gray-900)
Texto:        #D1D5DB (gray-300)
Hover texto:  white
Font-size:    12px, font-weight: 600
Contenido:    Links a IEEE.org, IEEE Xplore, IEEE Standards, IEEE Spectrum
```

**Nivel 2 — Main nav**
```
Fondo:        white
Altura:       80px (h-20)
Logo:         SVG horizontal, alineado a la izquierda
Links:        font-weight: bold, color: gray-900
Link activo:  color: #008752
Hover:        color: gray-500
CTA (Únete): bg: #008752, text: white, border-radius: 4px
```

### 5.4 Badges / Etiquetas de evento

```
Workshop:    bg: #CCE7DC  | text: #005131  | "Workshop"
Conferencia: bg: #FDE6D3  | text: #7F3C05  | "Conferencia"
Competencia: bg: #FFF3D8  | text: #7C5600  | "Competencia"
Webinar:     bg: #DFF7FE  | text: #03485B  | "Webinar"
```

### 5.5 Links

```
Color base:    #008752
Hover:         #006C42
Visited:       #005131
Subrayado:     solo en hover (no por defecto)
```

---

## 6. Layout

### 6.1 Contenedor máximo

```css
.container {
  max-width: 1280px;   /* xl breakpoint de Tailwind */
  margin: 0 auto;
  padding: 0 1.5rem;   /* 24px a cada lado */
}

/* En móvil */
@media (max-width: 640px) {
  .container { padding: 0 1rem; }
}
```

### 6.2 Breakpoints (Tailwind estándar)

| Nombre | Ancho mínimo | Dispositivo |
|--------|-------------|-------------|
| `sm`   | 640px  | Móvil grande |
| `md`   | 768px  | Tablet |
| `lg`   | 1024px | Desktop pequeño |
| `xl`   | 1280px | Desktop |
| `2xl`  | 1536px | Desktop grande |

### 6.3 Grid del sitio

```
Hero:        1 columna, full-width, altura 100vh en desktop
Stats bar:   4 columnas (2 en móvil)
About:       2 columnas asimétricas 60/40 (1 en móvil)
Eventos:     3 columnas (1 en móvil, 2 en tablet)
Equipo:      4 columnas (2 en móvil)
Footer:      2 columnas (1 en móvil)
```

---

## 7. Iconografía

- **Biblioteca**: Font Awesome 6 Free
- **Color primario FA**: `#152B6F` (azul navy IEEE) ← no cambiar, es de marca global
- **Tamaño default**: `1rem` (16px)
- **Estilo preferido**: `fa-solid` para acciones, `fa-regular` para estados

---

## 8. Estructura de páginas

### 8.1 Homepage (`index.html`)

```
┌─────────────────────────────┐
│  Top Bar (IEEE network)      │  bg-gray-900
├─────────────────────────────┤
│  Main Nav (logo + menu)      │  bg-white, sticky
├─────────────────────────────┤
│  Hero                        │  Título, tagline, 2 CTAs
├─────────────────────────────┤
│  Stats Bar                   │  Miembros · Eventos · Proyectos · Años
├─────────────────────────────┤
│  About / Misión              │  Texto + visual PCB/circuito
├─────────────────────────────┤
│  Próximos Eventos            │  3 cards con fecha y tipo
├─────────────────────────────┤
│  Equipo 2026                 │  Grid de fotos/avatares
├─────────────────────────────┤
│  Únete (CTA)                 │  Call to action con formulario o email
├─────────────────────────────┤
│  Footer                      │  Copyright · Redes · Links IEEE
└─────────────────────────────┘
```

### 8.2 Páginas adicionales (roadmap)

| Página | Ruta | Descripción |
|--------|------|-------------|
| Eventos | `/eventos` | Listado completo, filtros por tipo |
| Proyecto | `/proyectos` | Galería de proyectos del capítulo |
| Equipo | `/equipo` | Junta directiva + comités |
| Recursos | `/recursos` | Materiales, tutoriales, links IEEE |
| Contacto | `/contacto` | Formulario de contacto y redes |

---

## 9. Identidad IEEE CAS UNI

### 9.1 Nombre oficial
```
IEEE Circuits and Systems Society — UNI Student Branch Chapter
Nombre corto: IEEE CAS UNI
```

### 9.2 Logo
- Usar el logo oficial de IEEE CASS cuando sea posible
- El logo de UNI puede aparecer junto al de IEEE en el footer
- No mezclar ambos logos en el header principal (usar solo el de CASS)

### 9.3 Voz y tono

| Contexto | Tono |
|----------|------|
| Títulos y hero | Directo, aspiracional, técnico |
| Cuerpo de texto | Claro, inclusivo, en español peruano neutro |
| CTAs | Activo, urgente sin ser agresivo |
| Eventos y noticias | Informativo, con entusiasmo medido |

> Evitar: jerga excesiva, anglicismos innecesarios, tono demasiado corporativo.  
> Preferir: "Únete a la red" sobre "Become a member", "Diseño digital" sobre "Digital design".

---

## 10. Assets y recursos

| Asset | Formato | Ubicación |
|-------|---------|-----------|
| Logo IEEE CASS | SVG | Descargar desde [ieee-cas.org/cass-branding-promotional-media](https://ieee-cas.org/cass-branding-promotional-media) |
| Logo UNI | SVG/PNG | Solicitar a la oficina de comunicaciones UNI |
| Favicon | PNG 32x32 | `/assets/favicon.png` |
| Fuente Inter | Web | Google Fonts CDN |
| Iconos | SVG / FA | Font Awesome 6 Free |

---

## 11. Decisiones de diseño documentadas

| Decisión | Razón |
|----------|-------|
| Heredar verde `#008752` como primario | Mantiene coherencia con la marca IEEE CAS mundial |
| Usar Inter como única fuente | Es la fuente oficial digital de IEEE; evita cargar fuentes extra |
| Nav de 2 niveles (top bar + main) | Replica la estructura del sitio madre para usuarios que ya conocen IEEE |
| Cards sin border-radius excesivo | Mantiene la seriedad técnica/institucional del contexto IEEE |
| CTA principal en verde, secundario en borde | Jerarquía clara entre "Únete" (primario) y "Más info" (secundario) |
| Footer con links IEEE network | El sitio estudiantil siempre debe conectar al ecosistema IEEE global |

---

*DESIGN.md — IEEE CAS UNI · Última actualización: mayo 2026*
