<template>
  <section class="wrap">
    <div class="img">
      <div class="cover"></div>
    </div>
    <div class="info">
      <h1>Welcome to <span>Mealapp</span></h1>
      <router-link to="/foods">Get Started</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.wrap {
  height: 83.7vh;
  width: 100vw;
  margin: 0 -10rem;
  background: #232127;
  position: relative;
  .img {
    background-image: url("../assets/bghome.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 80vh;
    position: relative;
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      height: 80vh;
      width: 100%;
      background-color: black;
      opacity: 0.4;
    }
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: white;
    height: 80vh;
    opacity: 1;
    h1 {
      font-size: 4rem;
      font-weight: 600;
      span {
        font-family: "Pacifico", cursive;
        letter-spacing: 3px;
        color: #eff1f7;
      }
    }
    a {
      background-color: white;
      color: black;
      padding: 2rem 4rem;
      font-size: 2rem;
      font-weight: 800;
      text-decoration: none;
      border-radius: 20px;
      margin-top: 3rem;
      transition: all 0.3s ease;
      letter-spacing: 2px;
    }
    a:hover {
      transform: translateY(-0.5rem);
      opacity: 0.9;
    }
  }
}
</style>
