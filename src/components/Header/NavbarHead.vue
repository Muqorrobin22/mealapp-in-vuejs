<template>
  <nav>
    <div class="logo">
      <h2>Mealapp</h2>
    </div>
    <div class="list">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/foods">Foods</router-link>
        </li>
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
  align-items: center;
  padding: 4rem 2rem;
  background-color: #232127;
  color: white;
}

.logo h2 {
  font-family: "Pacifico", cursive;
  letter-spacing: 3px;
}

a {
  font-size: 1.6rem;
  font-weight: 900;
  margin-left: 1rem;
  text-decoration: none;
  color: white;
  transition: all 0.2s ease;
  letter-spacing: 3px;
}
a.router-link-active,
a:hover {
  opacity: 0.5;
}

@media (min-width: 570px) {
  nav {
    padding: 4rem 7rem;
  }

  .logo h2 {
    font-size: 2.4rem !important;
  }

  .list ul li {
    font-size: 1.8rem !important;
  }
}

@media (min-width: 1100px) {
  nav {
    padding: 4rem 10rem;
  }
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
