<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import IconLogo from './components/icons/IconLogo.vue'
</script>

<template>
  <header>
    <div class="header-content">
      <!-- <img alt="Vue logo" class="logo" src="@/assets/todoList.svg" width="125" height="125" />s -->
      <a href="./"><IconLogo class="mainLogo" /></a>
      <div class="wrapper">
        <HelloWorld msg="Remember Me" />

        <nav class="baseRouter">
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/todo">Список задач</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: var(--color-background);
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  /* max-width: 1280px; */
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  margin: 0 auto;
  z-index: 10;
}

a {
  cursor: pointer;
  display: flex;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
}

a:hover {
  background: unset;
}

.header-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px auto;
  width: 100%;
  max-width: 1280px;
  height: var(--todoUi-headerHeight);
}

.mainLogo {
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 35px;
  fill: var(--vt-c-bright-green-1-transparent);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  width: calc(100% - 85px);
  align-items: center !important;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}

.baseRouter {
  display: flex;
  flex-direction: row;
  margin: auto 0;
  width: fit-content;
}
nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  header {
    /* display: flex;
    place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 35px 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    width: calc(100% - 85px);
    justify-content: space-between;
    /* flex-wrap: wrap; */
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
