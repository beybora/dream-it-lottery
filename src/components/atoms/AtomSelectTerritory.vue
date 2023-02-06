<template>
  <select
      class="atom-select-territory__select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
        v-for="(territory, index) in territories"
        :key="index"
        :value="territory.value"
        :disabled="territory.disabled"
    >
      {{ territory.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import {ref} from "vue";

const { modelValue }  = defineProps(['modelValue']);

const territories = ref([
  {label: 'Texas', value: 'US-TX'},
  {label: 'Florida', value: 'US-FL', disabled: true},
  {label: 'New York', value: 'US-NY'},
  {label: 'North Carolina', value: 'US-NC', disabled: true},
  {label: 'New Jersey', value: 'US-NJ'},
  {label: 'Virginia', value: 'US-VA', disabled: true},
  {label: 'Minnesota', value: 'US-MN', disabled: true},
  {label: 'Colorado', value: 'US-CO', disabled: true},
  {label: 'Alabama', value: 'US-AL', disabled: true},
]);

</script>

<style scoped>

</style>