<template>
  <header>
    <div class="title">
      <h1>{{ nameCategories }}</h1>
    </div>
  </header>
  <div class="navigation">
    <div class="logo">
      <img src="../../assets/home.svg" alt="" width="25" height="25" />
      <router-link to="/">Home</router-link>
    </div>
    <p>></p>
    <router-link to="/foods">Foods</router-link>
    <p>></p>
    <!-- <p>{{ namePrevCategories }}</p> -->
    <router-link :to="'/' + namePrevCategories">
      {{ namePrevCategories }}
    </router-link>
    <p>></p>
    <router-link :to="'/' + namePrevCategories + '/' + nameId">{{
      nameCategories
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["nameCategories", "namePrevCategories", "nameId"],
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 4rem 2rem;

  .title {
    text-align: center;
    h1 {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
  @media (min-width: 570px) {
    .title {
      h1 {
        font-size: 2.8rem;
      }
    }
  }
}

div.navigation {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: white;
  padding: 2rem;
  .logo {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
  p,
  a {
    font-size: 1.6rem;
    font-weight: 900;
    margin-left: 1rem;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease;
  }
  a.router-link-active,
  a:hover {
    opacity: 0.5;
  }
}
</style>
