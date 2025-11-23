# Estructura de Datos - Sitio Web Académico

Sitio web completo, profesional y moderno para el curso de **Estructura de Datos**. Desarrollado con HTML5, CSS3 y JavaScript vanilla sin dependencias externas.

## Características

- **Contenido Completo**: 6 unidades organizadas en 2 ciclos
- **Navegación**: Menú y breadcrumbs
- **Búsqueda**: Sistema de búsqueda en contenidos
- **Accesibilidad**: HTML semántico, navegación por teclado
- **Diseño**: Funciona en dispositivos móviles, tablets y desktops
- **Modo Oscuro/Claro**: Alternancia de temas con persistencia en localStorage
- **Paleta de Colores**: Steel-blue con 11 variaciones
- **Animaciones**: Transiciones suaves y efectos visuales

## Estructura del Curso

### Ciclo I: Fundamentos (Unidades 1-3)
1. **Unidad 1: Fundamentos e Introducción**
   - Tipos de datos primitivos y compuestos
   - Algoritmia básica
   - Introducción a la complejidad

2. **Unidad 2: Estructuras Lineales**
   - Pilas (LIFO)
   - Colas (FIFO)
   - Listas enlazadas

3. **Unidad 3: Estructuras No Lineales**
   - Árboles y recorridos
   - Grafos y representaciones
   - Algoritmos de búsqueda en grafos (BFS, DFS)

### Ciclo II: Avanzado (Unidades 4-6)
4. **Unidad 4: Búsqueda y Ordenamiento**
   - Análisis de complejidad (Big O)
   - Algoritmos de ordenamiento (Bubble Sort, Quicksort, Mergesort)
   - Algoritmos de búsqueda (Secuencial, Binaria, Hash)

5. **Unidad 5: Aplicaciones Avanzadas I**
   - Técnicas de optimización (Memoización, Sliding Window, DP)
   - Patrones avanzados (Backtracking, Greedy, Divide y Conquista)
   - Programación competitiva

6. **Unidad 6: Aplicaciones Avanzadas II**
   - Proyectos integradores (Sistema de procesos, Compresor Huffman, Red Social, LRU Cache)
   - Temas especiales (Suffix Arrays, Segment Trees, Tries, Union-Find)
   - Conclusión y perspectivas futuras

## Estructura del Proyecto

```
/
├── README.md                    # Este archivo
├── contenido_silabo.md          # Sílabo del curso
├── docs/
│   ├── index.html               # Página principal
│   ├── css/
│   │   ├── reset.css            # Normalización global
│   │   └── main.css             # Estilos y sistema de diseño
│   ├── js/
│   │   └── main.js              # Funcionalidad JavaScript
│   ├── components/
│   │   ├── header.html          # Componente de navegación
│   │   ├── footer.html          # Componente de pie de página
│   │   ├── about.html           # Página de información del sitio web
│   │   ├── contact.html         # Página de contacto y autores
│   │   └── units/
│   │       ├── unidad1.html     # Fundamentos e Introducción
│   │       ├── unidad2.html     # Estructuras Lineales
│   │       ├── unidad3.html     # Estructuras No Lineales
│   │       ├── unidad4.html     # Búsqueda y Ordenamiento
│   │       ├── unidad5.html     # Aplicaciones Avanzadas I
│   │       └── unidad6.html     # Aplicaciones Avanzadas II
│   ├── resources/
│   │   ├── icons/               # Iconos del sitio
│   │   ├── images/              # Imágenes
│   │   └── svg/                 # Gráficos SVG
```

## Sistema de Diseño

### Paleta de Colores (Steel-Blue)
```css
--sb-50:    #f2f9fd
--sb-100:   #e5f2fb
--sb-200:   #c2e5f5
--sb-300:   #a0d7ee
--sb-400:   #5fb3dc
--sb-500:   #279fd0  /* Color principal (primary) */
--sb-600:   #1a87bb
--sb-700:   #15668f
--sb-800:   #0f2f42
--sb-900:   #0d2535
--sb-950:   #051014
```

### Componentes Principales
- **Cards**: Contenedores con sombra y hover effect
- **Botones**: Primary, secondary, outline variants
- **Grid**: Sistema responsivo (1-4 columnas)
- **Badges**: Para etiquetas y categorías
- **Tabla de Contenidos**: Navegación lateral en unidades

## Instalación y Uso

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalación Local

1. **Clonar o descargar el repositorio:**
```bash
git clone https://github.com/wsxdev/material-estructura-datos.git
cd material-estructura-datos
```

2. **Iniciar un servidor local:**

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

3. **Acceder en el navegador:**
```
http://localhost:8000
```

### GitHub Pages

Este proyecto está listo para GitHub Pages:

1. Hacer fork del repositorio
2. Habilitar GitHub Pages en Settings
3. Acceder a: `https://usuario.github.io/material-estructura-datos`

## Tecnologías

### Frontend
- **HTML5**: Semántico y accesible
- **CSS3**: Variables, Grid, Flexbox, Media queries
- **JavaScript Vanilla**: Sin dependencias externas
  - ThemeManager: Gestión de temas claro/oscuro
  - MenuManager: Menú responsivo
  - SearchManager: Búsqueda de contenidos
  - ScrollAnimations: Efectos al desplazarse
  - Accesibilidad mejorada

### Características JavaScript
- localStorage para persistencia de preferencias
- Intersection Observer para animaciones
- Smooth scrolling hash-based
- Detección de preferencia del sistema

## Autores

Este material educativo fue desarrollado por:

- **Licet Ibarra** - [@licetdev](https://github.com/licetdev)
  - Email: marialiset13@gmail.com
  - Especialización: TI

- **William Chisag** - [@wsxdev](https://github.com/wsxdev)
  - Email: williamsxdev@gmail.com
  - Especialización: TI

- **Britany Redrován** - [@Britany](https://github.com/Britany)
  - Email: redrovanbritany1751623776@gmail.com
  - Especialización: TI

## Soporte y Contacto

¿Encontraste un error? ¿Sugerencias de mejora?

- **Email a los autores** (véase sección Autores)
- **Issues en GitHub**: [material-estructura-datos/issues](https://github.com/wsxdev/material-estructura-datos/issues)
- **Pull Requests**: Contribuciones son bienvenidas

## Licencia

Este proyecto está bajo licencia MIT. Libre para uso educativo y comercial.

```
MIT License - Copyright (c) 2025
Liset Ibarra, William Chisag, Britany Redrován
```

## Changelog

### v1.0.0 (2025)
- Lanzamiento inicial del sitio
- 6 unidades completas
- Sistema de diseño completo
- Funcionalidad JavaScript completa
- Documentación detallada

---

**Última actualización**: 2025
**Versión**: 1.0.0
**Estado**: Producción
