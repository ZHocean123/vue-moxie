<template>
  <div id="app">
    <VueMoxie class="upload" v-model="files">
      <div>shangchuan</div>
    </VueMoxie>
  </div>
</template>

<script>
import VueMoxie from './components/VueMoxie';

export default {
  name: 'App',
  components: {
    VueMoxie,
  },
  data() {
    return {
      files: [],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.upload {
  padding: 10px;
  border: 1px solid blue;
  border-radius: 4px;
  width: 100px;
}
</style>
