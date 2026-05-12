<template>
  <div class="barra-controles">
    <button class="btn-control btn-secundario" @click="$emit('toggle-resultados')" title="Ver Resultados">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      <span>Resultados</span>
    </button>

    <button class="btn-control btn-secundario" @click="$emit('barajar')" title="Barajar Mazo">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
      <span>Barajar</span>
    </button>

    <button class="btn-control btn-principal" @click="$emit('siguiente')" :disabled="!puedeAvanzar">
      <span>Siguiente pregunta</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  puedeAvanzar: Boolean
})

defineEmits(['toggle-resultados', 'barajar', 'siguiente'])
</script>

<style scoped>
.barra-controles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-control:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secundario {
  background-color: #e9ecef;
  color: #495057;
}

.btn-secundario:hover:not(:disabled) {
  background-color: #dee2e6;
}

.btn-principal {
  background-color: #0d6efd;
  color: white;
}

.btn-principal:hover:not(:disabled) {
  background-color: #0b5ed7;
  transform: translateX(3px);
}
</style>
