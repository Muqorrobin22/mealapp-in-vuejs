<template>
  <nav>
    <div class="logo">
      <h2>Mealapp</h2>
    </div>
    <div class="list">
      <ul>
        <li>Home</li>
        <li>Food</li>
        <li>Ingredients</li>
        <li>Local Culinary</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #eff1f7;
}

.logo h2 {
  font-size: 1.6rem;
}

.list ul {
  display: flex;
}

.list ul li {
  list-style: none;
  font-size: 1.4rem;
  margin-left: 1rem;
}
</style>
