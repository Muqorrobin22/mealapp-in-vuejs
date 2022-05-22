<template>
  <header-app></header-app>
  <div class="card-wrap">
    <card-app
      v-for="category in categories"
      :key="category.strCategory"
      :str-category="category.strCategory"
      :str-category-thumb="category.strCategoryThumb"
    ></card-app>
  </div>
</template>

<script>
import HeaderApp from "../components/Header/HeaderApp";
import CardApp from "../components/Main/CardApp.vue";
export default {
  components: {
    HeaderApp,
    CardApp,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async loadData() {},
  },
  async mounted() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();

    this.categories = data.categories;
  },
};
</script>

<style scoped>
.card-wrap {
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
