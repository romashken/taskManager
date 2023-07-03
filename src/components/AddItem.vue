// Form.vue
<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: String
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="input"
    placeholder="Текст задачи"
  />
</template>

<style scoped>
.input {
  display: flex;
  outline: none;
  border: none;
  width: 80%;
  resize: none;
  border-radius: 5px;
  padding: 5px;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 20px;
}
.input:focus {
  outline: none;
  border: none;
}
/* .input::placeholder {
  padding-top: 10px;
} */
</style>
