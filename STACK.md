# Stack Tecnológico y Arquitectura

## Stack tecnológico

**Frontend**
- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS v4

**Backend / Base de datos**
- Supabase — base de datos PostgreSQL, autenticación y storage

---

## Arquitectura general

El proyecto se divide en dos partes dentro de la misma aplicación:

**Sitio público** — lo que ven los visitantes. Las páginas consumen datos directamente desde Supabase y se renderizan en el servidor, por lo que cualquier cambio en la base de datos se refleja automáticamente sin necesidad de redesplegar.

**Panel de administración** — accesible solo con login, protegido por middleware. Desde ahí se gestiona todo el contenido: crear, editar y eliminar registros. Los cambios se guardan en Supabase y el sitio los muestra de inmediato.

---

## Panel de administración

Ruta protegida `/admin` con autenticación via Supabase Auth. Solo acceden los usuarios autorizados.

Incluye secciones para gestionar:
- Eventos
- Talleres y actividades
- Ofertas laborales
- Comunicados
- Agenda
- Miembros de junta directiva

Cada sección tiene una vista de tabla con todos los registros y formularios para crear o editar entradas. Diseño simple e intuitivo, sin necesidad de conocimientos técnicos para usarlo.

---

## Flujo de datos

```
Admin carga contenido → se guarda en Supabase → sitio lo muestra automáticamente
```
