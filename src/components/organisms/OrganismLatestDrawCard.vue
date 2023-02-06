<template>
  <div v-if="!loading || error" class="latest-draw-card">
    <div class="latest-draw-card__list-container">
      <p>{{ lotteryId }}</p>
      <div class="latest-draw-card__list">
        <div v-for="(number, index) in drawnNumbers" :key="index"
             :class="itemClasses(index)"
        >
          <p> {{ number }} </p>
        </div>
      </div>
      <div class="latest-draw-card__details">
        <p class="latest-draw-card__date">{{ formattedDate }}<br></p>
        <p class="latest-draw-card__extra"> Powerplay: x{{ powerPlayValue }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useQuery} from "@vue/apollo-composable";
import drawResults from '../../graphql/drawResults.query.gql'
import {formatDrawDate} from '../../utils/common.js';
import {ref, watchEffect} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const {lotteryId} = defineProps(['lotteryId']);
const drawnNumbers = ref();
const powerPlayValue = ref([]);
const formattedDate = ref();

const {result, error, loading} = useQuery(drawResults, {
  filter: {lotteries: lotteryId},
  licensedTerritory: 'US-NY',
  limit: 1,
  offset: 0
});

watchEffect(() => {
  if (result.value) {
    drawnNumbers.value = [...result.value.drawHistory.draws[0].drawnNumbers[0].numbers[0].values, ...result.value.drawHistory.draws[0].drawnNumbers[0].numbers[1].values];
    powerPlayValue.value = result.value.drawHistory.draws[0].drawnNumbers[0].numbers[2].values[0];
    formattedDate.value = formatDrawDate(result.value.drawHistory.draws[0].drawDate);
  }
});

function itemClasses(index: number) {
  let itemClass = 'latest-draw-card__item';
  if (index === drawnNumbers.value.length - 1) {
    switch (lotteryId) {
      case 'PowerBall':
        itemClass += ' latest-draw-card__item-red';
        break;
      case 'Cash4Life':
        itemClass += ' latest-draw-card__item-green';
        break;
      case 'MegaMillions':
        itemClass += ' latest-draw-card__item-blue';
        break;
      default:
        break;
    }
  }
  return itemClass;
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixins";

.latest-draw-card {
  display: block;
  text-decoration: none;
  position: relative;
  border-radius: 16px;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 1px 10px 31px rgb(173 191 237 / 50%);
  height: 100%;

  @include desktop() {
    padding: 10px 40px 10px 40px;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__details {
    display: flex;
    justify-content: space-between;
  }

  &__link {
    display: flex;
    justify-content: center;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #8795bb;
    margin-bottom: 1rem;

    &-red {
      background-color: #FE2457;
      font-weight: bold;
    }

    &-blue {
      background-color: #10BFFF;
      font-weight: bold;
    }
  }

  &__date {
    color: #242424;
  }

  &__extra {
    display: flex;
    justify-content: flex-end;
    color: #FF2457;
    font-weight: bold;
  }
}

</style>