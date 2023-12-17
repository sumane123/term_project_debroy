<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/header.vue';
import AppFooter from './components/footer.vue';
import Home from './components/Home.vue'; 
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Skills from './components/Skills.vue'; 
import Projects from './components/Projects.vue'; 
import Contact from './components/Contact.vue'; 


export default {
  components: {
    'app-header': AppHeader,
   
    'app-footer': AppFooter
  }
};
</script>

<style>
body {
  font-family: 'Helvetica Neue', sans-serif;
  color: #fff;
  background-color: #0d0d0d;
  margin: 0;
}

main {
  padding: 40px;
}

</style>


