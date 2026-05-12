export const bancoPreguntas = [
  {
    id: 1,
    pregunta: "¿Qué operador se usa para comparación estricta en JavaScript?",
    respuestaCorrecta: "===",
    infoAdicional: "El operador === compara el valor y el tipo de dato, a diferencia de == que solo compara el valor tras realizar una conversión de tipo implícita."
  },
  {
    id: 2,
    pregunta: "¿Qué palabra clave se usa para declarar una variable que no puede ser reasignada?",
    respuestaCorrecta: "const",
    infoAdicional: "La palabra clave 'const' crea una referencia de solo lectura a un valor. Esto no significa que el valor que contiene sea inmutable, solo que el identificador no puede ser reasignado."
  },
  {
    id: 3,
    pregunta: "¿Qué método de array se utiliza para crear un nuevo array con todos los elementos que pasan una prueba implementada por una función proporcionada?",
    respuestaCorrecta: "filter()",
    infoAdicional: "El método filter() llama a una función callback proporcionada una vez por cada elemento de un array, y construye un nuevo array con todos los valores para los cuales el callback devuelve true."
  },
  {
    id: 4,
    pregunta: "¿Qué función se utiliza para convertir una cadena de texto en un objeto de JavaScript?",
    respuestaCorrecta: "JSON.parse()",
    infoAdicional: "JSON.parse() analiza una cadena de texto JSON, construyendo opcionalmente el valor o el objeto JavaScript descrito por la cadena."
  },
  {
    id: 5,
    pregunta: "¿Qué palabra clave se usa en una función para devolver un valor y finalizar su ejecución?",
    respuestaCorrecta: "return",
    infoAdicional: "La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto al llamador de la función."
  },
  {
    id: 6,
    pregunta: "¿Cómo se llama el proceso en el que JavaScript mueve las declaraciones al principio de su ámbito local o global?",
    respuestaCorrecta: "Hoisting",
    infoAdicional: "Hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones son movidas físicamente al inicio de su contexto de ejecución antes de que el código sea ejecutado."
  },
  {
    id: 7,
    pregunta: "¿Qué tipo de datos en JavaScript representa la ausencia intencional de cualquier valor de objeto?",
    respuestaCorrecta: "null",
    infoAdicional: "null es un literal (no una propiedad del objeto global como undefined). Representa un valor nulo o 'vacío' apuntado deliberadamente."
  },
  {
    id: 8,
    pregunta: "¿Qué objeto integrado de JavaScript proporciona métodos matemáticos como round() y random()?",
    respuestaCorrecta: "Math",
    infoAdicional: "Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un constructor."
  },
  {
    id: 9,
    pregunta: "¿Qué símbolo se utiliza para acceder a los métodos de un objeto?",
    respuestaCorrecta: "El punto (.)",
    infoAdicional: "El operador de punto permite acceder a las propiedades y métodos de un objeto. También es posible usar notación de corchetes ['propiedad'] si el nombre de la propiedad es dinámico o contiene espacios."
  },
  {
    id: 10,
    pregunta: "¿Qué función asíncrona devuelve una Promesa y se introdujo en ES2017 para manejar operaciones asíncronas de manera más limpia?",
    respuestaCorrecta: "async/await",
    infoAdicional: "Las palabras clave async y await permiten que el comportamiento asíncrono basado en promesas se escriba de un estilo más limpio, evitando la necesidad de configurar explícitamente cadenas de promesas ('.then()')."
  }
];
