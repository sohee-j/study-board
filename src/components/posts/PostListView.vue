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
				:limit="params._limit"
				@update:limit="changeLimit"
			/>
		</div>
		<hr class="my-4" />

		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="'Error'" />
		<template v-else-if="!isExist">
			<p class="text-center py-5 text-muted">No Result</p>
		</template>
		<template v-else>
			<AppGrid :items="posts" col-class="col-12 col-md-6 col-lg-4">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:created-at="item.createdAt"
						@click="getPage(item.id)"
						@modal="openModal(item)"
						@preview="selectPreview(item.id)"
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

		<template v-if="previewId">
			<hr class="my-4" />
			<AppCard>
				<PostDetailView :id="previewId"></PostDetailView>
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

const previewId = ref(null)
const selectPreview = id => (previewId.value = id)
const router = useRouter()
const params = ref({
	_sort: 'createdAt',
	_limit: 6,
	_page: 1,
	_order: 'DESC',
	title_like: '',
})
const changeLimit = value => {
	params.value._limit = value
	params.value._page = 1
}

const { data: posts, error, loading, response } = useAxios('/posts', { params })
const isExist = computed(() => posts.value && posts.value.length > 0)

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
