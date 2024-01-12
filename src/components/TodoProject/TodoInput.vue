<script setup>
import { onMounted, ref } from 'vue'
import TodoItem from './TodoItem.vue'
const newTodoText = ref('')
const toDosArr = ref([])
let todoId = 0

function savedTodo() {
	localStorage.setItem('todos', JSON.stringify(toDosArr.value))
}

function removeTodo(index) {
	// const removeTodoIndex = toDosArr.value.filter(item => item.id !== index)
	toDosArr.value.splice(index, 1)
	savedTodo()
}

function todoSubmit() {
	const value = newTodoText.value
	if (value.length === 0) {
		alert('할 일을 입력해 주세요!')
		return
	}
	newTodoText.value = ''
	const newTodoObj = {
		text: value,
		id: todoId++,
		inputModifyTitle: '',
		isModifyStatus: false,
		isCompleted: false,
	}
	toDosArr.value.push(newTodoObj)
	savedTodo()
}

function loadingTodo() {
	const savedTodos = localStorage.getItem('todos')
	if (savedTodos !== null) {
		const listTodo = JSON.parse(savedTodos)
		toDosArr.value = listTodo
	}
}

function updateTodo(item, index) {
	item.text = item.inputModifyTitle
	item.isModifyStatus = false
	toDosArr.value[index] = item
	savedTodo()
}

function completedTodo(item, index) {
	item.isCompleted = !item.isCompleted
	toDosArr.value[index] = item
	savedTodo()
}
function clearTodo() {
	localStorage.clear()
	toDosArr.value = []
}

onMounted(() => {
	loadingTodo()
})
</script>

<template>
	<div class="todo-wrap">
		<h2>TO DO LIST</h2>
		<div class="todo-inner">
			<form @submit.prevent="todoSubmit" class="todo-form">
				<input
					class="todo-input"
					type="text"
					v-model="newTodoText"
					placeholder="Create new todo"
				/>
				<button class="btn btn-add ms-1">ADD</button>
			</form>

			<p class="count-total">TOTAL {{ toDosArr.length }}건</p>
			<TodoItem
				:toDosArr="toDosArr"
				@removeTodo="removeTodo"
				@updateTodo="updateTodo"
				@completedTodo="completedTodo"
			/>
			<button
				@click="clearTodo"
				class="btn btn-outline-secondary btn-sm btn-clear"
			>
				Clear All
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.todo-wrap {
	width: 600px;
	margin: 0 auto;
	height: calc(100% - 38px);
	h2 {
		font-size: 32px;
		color: #ffffff;
		background: #413c60;
		text-align: center;
		padding: 10px;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
	.todo-inner {
		position: relative;
		height: calc(100% - 63px);
		background: #ebf5f4;
		padding: 20px;
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	.todo-form {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.todo-input {
			width: 100%;
			height: 38px;
			padding: 0 10px;
			border: none;
			border-bottom: 1px solid #9e5e7d;
		}
		.btn-add {
			color: #ffffff;
			background: #9e5e7d;
			&:hover {
				background: #683142;
			}
		}
	}
}
.count-total {
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 10px;
	padding-left: 6px;
}
.btn-clear {
	width: calc(100% - 20px);
	position: absolute;
	left: 50%;
	bottom: 20px;
	transform: translateX(-50%);
}
</style>
