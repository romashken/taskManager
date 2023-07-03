<template>
  <div class="item">
    <h1><span>Бесплатный</span> таск-менеджер</h1>
  </div>
</template>

<style scoped>
.item {
  margin: 20px;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h1 {
  font-size: 60px;
  line-height: 75px;
}

span {
  color: var(--vt-c-bright-green-1);
}
</style>
