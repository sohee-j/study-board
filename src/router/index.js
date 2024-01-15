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
	],
})

export default router
