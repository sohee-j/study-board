<script setup>
import TodoInput from '../../components/TodoProject/TodoInput.vue'
</script>

<template>
	<div class="btn_wrap">
		<button class="btn btn-secondary" @click="$router.go(-1)">뒤로가기</button>
	</div>
	<TodoInput></TodoInput>
</template>

<style lang="scss" scoped></style>
