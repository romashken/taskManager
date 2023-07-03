<script setup lang="ts">
import { reactive, ref } from 'vue'
import ListItem from './ListItem.vue'
import AddItem from './AddItem.vue'
import makeid from './RandomGenerator.js'
import router from '@/router'

// интерфейс toDo опции
interface Props {
  message: string
  id: string
}
// сообщение
const msgNew = ref('')
const msgErr = ref('')

// функция рандомной смены содержания сообщения
const changeNew = () => {
  msgNew.value = Math.random().toString(36).slice(2, 7)
}
// массив сообщений
const messagess: Array<Props> = reactive([])
// console.log('messagess', this.$store)

// слушатель LocalStorage

window.addEventListener('load', function () {
  const a = this.localStorage.getItem('todoList')
  if (a !== null && a.length > 0) {
    const parsed = JSON.parse(a)
    if (Array.isArray(parsed)) {
      parsed.forEach((element: Props) => {
        messagess.push(element)
      })
    }
    // messagess.push(parsed)
    console.log('check messages', messagess)
  }
})

// добавить сообщение к списку
const addRow = () => {
  const newId = makeid(36)
  if (msgNew.value.length == 0) {
    msgErr.value = 'Введите сообщение'
  } else {
    messagess.push({ message: `${msgNew.value}`, id: `${newId}` })
    const qwe = JSON.stringify(messagess)
    const ewq = JSON.parse(qwe)
    localStorage.setItem('todoList', qwe)
    console.log('check messages', localStorage.getItem('todoList'))
  }
  msgNew.value = ''
}
// удалить сообщение
const deleteMessage = (id: string) => {
  const index = messagess.findIndex((x: Props) => x.id === id)
  console.log('checkTemp', index, id)
  messagess.splice(index, 1)
}
//
</script>

<template>
  <div class="TodoList" v-if="messagess.length > 0">
    <ListItem
      v-for="item in messagess"
      :key="item.id"
      :msg="item.message"
      :id="item.id"
      :remove="() => deleteMessage(item.id)"
    />
  </div>
  <h2 v-if="messagess.length == 0">Пока задач нет</h2>
  <div class="addItem">
    <AddItem v-model="msgNew" @focus="msgErr = ''" />
    <button @click="() => addRow()" class="addTask">Добавить задачу</button>
  </div>
  <div v-if="msgErr.length > 0" class="error">{{ msgErr }}</div>
</template>

<style scoped>
.TodoList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  column-gap: 20px;
  row-gap: 20px;
}
.addItem {
  display: flex;
  align-items: center;
  background: var(--vt-c-bright-green-1);
  padding: 10px;
  margin: 0px 20px;
  column-gap: 10px;
  justify-content: space-between;
  border-radius: 10px;
}
.addTask {
  display: flex;
  border: unset;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--vt-c-text-dark-1);
  border-radius: 5px;
  width: 20%;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: var(--vt-c-bright-green-1);
}
.error {
  display: flex;
  flex-direction: row;
  color: var(--vt-c-error);
  margin: 20px;
}
.addTask:hover {
  color: var(--vt-c-black);
}
h2 {
  display: flex;
  margin: 20px;
}
</style>
