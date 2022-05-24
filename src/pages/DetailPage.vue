<template>
  <detail-header
    :name-categories="this.filterCategories.strMeal"
    :name-prev-categories="categories"
    :name-id="details"
  ></detail-header>
  <div class="card-wrap">
    <detail-app
      :str-instruction="this.filterCategories.strInstructions"
      :str-thumb="this.filterCategories.strMealThumb"
      :str-youtube="this.filterCategories.strYoutube"
      :name-region="this.filterCategories.strArea"
    ></detail-app>
  </div>
</template>

<script>
import DetailHeader from "../components/Header/DetailHeader.vue";
import DetailApp from "../components/Main/DetailApp.vue";
export default {
  props: ["categories", "details"],
  components: {
    DetailHeader,
    DetailApp,
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
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.details}`
    );
    const data = await response.json();

    this.filterCategories = data.meals[0];
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
