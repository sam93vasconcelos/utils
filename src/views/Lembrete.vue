<template>
  <div class="container">
    <h1>Lembretes</h1>
    <small>* As informações salvas são mantidas apenas no seu navegador atual</small>
    <hr>
      <div class="row">
        <div class="col-md-10">
          <b-form-input v-model="lembrete" maxLength="150" placeholder="Lembrete"/>
          <div><small>Tamanho: {{ lembrete.length }}/150</small></div>
        </div>
        <div class="col-md-2">
          <button @click="salvar" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    <hr>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Lembrete</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in lista" :key="i">
          <td>{{ item }}</td>
          <td>
            <button @click="remover(item)" class="btn btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lembrete: '',
      lista: []
    }
  },
  created() {
    if (localStorage.getItem('lista')) {
      this.lista = localStorage.getItem('lista').split(',')
    } else {
      this.lista = []
    }
  },
  methods: {
    salvar() {
      this.lista.push(this.lembrete)
      localStorage.removeItem('lista')
      localStorage.setItem('lista', this.lista.join(','))
      this.lembrete = ''
    },
    remover(item) {
      if (confirm('Deseja excluir este lembrete?')) {
        this.lista.splice(this.lista.indexOf(item), 1);
        localStorage.removeItem('lista')
        localStorage.setItem('lista', this.lista.join(','))
      }
    }
  }
}
</script>