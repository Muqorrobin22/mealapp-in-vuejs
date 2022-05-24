<template>
  <Navbar></Navbar>
  <Wrapper>
    <router-view></router-view>
  </Wrapper>
</template>

<script>
import Navbar from "./components/Header/NavbarHead";
import Wrapper from "./components/Main/WrapperApp.vue";
export default {
  components: {
    Navbar,
    Wrapper,
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  font-size: 10px;
}
body {
  background-color: #eff1f7;
}
</style>
