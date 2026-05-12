<template>
  <div class="panel-resultados">
    <h2>Resultados de tu sesión</h2>
    
    <div class="stats">
      <div class="stat-box correcto">
        <span class="numero">{{ correctas }}</span>
        <span class="label">Correctas</span>
      </div>
      <div class="stat-box incorrecto">
        <span class="numero">{{ incorrectas }}</span>
        <span class="label">Incorrectas</span>
      </div>
      <div class="stat-box precision">
        <span class="numero">{{ porcentaje }}%</span>
        <span class="label">Precisión</span>
      </div>
    </div>

    <div class="acciones">
      <button class="btn-reiniciar" @click="$emit('reiniciar')">
        Reiniciar Marcador
      </button>
      <button class="btn-cerrar" @click="$emit('cerrar')">
        Cerrar
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  correctas: Number,
  incorrectas: Number
})

defineEmits(['reiniciar', 'cerrar'])

const porcentaje = computed(() => {
  const total = props.correctas + props.incorrectas
  if (total === 0) return 0
  return Math.round((props.correctas / total) * 100)
})
</script>

<style scoped>
.panel-resultados {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 2.5rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  color: #212529;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2.5rem;
}

.stat-box {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 120px;
}

.stat-box.correcto { background-color: #d4edda; color: #155724; }
.stat-box.incorrecto { background-color: #f8d7da; color: #721c24; }
.stat-box.precision { background-color: #cce5ff; color: #004085; }

.numero {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.acciones {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-reiniciar, .btn-cerrar {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-reiniciar {
  background-color: #dc3545;
  color: white;
}

.btn-cerrar {
  background-color: #6c757d;
  color: white;
}

button:hover {
  opacity: 0.9;
}
</style>
