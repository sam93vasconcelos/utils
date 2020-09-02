<template>
  <div class="container">
    <CalculadoraPorcentagem/>
    <CalculadoraMoedas/>
    <CalculadoraRegra3/>
  </div>
</template>

<script>
import CalculadoraMoedas from '../modules/CalculadoraMoedas'
import CalculadoraPorcentagem from '../modules/CalculadoraPorcentagem'
import CalculadoraRegra3 from '../modules/CalculadoraRegra3'

export default {
  components: {
    CalculadoraMoedas,
    CalculadoraPorcentagem,
    CalculadoraRegra3
  },
}
</script>