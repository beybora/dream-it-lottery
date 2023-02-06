<template>
  <header>
    <nav>
      <div class="organism-nav-bar">
        <RouterLink to="/">
          <img class="organism-nav-bar__logo" src="../../assets/dream-lotto.png" alt="logo">
        </RouterLink>
        <!-- Only show links if showLinks prop is true -->
        <div class="organism-nav-bar__links" v-if="props.showLinks">
          <RouterLink class="organism-nav-bar__link" to="/draws"> Latest Draws </RouterLink>
          <RouterLink class="organism-nav-bar__link" to="/draw-history"> Draw History</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">

import {defineProps} from "vue";

const props = defineProps({
  showLinks: {
    type: Boolean,
    default: true
  }
});

</script>
<style scoped lang="scss">
.organism-nav-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #030860;
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &__logo {
    display: flex;
    align-items: center;
    width:3.5em;
    height:3em;
  }

  &__links {
    display: flex;
    height: 100%;
  }

  &__link {
    margin-left: 2.5rem;
    text-decoration: none;
    color: #F8FBFF;

    &:hover {
      color: #cdd3de;
    }
  }
}
</style>