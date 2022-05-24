<template>
  <header>
    <div class="title">
      <h1>{{ nameCategories }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  props: ["nameCategories"],
};
</script>

<style lang="scss" scoped>
header {
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .title {
    text-align: center;
    h1 {
      font-size: 3rem;
      font-weight: 500;
    }
  }
}
</style>
