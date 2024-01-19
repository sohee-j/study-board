import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory('/study-board/'),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../view/StudyHome.vue'),
		},
		{
			path: '/study',
			name: 'StudyBoard',
			component: () => import('../view/StudyBoard.vue'),
		},
		{
			path: '/ex/0',
			name: 'js',
			beforeEnter() {
				window.location.href = 'https://sohee-j.github.io/sh-todolist.io/'
			},
		},
		{
			path: '/ex/1',
			name: 'todolist',
			component: () => import('../view/project/TodoList.vue'),
		},
		{
			path: '/posts',
			name: 'PostList',
			component: () => import('@/components/posts/PostListView.vue'),
		},
		{
			path: '/posts/create',
			name: 'PostCreate',
			component: () => import('@/components/posts/PostCreateView.vue'),
		},
		{
			path: '/posts/:id',
			name: 'PostDetail',
			component: () => import('@/components/posts/PostDetailView.vue'),
			props: true,
			// props: route => ({ id: parseInt(route.params.id) }),
		},
		{
			path: '/posts/:id/edit',
			name: 'PostEdit',
			component: () => import('@/components/posts/PostEditView.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@/view/NotFoundView.vue'),
		},
	],
})

export default router
