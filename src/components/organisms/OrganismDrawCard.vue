<template>
  <div class="draw-card">
    <div class="draw-card__list-container">
      <div class="draw-card__list">
        <div v-for="(number, index) in drawnNumbers" :key="index"
             :class="itemClasses(index)"
        >
          <p> {{ number }} </p>
        </div>
      </div>
      <p class="draw-card__extra"> Powerplay: x{{ powerPlay }}</p>
      <p class="draw-card__date">{{ formattedDrawDate }}<br></p>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue';
import {formatDrawDate} from '../../utils/common.js';

const {draw, lotteryId} = defineProps(['draw', 'lotteryId']);
const formattedDrawDate = ref('');
const drawnNumbers = [...draw.drawnNumbers[0].numbers[0].values, ...draw.drawnNumbers[0].numbers[1].values];
const powerPlay = draw.drawnNumbers[0].numbers[2].values[0];

formattedDrawDate.value = formatDrawDate(draw.drawDate);

function itemClasses(index: number) {
  let itemClass = 'draw-card__item';
  if (index === drawnNumbers.length - 1) {
    switch (lotteryId) {
      case 'PowerBall':
        itemClass += ' draw-card__item-red';
        break;
      case 'Cash4Life':
        itemClass += ' draw-card__item-green';
        break;
      case 'MegaMillions':
        itemClass += ' draw-card__item-blue';
        break;
      default:
        break;
    }
  }
  return itemClass;
}

</script>
<style scoped lang="scss">
.draw-card {
  padding-bottom: 3rem;

  &__list-container {
    display: block;
    text-decoration: none;
    position: relative;
    border-radius: 16px;
    padding: 30px 40px 10px 40px;
    background-color: #ECF1FF;
    box-shadow: 1px 10px 31px rgb(173 191 237 / 50%);
    height: 100%;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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

    &-yellow {
      background-color: yellow;
      font-weight: bold;
    }

    &-red {
      background-color: #FF2457;
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
