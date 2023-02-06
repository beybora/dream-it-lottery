<template>
  <organism-nav-bar></organism-nav-bar>
  <div class="draw-view">
    <latest-draw-card class="draw-view__card" lottery-id="MegaMillions"></latest-draw-card>
    <latest-draw-card class="draw-view__card" lottery-id="PowerBall"></latest-draw-card>
  </div>
</template>

<script setup lang="ts">
import LatestDrawCard from "../components/organisms/OrganismLatestDrawCard.vue";
import OrganismNavBar from "../components/organisms/OrganismNavBar.vue";
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";

.draw-view {
  padding: 120px 40px 60px 40px;

  @include desktop() {
    padding: 120px 80px 0 80px;
    display: flex;
    justify-content: center;
    gap: 80px;
  }

  &__card {
    margin-bottom: 40px;
  }
}
</style>
