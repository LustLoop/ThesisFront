<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage";

export default {
  name: "app",
  components: {
    MainPage
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
  padding-top: 5%;
}
</style>
