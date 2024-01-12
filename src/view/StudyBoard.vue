<script setup>
import StudyListData from '../components/main/StudyListData.js'

const studyItem = StudyListData
</script>

<template>
	<div class="inner">
		<h2>Study List</h2>
		<ul class="board">
			<li v-for="(item, index) in studyItem" :key="index">
				<div class="item">
					<router-link :to="`/ex/${index}`">
						<p class="title">
							<i class="bi bi-pencil-square me-1"></i>
							예제{{ index + 1 }} - {{ item.title }}
						</p>
					</router-link>
					<span class="desc"
						><i class="bi bi-dot"></i>
						{{ item.desc }}
					</span>
					<span class="date">{{ item.date }}</span>
				</div>
			</li>
		</ul>
	</div>
	<router-view />
</template>

<style lang="scss" scoped>
.inner {
	h2 {
		font-size: 28px;
		background: #f1baa1;
		color: #ffffff;
		padding: 10px 16px;
	}
	.board {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-flow: row wrap;
		gap: 6px;
		margin-top: 10px;
		li {
			width: calc(100% / 5 - 6px);

			border: 1px solid #dddddd;
		}
		.item {
			display: flex;
			flex-direction: column;
			padding: 16px;
			.title {
				position: relative;
				font-size: 14px;
				font-weight: 700;
				margin-bottom: 6px;
				&:hover {
					color: #6d031c;
				}
			}
			.desc {
				position: relative;
				display: flex;
			}
			span {
				font-size: 14px;
				margin-bottom: 10px;
				&:last-child {
					font-size: 12px;
					margin-bottom: 0;
				}
			}
		}
	}
}
</style>
