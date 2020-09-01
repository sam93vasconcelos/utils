<template>
  <div class="container">
    <CalculadoraPorcentagem/>
    <CalculadoraMoedas/>
  </div>
</template>

<script>
import CalculadoraMoedas from '../modules/CalculadoraMoedas'
import CalculadoraPorcentagem from '../modules/CalculadoraPorcentagem'

export default {
  components: {
    CalculadoraMoedas,
    CalculadoraPorcentagem
  },
}
</script>