<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <a class="greetings" href="./">
    <h2 class="green">{{ msg }}</h2>
  </a>
</template>

<style scoped>
h2 {
  display: flex;
  font-weight: 500;
  font-size: 2.6rem;
  line-height: 2.6rem;
  top: -10px;
  color: var(--vt-c-bright-green-1);
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  text-decoration: none;
  cursor: pointer;
  display: flex;
  height: 100%;
  align-items: center;
}
.greetings:hover {
  background: unset;
}

.greetings h2,
.greetings h3 {
  display: flex;
  height: fit-content;
  text-align: center;
  white-space: nowrap;
}
</style>
