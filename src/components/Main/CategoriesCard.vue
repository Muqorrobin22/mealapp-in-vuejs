<template>
  <div class="card">
    <div class="cover"></div>
    <img :src="strCategoryThumb" alt="gambar2" />
    <h1>{{ strCategory }}</h1>
  </div>
</template>

<script>
export default {
  props: ["strCategory", "strCategoryThumb", "idCategory", "id"],
};
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin: 2rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  h1 {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 600;
    width: 80%;
  }
  &:hover .cover {
    opacity: 0.6;
  }
}
</style>
