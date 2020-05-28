<template>
  <div class="home">
    <FoodList/>
  </div>
</template>

<script>
import FoodList from '../components/FoodList'
export default {
  name: "Home",
  components: {
    FoodList,
  }
};
</script>