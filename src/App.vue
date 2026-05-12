<template>
  <div class="app-container">
    <header>
      <h1>Flashcards JavaScript</h1>
    </header>

    <main class="main-content">
      <div v-if="mostrarResultados" class="overlay">
        <PanelResultados 
          :correctas="correctas"
          :incorrectas="incorrectas"
          @reiniciar="reiniciarResultados"
          @cerrar="alternarResultados"
        />
      </div>

      <template v-else>
        <Tarjeta 
          v-if="tarjetaActual"
          :tarjeta="tarjetaActual"
          :opciones="opcionesActuales"
          :esta-volteada="estaVolteada"
          :respuesta-seleccionada="respuestaSeleccionada"
          :indice-actual="indiceActual"
          :mazo-length="mazo.length"
          @seleccionar-respuesta="seleccionarRespuesta"
          @voltear="voltear"
        />

        <BarraControles 
          :puede-avanzar="respuestaSeleccionada !== null"
          @toggle-resultados="alternarResultados"
          @barajar="barajar"
          @siguiente="siguientePregunta"
        />
      </template>
    </main>
  </div>
</template>

<script setup>
import { useFlashcards } from './composables/useFlashcards'
import Tarjeta from './componentes/Tarjeta.vue'
import PanelResultados from './componentes/PanelResultados.vue'
import BarraControles from './componentes/BarraControles.vue'
import './estilos.css'

const {
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
} = useFlashcards()
</script>
