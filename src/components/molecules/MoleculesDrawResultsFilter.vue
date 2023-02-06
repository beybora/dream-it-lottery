<template>
  <div class="draw-results-filter">
    <div class="draw-results-filter__submit-button">
      <button
          @click="submit"
          style="min-width: 150px"
      >
        Fetch Draws
      </button>
    </div>
    <atom-select-lottery v-model="selectedLottery"></atom-select-lottery>
    <!--  <atom-select-territory v-model="selectedTerritory"></atom-select-territory>-->
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {defineEmits} from 'vue';
import AtomSelectLottery from "../atoms/AtomSelectLottery.vue";
import AtomSelectTerritory from "../atoms/AtomSelectTerritory.vue";

const selectedTerritory = ref();
const selectedLottery = ref();
const emit = defineEmits(["submitFilter"]);



function submit() {
  emit('submitFilter', {
    filter: selectedLottery.value,
    territory: selectedTerritory.value
  });
}
</script>

<style scoped lang="scss">
.draw-results-filter {
  background-color: #F8FBFF;
  padding: 20px;
  border-radius: 16px;
  max-height: 150px;

  &__submit-button {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
  }
}
</style>