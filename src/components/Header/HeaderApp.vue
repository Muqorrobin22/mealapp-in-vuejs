<template>
  <header>
    <div class="logo">
      <img src="../../assets/food1.svg" alt="gambar1" width="30" height="30" />
      <img src="../../assets/food2.svg" alt="gambar1" width="30" height="30" />
      <img src="../../assets/food3.svg" alt="gambar1" width="30" height="30" />
    </div>
    <div class="info">
      <p>Mealapp API Website</p>
    </div>
    <div class="title">
      <h1>See All The Delicious Food</h1>
    </div>
  </header>
  <div class="navigation">
    <div class="logo">
      <img src="../../assets/home.svg" alt="" width="25" height="25" />
      <router-link to="/">Home</router-link>
    </div>
    <p>></p>
    <router-link to="/foods">Foods</router-link>
  </div>
</template>

<style lang="scss" scoped>
header {
  /* margin-top: 10rem; */
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 4rem 2rem;
  .logo {
    display: flex;
    img {
      margin-left: 2rem;
    }
  }
  .info {
    margin: 4rem 0;
    text-align: center;
    p {
      font-size: 1.6rem;
    }
  }
  .title {
    text-align: center;
    h1 {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 570px) {
    .info {
      p {
        font-size: 2rem;
      }
    }
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
    color: black;
    transition: all 0.2s ease;
    text-decoration: none;
  }
  a.router-link-active,
  a:hover {
    opacity: 0.5;
  }
}
</style>
