<template>
  <div class="tarjeta-escena">
    <div class="tarjeta-interna" :class="{ volteada: estaVolteada }">
      
      <!-- FRENTE: Pregunta y Opciones -->
      <div class="cara-frente">
        <div class="progreso">Tarjeta {{ indiceActual + 1 }} / {{ mazoLength }}</div>
        
        <h2 class="pregunta">{{ tarjeta.pregunta }}</h2>
        
        <div class="opciones-contenedor">
          <OpcionRespuesta 
            v-for="opcion in opciones" 
            :key="opcion.letra"
            :opcion="opcion"
            :seleccionada="respuestaSeleccionada?.letra === opcion.letra"
            :algunaSeleccionada="respuestaSeleccionada !== null"
            @seleccionar="$emit('seleccionar-respuesta', $event)"
          />
        </div>

        <button 
          v-if="respuestaSeleccionada"
          class="btn-mas-info" 
          @click="$emit('voltear')"
        >
          Más información
        </button>
      </div>

      <!-- REVERSO: Información Adicional -->
      <div class="cara-reverso">
        <h3 class="titulo-reverso">Más información</h3>
        <p class="info-texto">{{ tarjeta.infoAdicional }}</p>
        <button class="btn-volver" @click="$emit('voltear')">
          Volver a la pregunta
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import OpcionRespuesta from './OpcionRespuesta.vue'

defineProps({
  tarjeta: Object,
  opciones: Array,
  estaVolteada: Boolean,
  respuestaSeleccionada: Object,
  indiceActual: Number,
  mazoLength: Number
})

defineEmits(['seleccionar-respuesta', 'voltear'])
</script>

<style scoped>
.tarjeta-escena {
  perspective: 1000px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 450px;
}

.tarjeta-interna {
  position: relative;
  width: 100%;
  min-height: 450px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.tarjeta-interna.volteada {
  transform: rotateY(180deg);
}

.cara-frente, .cara-reverso {
  backface-visibility: hidden;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.cara-frente {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 450px;
}

.cara-reverso {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  background-color: #f8f9fa;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
}

.progreso {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1rem;
  font-weight: 600;
}

.pregunta {
  font-size: 1.4rem;
  color: #212529;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.opciones-contenedor {
  flex: 1;
}

.btn-mas-info {
  margin-top: 1rem;
  background: none;
  border: none;
  color: #0d6efd;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1rem;
}

.btn-mas-info:hover {
  color: #0a58ca;
}

.titulo-reverso {
  font-size: 1.5rem;
  color: #212529;
  margin-bottom: 1.5rem;
}

.info-texto {
  font-size: 1.1rem;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn-volver {
  padding: 0.8rem 1.5rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-volver:hover {
  background-color: #5c636a;
}
</style>
