import { ref, reactive, computed } from 'vue'
import { bancoPreguntas } from '../datos/preguntas'

export function useFlashcards() {
  const mazo = ref([])
  const indiceActual = ref(0)
  const estaVolteada = ref(false)
  const opcionesActuales = ref([])
  const respuestaSeleccionada = ref(null)
  
  const correctas = ref(0)
  const incorrectas = ref(0)
  const mostrarResultados = ref(false)

  const tarjetaActual = computed(() => mazo.value[indiceActual.value] || null)

  // Función auxiliar de Fisher-Yates shuffle
  function shuffleArray(array) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function generarOpciones() {
    if (!tarjetaActual.value) return

    // Obtener la respuesta correcta de la tarjeta actual
    const opcionCorrecta = {
      texto: tarjetaActual.value.respuestaCorrecta,
      esCorrecta: true
    }

    // Obtener todas las posibles respuestas incorrectas de otras tarjetas
    const posiblesDistractores = bancoPreguntas
      .filter(p => p.id !== tarjetaActual.value.id)
      .map(p => p.respuestaCorrecta)

    // Mezclar distractores y tomar 3
    const distractoresMezclados = shuffleArray(posiblesDistractores).slice(0, 3)

    const opcionesIncorrectas = distractoresMezclados.map(texto => ({
      texto,
      esCorrecta: false
    }))

    // Mezclar la correcta con las 3 incorrectas
    const opcionesFinales = shuffleArray([opcionCorrecta, ...opcionesIncorrectas])

    // Asignar letras A, B, C, D
    const letras = ['A', 'B', 'C', 'D']
    opcionesActuales.value = opcionesFinales.map((op, i) => ({
      ...op,
      letra: letras[i]
    }))
  }

  function barajar() {
    mazo.value = shuffleArray([...bancoPreguntas])
    indiceActual.value = 0
    estaVolteada.value = false
    respuestaSeleccionada.value = null
    mostrarResultados.value = false
    generarOpciones()
  }

  function siguientePregunta() {
    if (indiceActual.value < mazo.value.length - 1) {
      indiceActual.value++
      estaVolteada.value = false
      respuestaSeleccionada.value = null
      generarOpciones()
    } else {
      // Llegamos al final
      mostrarResultados.value = true
    }
  }

  function seleccionarRespuesta(opcion) {
    if (respuestaSeleccionada.value !== null) return // Ya seleccionó una
    
    respuestaSeleccionada.value = opcion
    if (opcion.esCorrecta) {
      correctas.value++
    } else {
      incorrectas.value++
    }
  }

  function voltear() {
    estaVolteada.value = !estaVolteada.value
  }

  function reiniciarResultados() {
    correctas.value = 0
    incorrectas.value = 0
  }

  function alternarResultados() {
    mostrarResultados.value = !mostrarResultados.value
  }

  // Inicialización
  barajar()
  reiniciarResultados()

  return {
    mazo,
    indiceActual,
    estaVolteada,
    opcionesActuales,
    respuestaSeleccionada,
    correctas,
    incorrectas,
    mostrarResultados,
    tarjetaActual,
    barajar,
    siguientePregunta,
    seleccionarRespuesta,
    voltear,
    reiniciarResultados,
    alternarResultados
  }
}
