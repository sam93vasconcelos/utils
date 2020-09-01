<template>
  <div id="app">
    <AppMenu/>
    <router-view/>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu'
export default {
  components: {
    AppMenu
  }
}
</script>

<style>
</style>
