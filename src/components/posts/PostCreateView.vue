<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<AppError v-if="error" :message="error.message" />
		<PostForm
			@submit.prevent="save"
			v-model:title="form.title"
			v-model:content="form.content"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button class="btn btn-primary" :disabled="loading">
					<template v-if="loading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else>저장</template>
				</button>
			</template>
		</PostForm>
		<!-- <AppAlert :items="alerts"></AppAlert> -->
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PostForm from './PostForm.vue'
import { useAxios } from '@/hooks/useAxios'
import { useAlert } from '@/composables/alert'

const { vSuccess, vAlert } = useAlert()

const router = useRouter()
const form = ref({
	title: null,
	content: null,
})
const { error, loading, excute } = useAxios(
	'/posts',
	{
		method: 'post',
	},
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' })
			vSuccess('등록이 완료되었습니다.')
		},
		onError: err => {
			vAlert(err.message)
		},
	},
)
const save = () => {
	excute({ ...form.value, cratedAt: Date.now() })
}

// const save = async () => {
// 	try {
// 		loading.value = true
// 		await createPost({
// 			...form.value,
// 			createdAt: Date.now(),
// 		})
// 		router.push({ name: 'PostList' })
// 		vSuccess('등록이 완료되었습니다.')
// 	} catch (err) {
// 		vAlert(err.message)
// 		error.value = err
// 	} finally {
// 		loading.value = false
// 	}
// }

const goListPage = () => router.push({ name: 'PostList' })
</script>

<style lang="scss" scoped></style>
