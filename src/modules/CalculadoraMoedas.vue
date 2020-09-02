<template>
  <div>
    <div v-if="this.moedas">
      <h4>Conversor de moedas</h4>

      <div class="row">
        <div class="col-12">
          <b-form-group
            label="Valor para converter"
            label-for="valor"
          >
            <b-form-input @input="converter" v-model="valor" id="valor" placeholder="converter"></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            :label="this.moedas.USD.name"
            :label-for="this.moedas.USD.code"
          >
            <b-form-input @input="converterUSD" :id="this.moedas.USD.code" v-model="usd" :placeholder="this.moedas.USD.bid"></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            :label="this.moedas.EUR.name"
            :label-for="this.moedas.EUR.code"
          >
            <b-form-input @input="converterEUR" :id="this.moedas.EUR.code" v-model="eur" :placeholder="this.moedas.EUR.bid"></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            :label="this.moedas.BTC.name"
            :label-for="this.moedas.BTC.code"
          >
            <b-form-input @input="converterBTC" :id="this.moedas.BTC.code" v-model="btc" :placeholder="this.moedas.BTC.bid"></b-form-input>
          </b-form-group>
        </div>
      </div>
    </div>
    <div v-if="this.loading">
      <img src="../assets/balls.gif" alt="Gif Carregando">
    </div>
    <div class="alert alert-dismissible alert-danger" v-if="this.error && !this.dismissed">
      <button type="button" class="close" @click="dismiss" data-dismiss="alert">&times;</button>
      <strong>Ops...</strong> Não foi possível conectar ao servidor de moedas :/
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      valor: '',
      moedas: null,
      error: false,
      usd: '',
      eur: '',
      btc: '',
      dismissed: false,
      loading: true
    }
  },
  created() {
    axios.get('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL')
    .then(res => {
      this.moedas = res.data,
      this.loading = false
    })
    .catch(err => {
      console.log(err)
      this.error = true
      this.loading = false
    })
  },
  methods: {
    dismiss() {
      this.dismissed = true
    },
    tiraVirgula() {
      this.valor = this.valor.toString().replace(',','.')
      this.usd = this.usd.toString().replace(',','.')
      this.eur = this.eur.toString().replace(',','.')
      this.btc = this.btc.toString().replace(',','.')
    },
    converter() {
      this.tiraVirgula()
      this.usd = (this.valor / this.moedas.USD.bid).toFixed(2)
      this.eur = (this.valor / this.moedas.EUR.bid).toFixed(2)
      this.btc = (this.valor / this.moedas.BTC.bid).toFixed(2)
    },
    converterUSD() {
      this.tiraVirgula()
      this.valor = (this.usd * this.moedas.USD.bid).toFixed(2)
      this.eur = (this.valor / this.moedas.EUR.bid).toFixed(2)
      this.btc = (this.valor / this.moedas.BTC.bid).toFixed(2)
    },
    converterEUR() {
      this.tiraVirgula()
      this.valor = (this.eur * this.moedas.EUR.bid).toFixed(2)
      this.usd = (this.valor / this.moedas.USD.bid).toFixed(2)
      this.btc = (this.valor / this.moedas.BTC.bid).toFixed(2)
    },
    converterBTC() {
      this.tiraVirgula()
      this.valor = (this.btc * this.moedas.BTC.bid).toFixed(2)
      this.eur = (this.valor / this.moedas.EUR.bid).toFixed(2)
      this.usd = (this.valor / this.moedas.USD.bid).toFixed(2)
    }
  }
}
</script>