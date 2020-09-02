<template>
  <div>
    <h4>Regra de 3</h4>
    <div class="row">
      <div class="col-6">
        <b-form-input @input="calcular" v-model="a" placeholder="a"></b-form-input>
      </div>
      <div class="col-6">
        <b-form-input @input="calcular" v-model="b" placeholder="b"></b-form-input>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-6">
        <b-form-input @input="calcular" v-model="c" placeholder="c"></b-form-input>
      </div>
      <div class="col-6">
        <b-form-input @input="calcular" disabled v-model="x" placeholder="X"></b-form-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: '',
      b: '',
      c: '',
      x: ''
    }
  },
  methods: {
    tiraVirgula() {
      this.a = this.a.toString().replace(',','.')
      this.b = this.b.toString().replace(',','.')
      this.c = this.c.toString().replace(',','.')
    },
    calcular() {
      this.tiraVirgula()
      if (this.a != '' && this.b != '' && this.c != '') {
        let calculo1 = this.c * this.b
        let final = calculo1 / this.a
        this.x = final.toFixed(4)
      } else {
        this.x = ''
      }
    }
  }
}
</script>