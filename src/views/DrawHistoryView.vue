<template>
  <div>
    <organism-nav-bar></organism-nav-bar>
    <div class="draw-history-view">
      <draw-results-filter class="draw-history-view__filter" @submitFilter="fireQuery" :lottery-id="lottoId"/>
      <p class="draw-history-view__message" v-if="loading">Loading...</p>
      <p class="draw-history-view__message" v-else-if="error">Please try it again!</p>
      <div v-else-if="showResults">
        <draw-card v-for="draw in draws.drawHistory.draws"
                   :key="draw.drawDate"
                   :draw="draw"
                   :lottery-id="lottoId"
                   class="draw-history-view__cards"
        />
        <div class="draw-history-view__pagination">
          <button v-if="!(offset <= 0)" @click="offset -= limit">Previous</button>
          <button v-if="(offset < 27)" @click="offset+= limit">Next</button>
        </div>
        <p class="draw-history-view__page-number">Page {{ page }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue"
import {useQuery} from "@vue/apollo-composable";
import {useRoute} from 'vue-router';
import drawResults from '../graphql/drawResults.query.gql'
import DrawResultsFilter from '../components/molecules/MoleculesDrawResultsFilter.vue';
import OrganismNavBar from "../components/organisms/OrganismNavBar.vue";
import DrawCard from "../components/organisms/OrganismDrawCard.vue";

const licensedTerritory = ref("US-TX")
const enabled = ref(false)
const showResults = ref(false);
const lottoId = ref()
const limit = ref();
const offset = ref();
const route = useRoute();


const {result, error, loading} = useQuery(drawResults, {
  filter: {lotteries: lottoId},
  licensedTerritory: 'US-NJ',
  limit: limit,
  offset: offset
}, () => ({
  enabled: enabled.value,
}));

const draws = computed(() => result.value ?? []);
const page = computed(() => (offset.value < 0 ? 0 : offset.value) / limit.value + 1);

function fireQuery(input: any) {
  const {filter, territory} = input;
  lottoId.value = filter;
  licensedTerritory.value = territory;
  limit.value = 2;
  offset.value = 0;
  enabled.value = true;
  showResults.value = true;
}
</script>
<style scoped lang="scss">
@import "../assets/css/mixins";

.draw-history-view {
  padding: 120px 80px 0 80px;

  @include desktop() {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: "card filter"
                        "pagination filter";

    grid-gap: 100px;
  }

  &__filter {
    margin-bottom: 40px;
    grid-area: filter;
  }

  &__message {
    padding-top: 80px;
    justify-content: center;
    display: flex;
  }

  &__cards {
    grid-area: cards;
  }

  &__page-number {
    display: flex;
    justify-content: center;
  }

  &__pagination {
    grid-area: pagination;
    display: flex;
    gap: 15px;
    justify-content: center;
  }
}
</style>
