<template>
  <button 
    class="opcion-btn" 
    :class="clasesEstado"
    :disabled="deshabilitado"
    @click="$emit('seleccionar', opcion)"
  >
    <span class="letra">{{ opcion.letra }}</span>
    <span class="texto">{{ opcion.texto }}</span>
  </button>
  <div v-if="seleccionada" class="mensaje-feedback" :class="{ 'texto-correcto': opcion.esCorrecta, 'texto-incorrecto': !opcion.esCorrecta }">
    {{ opcion.esCorrecta ? '¡Correcto!' : 'Respuesta incorrecta' }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  opcion: Object,
  seleccionada: Boolean,
  algunaSeleccionada: Boolean
})

defineEmits(['seleccionar'])

const deshabilitado = computed(() => props.algunaSeleccionada && !props.seleccionada)

const clasesEstado = computed(() => {
  if (!props.algunaSeleccionada) return ''
  
  if (props.seleccionada) {
    return props.opcion.esCorrecta ? 'correcta' : 'incorrecta'
  }
  
  if (props.opcion.esCorrecta && props.algunaSeleccionada) {
    return 'correcta-revelada' // Revela cuál era la correcta si se equivoca
  }
  
  return 'deshabilitada'
})
</script>

<style scoped>
.opcion-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.8rem;
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.opcion-btn:hover:not(:disabled) {
  background-color: #e2e6ea;
  border-color: #dae0e5;
  transform: translateX(5px);
}

.letra {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #e9ecef;
  border-radius: 50%;
  margin-right: 1rem;
  font-weight: bold;
  color: #495057;
}

.texto {
  font-size: 1rem;
  color: #212529;
  flex: 1;
}

/* Estados */
.correcta {
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.correcta .letra { background-color: #28a745; color: white; }

.incorrecta {
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.incorrecta .letra { background-color: #dc3545; color: white; }

.correcta-revelada {
  border-color: #28a745;
  border-style: dashed;
}

.deshabilitada {
  opacity: 0.6;
  cursor: not-allowed;
}

.mensaje-feedback {
  font-weight: bold;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.texto-correcto { color: #28a745; }
.texto-incorrecto { color: #dc3545; }
</style>
