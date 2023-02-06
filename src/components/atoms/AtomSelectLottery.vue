<template>
  <div class="atom-select-lottery">
    <select
        class="atom-select-lottery__select"
        id="select"
        name="selectLottery"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
          v-for="(lottery, index) in lotteries"
          :key="index"
          :value="lottery.value"
          :disabled="lottery.disabled"
      >
        {{ lottery.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const {modelValue} = defineProps(['modelValue']);

const lotteries = ref([
  {label: 'PowerBall', value: 'PowerBall'},
  {label: 'MegaMillions', value: 'MegaMillions'},
  {label: 'Cash4Life', value: 'Cash4Life', disabled: true},
]);

</script>

<style scoped>
.atom-select-lottery {
  display: flex;
  justify-content: center;
}
</style>