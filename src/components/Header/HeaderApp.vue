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
</template>

<style lang="scss" scoped>
header {
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
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
}
</style>
