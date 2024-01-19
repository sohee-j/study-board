<template>
	<div>
		<div class="row">
			<div class="col-auto">
				<h2>게시글 목록</h2>
			</div>
			<div class="col-auto me-auto"></div>
			<button class="btn btn-outline-dark col-auto" @click="goPageCreate">
				글쓰기
			</button>
			<hr class="my-4" />
			<PostFilter
				v-model:title="params.title_like"
				v-model:limit="params._limit"
			/>
		</div>
		<hr class="my-4" />
		<AppGrid :items="posts">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:create-at="item.createdAt"
					@click="getPage(item.id)"
					@modal="openModal(item)"
				></PostItem>
			</template>
		</AppGrid>

		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="page => (params._page = page)"
		/>
		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:created-at="modalCreatedAt"
			/>
		</Teleport>

		<template v-if="posts && posts.length > 0">
			<hr class="my-4" />
			<AppCard>
				<PostDetailView :id="posts[0].id"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from './PostItem.vue'
import PostFilter from './PostFilter.vue'
import PostDetailView from './PostDetailView.vue'
import PostModal from './PostModal.vue'
import AppCard from './AppCard.vue'
import AppGrid from '../AppGrid.vue'
import AppPagination from '../AppPagination.vue'
import { getPosts } from '@/api/posts'
import { ref, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const posts = ref([])
const router = useRouter()
const params = ref({
	_sort: 'createdAt',
	_limit: 3,
	_page: 1,
	_order: 'DESC',
	title_like: '',
})

//pagination
const totalCount = ref(0)
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
)

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value)
		posts.value = data
		totalCount.value = headers['x-total-count']
		// 위에와 모두 같은 코드!
		// const response = await getPosts()
		// getPosts()
		// 	.then(res => {
		// 		console.log('res', res)
		// 	})
		// 	.catch(error => {
		// 		console.log('error', error)
		// 	})
	} catch (error) {
		console.error(error)
	}
}
watchEffect(fetchPosts)

const getPage = id => {
	// router.push(`/posts/${id}`)
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	})
}
const goPageCreate = () => router.push({ name: 'PostCreate' })

//modal
const show = ref(false)
const modalTitle = ref('')
const modalContent = ref('')
const modalCreatedAt = ref('')
const openModal = ({ title, content, createdAt }) => {
	show.value = true
	modalTitle.value = title
	modalContent.value = content
	modalCreatedAt.value = createdAt
}
</script>

<style lang="scss" scoped></style>
