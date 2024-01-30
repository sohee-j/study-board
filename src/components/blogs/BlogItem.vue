<template>
	<div class="blog-item">
		<ul class="post-container">
			<li
				:class="['post', { small: index > 0 }]"
				v-for="(item, index) in blogData"
				:key="index"
				@click="$emit('postClick', item, index)"
			>
				<div class="img-box">
					<img src="../../assets/bg01.jpg" alt="" />
				</div>
				<div class="cont-box">
					<h3 class="title">
						<a
							href="javascript:void(0);"
							class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
							>{{ item.title }}</a
						>
					</h3>
					<p class="text text-truncate">
						<a
							href="javascript:void(0);"
							class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
							>{{ item.content }}</a
						>
					</p>
					<p class="date">{{ item.date }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { getBlogList } from '@/api/blog'

const blogData = ref([])
defineEmits(['postClick'])

const fetchBlog = async () => {
	try {
		const { data } = await getBlogList()
		blogData.value = data
	} catch (error) {
		console.error(error)
	}
}
fetchBlog()
</script>

<style lang="scss" scoped>
.blog-item {
	border: 1px solid rgb(109, 109, 109, 0.15);
	padding: 10px;
	.post-container {
		display: grid;
		grid-template-columns: 1fr 2fr 2fr;
		grid-auto-flow: column;
		li.post {
			position: relative;
			padding: 0 10px;
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 1px;
				height: 100%;
				top: 0;
				right: 0;
				background: rgb(109, 109, 109, 0.15);
			}
			&:nth-of-type(1) {
				grid-row: 1 / span 3;
				padding-left: 0;
			}
			&:nth-of-type(5),
			&:nth-of-type(6),
			&:nth-of-type(7) {
				padding-right: 0;
				&::after {
					display: none;
				}
			}
			.img-box {
				width: 183px;
				height: 185px;
				overflow: hidden;
				margin-bottom: 15px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.title {
				font-size: 14px;
				font-weight: 600;
				margin: 0 0 6px 0;
			}
			.text {
				max-height: 50px;
				font-size: 12px;
				word-wrap: break-word;
				word-break: break-all;
				white-space: normal;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
				a {
					display: block;
				}
			}
			.date {
				font-size: 12px;
				color: #6d6d6d;
				margin-top: 4px;
			}
			&.small {
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				.img-box {
					min-width: 90px;
					width: 90px;
					height: 90px;
					margin-bottom: 0;
					margin-right: 6px;
				}
				.title {
					margin-bottom: 4px;
				}
				&:nth-of-type(4),
				&:nth-of-type(7) {
					margin-bottom: 0;
				}
			}
		}
	}
}
// .blog-item {
// 	display: grid;
// 	grid-template-columns: 1fr 2fr 2fr;
// 	padding: 15px;
// 	border: 1px solid rgb(109, 109, 109, 0.15);

// 	.item {
// 		position: relative;
// 		&::after {
// 			content: '';
// 			position: absolute;
// 			width: 1px;
// 			height: 100%;
// 			top: 0;
// 			right: 0;
// 			background: rgb(109, 109, 109, 0.15);
// 		}
// 		&:last-child {
// 			&::after {
// 				display: none;
// 			}
// 		}
// 		&.small {
// 			.box {
// 				display: flex;
// 				align-items: center;
// 				padding: 0px 0 10px 10px;
// 				.img-box {
// 					min-width: 90px;
// 					width: 90px;
// 					height: 90px;
// 					margin-bottom: 0;
// 					margin-right: 6px;
// 				}
// 				.title {
// 					margin-bottom: 4px;
// 				}
// 			}
// 		}
// 	}
// 	.box {
// 		position: relative;
// 		margin-right: 10px;
// 		.img-box {
// 			width: 183px;
// 			height: 185px;
// 			overflow: hidden;
// 			margin-bottom: 15px;
// 			img {
// 				width: 100%;
// 				height: 100%;
// 			}
// 		}
// 		.title {
// 			font-size: 14px;
// 			font-weight: 600;
// 			margin: 0 0 6px 0;
// 		}
// 		.text {
// 			max-height: 50px;
// 			font-size: 12px;
// 			word-wrap: break-word;
// 			word-break: break-all;
// 			white-space: normal;
// 			text-overflow: ellipsis;
// 			display: -webkit-box;
// 			-webkit-line-clamp: 3;
// 			-webkit-box-orient: vertical;
// 			overflow: hidden;
// 			a {
// 				display: block;
// 			}
// 		}
// 		.date {
// 			font-size: 12px;
// 			color: #6d6d6d;
// 			margin-top: 4px;
// 		}
// 	}
// }
</style>
