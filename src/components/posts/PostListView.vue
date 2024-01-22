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

		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="'Error'" />
		<template v-else>
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
		</template>

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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAxios } from '@/hooks/useAxios'

// const posts = ref([])
const router = useRouter()
const params = ref({
	_sort: 'createdAt',
	_limit: 3,
	_page: 1,
	_order: 'DESC',
	title_like: '',
})

const { data: posts, error, loading, response } = useAxios('/posts', { params })

//pagination
const totalCount = computed(() => response.value.headers['x-total-count'])
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
)

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
