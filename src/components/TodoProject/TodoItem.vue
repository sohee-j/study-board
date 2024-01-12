<script setup>
import { ref } from 'vue'
defineProps(['toDosArr'])
const emit = defineEmits(['removeTodo', 'updateTodo', 'completedTodo'])
const todoText = ref(null)

function showModifyTodo(item) {
	item.inputModifyTitle = item.text
	item.isModifyStatus = true
}
function ModifyTodo(item, index) {
	emit('updateTodo', item, index)
}
function onChange(item, index) {
	emit('completedTodo', item, index)
}
</script>

<template>
	<div class="todo-item-wrap">
		<ul>
			<li class="todo-item" v-for="(item, index) in toDosArr" :key="item.id">
				<div v-if="!item.isModifyStatus" class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						:id="item.id"
						:checked="item.isCompleted"
						@change="onChange(item, index)"
					/>
				</div>
				<div class="item-form">
					<span
						:class="{ 'line-through': item.isCompleted === true }"
						v-show="!item.isModifyStatus"
						ref="todoText"
						>{{ item.text }}</span
					>
					<input
						class="item-modify"
						v-show="item.isModifyStatus"
						type="text"
						v-model="item.inputModifyTitle"
					/>
				</div>

				<div class="item-btn-wrap">
					<button v-show="!item.isModifyStatus" @click="showModifyTodo(item)">
						<i class="bi bi-pencil"></i>
					</button>
					<button v-show="item.isModifyStatus" @click="ModifyTodo(item, index)">
						<i class="bi bi-check-square"></i>
					</button>
					<button
						v-show="item.isModifyStatus"
						@click="item.modifyStatus = false"
					>
						<i class="bi bi-x-square"></i>
					</button>
					<button @click="$emit('removeTodo', index)">
						<i class="bi bi-trash"></i>
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.todo-item-wrap {
	height: 530px;
	// background: red;
	overflow-y: auto;
	padding: 10px;
}
ul {
	.item-check {
		width: 10px;
		height: 10px;
	}
	.line-through {
		text-decoration: line-through;
		text-decoration-thickness: 3px;
	}
	.todo-item {
		height: 46px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #f6e8f2;
		padding: 10px;
		border-radius: 6px;
		margin-bottom: 10px;
		&:last-child {
			margin-bottom: none;
		}
		.form-check {
			min-height: unset;
			margin-bottom: 0;
		}
		.form-check-input {
			margin-top: 0;
			&:checked {
				background-color: #413c60;
				border-color: #413c60;
			}
			&:focus {
				border-color: rgb(216, 167, 197);
				box-shadow: 0 0 0 0.25rem rgba(216, 167, 197, 0.25);
			}
		}
		.item-form {
			flex: 1;
			span {
				padding: 4px;
				line-height: inherit;
			}
			.item-modify {
				width: 100%;
				border: none;
				border-bottom: 1px solid #d8a7c5;
				padding: 4px;
				padding-block: unset;
			}
		}
		.item-btn-wrap {
			button {
				padding: 0;
				margin-right: 8px;
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
}
</style>
