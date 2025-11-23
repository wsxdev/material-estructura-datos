# 📚 Estructura de Datos - Sitio Web Académico

Sitio web completo, profesional y moderno para el curso de **Estructura de Datos**. Desarrollado con HTML5, CSS3 y JavaScript vanilla sin dependencias externas.

## 🎯 Características

- ✅ **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles, tablets y desktops
- ✅ **Modo Oscuro/Claro**: Alternancia de temas con persistencia en localStorage
- ✅ **Contenido Completo**: 6 unidades organizadas en 2 ciclos
- ✅ **Paleta de Colores**: Steel-blue profesional con 11 variaciones
- ✅ **Accesibilidad**: HTML semántico, atributos ARIA, navegación por teclado
- ✅ **Animaciones**: Transiciones suaves y efectos visuales
- ✅ **Búsqueda**: Sistema de búsqueda en contenidos
- ✅ **Navegación Inteligente**: Menú responsivo y breadcrumbs

## 📋 Estructura del Curso

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

## 🗂️ Estructura del Proyecto

```
/
├── index.html                    # Página principal del curso
├── README.md                     # Este archivo
├── contenido_silabo.md          # Sílabo del curso (contenido fuente)
├── docs/
│   ├── index.html               # Copia de la página principal
│   ├── css/
│   │   ├── reset.css            # Normalización global
│   │   └── main.css             # Estilos y sistema de diseño
│   ├── js/
│   │   └── main.js              # Funcionalidad JavaScript
│   ├── components/
│   │   ├── header.html          # Componente de navegación
│   │   ├── footer.html          # Componente de pie de página
│   │   ├── about.html           # Página de información del curso
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

## 🎨 Sistema de Diseño

### Paleta de Colores (Steel-Blue)
```css
--sb-50:    #f2f9fd
--sb-100:   #e5f2fb
--sb-200:   #c2e5f5
--sb-300:   #a0d7ee
--sb-400:   #5fb3dc
--sb-500:   #279fd0  /* Principal */
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

## 🚀 Instalación y Uso

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web (para evitar CORS en búsqueda)

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

## 💻 Tecnologías

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

## 👥 Autores

Este material educativo fue desarrollado por:

- **Liset Ibarra** - [@licetdev](https://github.com/licetdev)
  - Email: marialiset13@gmail.com
  - Especialización: Fundamentos y estructuras

- **William Chisag** - [@wsxdev](https://github.com/wsxdev)
  - Email: williamsxdev@gmail.com
  - Especialización: Algoritmos avanzados

- **Britany Redrován** - [@Britany](https://github.com/Britany)
  - Email: redrovanbritany1751623776@gmail.com
  - Especialización: Aplicaciones prácticas

## 📚 Recursos Adicionales

### Referencias
- **Libro**: "Introduction to Algorithms" (CLRS)
- **Plataformas**: LeetCode, Codeforces, HackerRank, AtCoder
- **Visualización**: VisuAlgo, Data Structure Visualizations
- **Comunidad**: Stack Overflow, GitHub, Reddit

### Herramientas Recomendadas
- **Python**: Para implementaciones y pruebas
- **IDE**: VS Code, PyCharm, IntelliJ IDEA
- **Compilador Online**: Replit, LeetCode, Codeforces

## 🔒 Accesibilidad

El sitio cumple con estándares WCAG:
- ✅ Contraste de color adecuado (WCAG AA)
- ✅ Navegación por teclado completa
- ✅ Etiquetas ARIA semánticas
- ✅ Textos alternativos en imágenes
- ✅ Estructuras HTML semánticas

## 🐛 Soporte y Contacto

¿Encontraste un error? ¿Sugerencias de mejora?

- **Email a los autores** (véase sección Autores)
- **Issues en GitHub**: [material-estructura-datos/issues](https://github.com/wsxdev/material-estructura-datos/issues)
- **Pull Requests**: Contribuciones son bienvenidas

## 📄 Licencia

Este proyecto está bajo licencia MIT. Libre para uso educativo y comercial.

```
MIT License - Copyright (c) 2025
Liset Ibarra, William Chisag, Britany Redrován
```

## 📊 Estadísticas del Sitio

- **Páginas**: 12 (1 principal + 1 sobre + 1 contacto + 6 unidades + 3 componentes)
- **Líneas de Código**: ~3500+ (HTML + CSS + JS)
- **Temas Cubiertos**: 20+ temas principales
- **Ejemplos de Código**: 30+ implementaciones
- **Tiempo de Carga**: < 1 segundo (sin optimizaciones)
- **Tamaño Total**: ~500 KB (sin minificación)

## 🎓 Objetivos de Aprendizaje

Al completar este curso, estudiantes serán capaces de:

1. ✅ Comprender y comparar estructuras de datos
2. ✅ Analizar complejidad temporal y espacial
3. ✅ Implementar algoritmos eficientes
4. ✅ Resolver problemas complejos usando ED
5. ✅ Optimizar código para rendimiento
6. ✅ Participar en programación competitiva

## 🔄 Changelog

### v1.0.0 (2025)
- Lanzamiento inicial del sitio
- 6 unidades completas
- Sistema de diseño completo
- Funcionalidad JavaScript completa
- Documentación exhaustiva

---

**Última actualización**: 2025
**Versión**: 1.0.0
**Estado**: Producción ✅
