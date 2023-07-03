<script setup lang="ts">
import { ref } from 'vue'
import Checked from '../components/icons/IconCheckboxChecked.vue'
import Unchecked from '../components/icons/IconCheckbox.vue'

defineProps<{
  msg?: string
  id?: string
  remove?: any
}>()

const ifChecked = ref(false)

function changeIfChecked() {
  ifChecked.value = !ifChecked.value
  console.log('ifChecked', ifChecked.value)
}
console.log('ifChecked', ifChecked.value)
</script>

<template>
  <div class="item" :id="id">
    <p class="ListText">{{ msg }}</p>
    <!-- <div class="checkBox">
      <input type="checkbox" id="checkbox" @change="() => changeIsDone()" class="checkBoxInput" />
    </div> -->
    <button class="buttonDelete" @click="remove">
      <Unchecked />
    </button>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
  min-width: 200px;
  min-height: 200px;
  padding: 10px;
  background-color: var(--vt-c-black);
  border-radius: 10px;
}

.ListText {
  display: flex;
  width: 80%;
  white-space: pre-wrap;
  font-size: 28px;
  line-height: 35px;
  word-break: break-all;
  hyphens: auto;
}
.buttonDelete {
  cursor: pointer;
  opacity: 0.6;
  border: unset;
  width: fit-content;
  height: fit-content;
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: unset;
  background: transparent;
}
.buttonDelete:hover {
  opacity: 1;
}
</style>
