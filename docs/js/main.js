
//     TUS UNIDADES (NO MODIFICADO)
const unidades = {
  u1: {
    titulo: "Fundamentos e Introducción a las Estructuras de Datos",
    temas: {
      "Introducción": ["Historia", "Características", "Ventajas y Desventajas"],
      "Tipos de Datos": ["Primitivos", "Compuestos", "Abstractos"],
      "Fundamentos de Algoritmia": ["Concepto", "Representación", "Ciencias de la Computación"]
    }
  },
  u2: {
    titulo: "Estructuras de Datos Lineales",
    temas: {
      "Pila (Stack)": ["¿Qué es una pila?", "Representación gráfica", "Operaciones", "Aplicaciones"],
      "Cola (Queue)": ["¿Qué es una cola?", "Tipos de cola", "Operaciones", "Aplicaciones"],
      "Lista (List)": ["¿Qué es un nodo?", "Tipos de lista", "Operaciones", "Aplicaciones"]
    }
  },
  u3: {
    titulo: "Estructuras de Datos No Lineales",
    temas: {
      "Visualización de Algoritmos": ["Técnicas y herramientas"],
      "Árboles": ["Definición", "Representación", "Recorridos", "Métodos"],
      "Grafos": ["Definición", "Tipos", "Propiedades"]
    }
  },
  u4: {
    titulo: "Búsqueda y Ordenamiento",
    temas: {
      "Análisis de Algoritmos": ["Complejidad (Big O)", "Algoritmos clásicos"],
      "Ordenamiento": ["Burbuja", "QuickSort", "MergeSort"],
      "Búsqueda": ["Secuencial", "Binaria", "Hash"]
    }
  }
};



//  🔹 NUEVO: CONTENIDO REAL PARA CADA SUBTEMA (NO CAMBIA TEMAS)
const informacion = {

  // ========= UNIDAD 1 =========
  "Historia": "Las estructuras de datos tienen una larga y legendaria historia en la informática, con raíces que se remontan a los primeros días de la informática. A principios de los años cincuenta, los investigadores comenzaron a explorar formas de almacenar y organizar datos en computadoras, lo que llevó al desarrollo de algunas de las primeras estructuras de datos. ",
  "Características": "Organización, eficiencia, reutilización, control de memoria, abstracción de datos.",
  "Ventajas y Desventajas": "Ventajas: optimizan memoria y velocidad. Desventajas: algunos requieren más implementación.",

  "Primitivos": "Incluyen enteros, flotantes, booleanos y caracteres. Son manejados directamente por el lenguaje.",
  "Compuestos": "Unen varios datos: Arrays, Registros, Strings.",
  "Abstractos": "Modelos lógicos: Lista, Pila, Cola, Árbol, Grafo.",

  "Concepto": "Un algoritmo es un conjunto ordenado de pasos para resolver un problema.",
  "Representación": "Se puede representar mediante pseudocódigo, diagramas de flujo o código.",
  "Ciencias de la Computación": "La algoritmia es base en optimización, IA, sistemas operativos y bases de datos.",

  // ========= UNIDAD 2 =========
  "¿Qué es una pila?": "Es una estructura LIFO donde el último en entrar es el primero en salir.",
  "Representación gráfica": "Se representa como una columna donde los datos se apilan encima de los otros.",
  "Operaciones": "push(), pop(), peek(), isEmpty().",
  "Aplicaciones": "Deshacer acciones, llamadas recursivas, manejo de expresiones.",

  "¿Qué es una cola?": "Estructura FIFO. El primero en entrar es el primero en salir.",
  "Tipos de cola": "Simple, circular, doble, prioridad.",
  "Operaciones Cola": "enqueue(), dequeue(), front(), isEmpty().",

  "¿Qué es un nodo?": "Elemento principal de listas enlazadas, contiene dato y referencia.",
  "Tipos de lista": "Simple, doble, circular.",
  "Operaciones Lista": "Insertar, eliminar, buscar.",

  // ========= UNIDAD 3 =========
  "Técnicas y herramientas": "Incluye animaciones, diagramas, software como VisuAlgo.",
  "Definición Árbol": "Estructura jerárquica compuesta por nodos conectados.",
  "Representación Árbol": "Nodos conectados con enlaces padre-hijo.",
  "Recorridos": "Preorden, Inorden, Postorden.",
  "Métodos": "Insertar, eliminar, buscar.",

  "Definición Grafo": "Conjunto de nodos conectados mediante aristas.",
  "Tipos Grafo": "Dirigido, no dirigido, ponderado.",
  "Propiedades": "Grado, conexiones, ciclos, componentes.",

  // ========= UNIDAD 4 =========
  "Complejidad (Big O)": "Permite analizar eficiencia de tiempo y espacio.",
  "Algoritmos clásicos": "Divide y vencerás, programación dinámica, greedy.",

  "Burbuja": "Compara elementos contiguos y los intercambia si es necesario.",
  "QuickSort": "Divide la lista en particiones mediante un pivote.",
  "MergeSort": "Divide la lista y la fusiona ordenada.",

  "Secuencial": "Revisa cada elemento hasta encontrar objetivo.",
  "Binaria": "Divide la lista en mitades; requiere lista ordenada.",
  "Hash": "Usa funciones hash para acceso en O(1)."
};



//           MOSTRAR MENÚ POR UNIDAD (NO MODIFICADO)

function mostrarUnidad(id, btn) {
  document.querySelectorAll('.unidades button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const menu = document.getElementById('menu');
  const cont = document.getElementById('contenido');
  const unidad = unidades[id];

  menu.innerHTML = '';
  cont.innerHTML = `
    <div class="card">
      <h2>${unidad.titulo}</h2>
      <p>Selecciona un tema o subtema.</p>
    </div>
  `;

  for (const tema in unidad.temas) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = tema;
    a.href = "#";
    a.onclick = () => mostrarTema(id, tema);
    li.appendChild(a);
    menu.appendChild(li);
  }
}

//     MOSTRAR LOS SUBTEMAS DEL TEMA SELECCIONADO (NO CAMBIADO)

function mostrarTema(unidadId, tema) {
  const cont = document.getElementById('contenido');
  const subtemas = unidades[unidadId].temas[tema];

  cont.innerHTML = `
    <div class="card">
      <h2>${tema}</h2>
      <p><b>Subtemas disponibles:</b></p>
      <ul>
        ${subtemas.map(s => `<li><a href="#" onclick="mostrarSubtema('${s}')">${s}</a></li>`).join('')}
      </ul>
    </div>
  `;
}



//           NUEVO: MOSTRAR INFORMACIÓN DEL SUBTEMA

function mostrarSubtema(nombre) {
  const cont = document.getElementById('contenido');

  const info = informacion[nombre] || "Contenido no disponible.";

  cont.innerHTML = `
    <div class="card">
      <h2>${nombre}</h2>
      <p>${info}</p>
    </div>
  `;
}


// Mostrar unidad 1 al iniciar
mostrarUnidad('u1', document.querySelector('.unidades button'));
