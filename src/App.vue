<template>
  <div id='app'>
    <div class='container'>
      <LayoutNavbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import LayoutNavbar from './components/layout/navbar/LayoutNavbar'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    LayoutNavbar,
    Footer
  }

}
</script>

<style lang='scss'>
.container {
  width: 960px
}
</style>
