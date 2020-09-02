<template>
  <div>
    <h4>Calcular porcentagem</h4>
    <div class="row">
      <div class="col-md-2">
        <b-form-group
          label="Porcentagem"
          label-for="porcentagem"
        >
          <b-form-input @input="calculaP()" id="porcentagem" v-model="porcentagem" placeholder="50%"></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-2">
        <b-form-group
          label="Valor"
          label-for="qtd"
        >
          <b-form-input @input="calculaP()" id="qtd" v-model="valor" placeholder="10.000"></b-form-input>
        </b-form-group>
      </div>
      <span style="font-size: 24px; transform: translateY(30px);" class="d-none d-sm-block">=</span>
      <div class="col-md-2">
        <b-form-group
          label="Resultado"
          label-for="resultado"
        >
          <b-form-input @input="calculaV()" id="resultado" v-model="resultado"></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcentagem: '',
      valor: '',
      resultado: ''
    }
  },
  methods: {
    tiraVirgula() {
      if (this.porcentagem == '' || this.porcentagem == null) {
        this.porcentagem = 0
      }
      if (this.valor == '' || this.valor == null) {
        this.valor = 0
      }
      if (this.resultado == '' || this.resultado == null) {
        this.resultado = 0
      }
      this.texto()
      this.porcentagem = this.porcentagem.replace(',','.')
      this.valor = this.valor.replace(',','.')
      this.resultado = this.resultado.replace(',','.')
    },
    texto() {
      this.porcentagem = this.porcentagem.toString()
      this.valor = this.valor.toString()
      this.resultado = this.resultado.toString()
    },
    calculaP() {
      this.tiraVirgula()
      let soma = (this.porcentagem * this.valor) / 100
      this.resultado = soma.toFixed(2)
    },

    calculaV() {
      this.tiraVirgula()
      let soma = (this.resultado / this.valor) * 100
      this.porcentagem = soma
    }
  }
}
</script>