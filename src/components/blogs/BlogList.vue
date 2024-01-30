<template>
	<div class="blog-menu">
		<ul>
			<li><a href="#">prologue</a></li>
			<li><a href="#">blog</a></li>
			<li><a href="#">PICK</a></li>
		</ul>
		<div class="btn">
			<button class="btn btn-outline-dark" @click="goWritePage">글쓰기</button>
		</div>
	</div>
	<BlogItem @post-click="goDetail"></BlogItem>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BlogItem from './BlogItem.vue'

const router = useRouter()
const goDetail = (item, index) => {
	router.push({ name: 'BlogDetail', params: { id: index } })
}
const goWritePage = () => {
	router.push({ name: 'BlogWrite' })
}
</script>

<style lang="scss" scoped>
.blog-menu {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;
	ul {
		display: flex;
		li {
			display: flex;
			align-items: center;
			a {
				display: inline-block;
				font-size: 12px;
				color: #000000;
				text-decoration: none;
				position: relative;
				padding: 0 10px;
				font-weight: 700;
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 0;
					width: 1px;
					height: 14px;
					margin-top: -6px;
					background: #dcdcdc;
				}
			}
			&:first-child {
				a {
					padding-left: 0;
					&::after {
						display: none;
					}
				}
			}
		}
	}
}
</style>
