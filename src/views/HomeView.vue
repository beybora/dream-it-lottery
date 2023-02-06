<template>
  <organism-nav-bar :show-links="false" ></organism-nav-bar>
  <div class="home">
    <div class="color-wrap__wrapper">
    <div class="color-wrap color-wrap--bg">
      <div class="color-wrap color-wrap--red">
        <div class="color-wrap color-wrap--blue">
          <div class="color-wrap color-wrap--yellow">
            <div class="color-wrap color-wrap--darkBlue">
              <h2 style="color: #ECF1FF">WELCOME</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <h2 class="home__subtitle">Unleash the Power of Your Dreams with Dream Lotto!<br/> Win Big and Live Your Wildest Fantasies Today!</h2>
    <p>Check if you won already. Click
      <RouterLink to="/draws"> here!</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import OrganismNavBar from "../components/organisms/OrganismNavBar.vue";
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem;

 &__subtitle {
  padding-top: 25px;
  }
}
.color-wrap--bg {
  padding: 8px;
  border-radius: 8px;
  max-width: 740px;
  background: #000860;
}
.color-wrap--red {
  border-radius: 8px;
  background: #ff2457;
  max-width: 740px;
}

.color-wrap--blue {
  max-width: 500px;
  border-radius: 4px;
  background: #10bfff;
}
.color-wrap--yellow {
  max-width: 356px;
  border-radius: 6px;
  background: #ffd300;
}

.color-wrap--yellow {
  max-width: 356px;
  border-radius: 6px;
  background: #ffd300;
}

.color-wrap--darkBlue {
  max-width: 276px;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: #000860;
}

.color-wrap {
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0.5rem 1rem;
}

.color-wrap__wrapper{
  width: 100%;
}
</style>