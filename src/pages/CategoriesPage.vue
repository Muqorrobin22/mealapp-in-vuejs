<template>
  <categories-header :name-categories="this.categories"></categories-header>
  <div class="card-wrap">
    <categories-card
      v-for="category in filterCategories"
      :key="category.strMeal"
      :str-category="category.strMeal"
      :str-category-thumb="category.strMealThumb"
      :id="category.idMeal"
    ></categories-card>
  </div>
</template>

<script>
import CategoriesHeader from "../components/Header/CategoriesHeader.vue";
import CategoriesCard from "../components/Main/CategoriesCard.vue";
export default {
  props: ["categories"],
  components: {
    CategoriesHeader,
    CategoriesCard,
  },
  data() {
    return {
      filterCategories: [],
    };
  },
  methods: {
    async loadData() {},
  },
  async mounted() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.categories}`
    );
    const data = await response.json();

    console.log(data);
    this.filterCategories = data.meals;
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
