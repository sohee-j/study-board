<template>
	<form @submit.prevent="save">
		<input
			type="text"
			class="mb-3 form-control"
			v-model="form.title"
			placeholder="제목"
		/>
		<div class="mb-3">
			<textarea v-model="form.content" class="form-control" rows="3">
			</textarea>
		</div>
		<p>{{ form.date }}</p>
		<div class="btn_wrap">
			<button
				type="button"
				class="btn btn-outline-dark me-2"
				@click="goListPage"
			>
				목록
			</button>
			<button class="btn btn-primary">저장</button>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createBlog } from '@/api/blog.js'

const router = useRouter()

const form = ref({
	title: null,
	content: null,
	date: Date.now(),
})

const save = async () => {
	try {
		const data = {
			...form.value,
		}
		await createBlog(data)
		// router.push({ name: 'BlogList' })
	} catch (error) {
		console.error(error)
	}
}
const goListPage = () => router.push({ name: 'BlogList' })
</script>

<style lang="scss" scoped></style>
