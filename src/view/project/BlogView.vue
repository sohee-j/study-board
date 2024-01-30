<template>
	<div>
		<h2 class="logo">
			<a href="https://www.naver.com/" class="logo_naver"
				><span class="blind">NAVER</span></a
			>
			<a href="https://www.naver.com/" class="logo_blog"
				><span class="blind">BLOG</span></a
			>
		</h2>
		<div class="wrap">
			<div class="inner">
				<RouterView></RouterView>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
	display: flex;
	align-items: center;
	padding-left: 20px;
	font-size: unset;
	height: 54px;
	background: #00c73c;
	border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	margin-bottom: 20px;
	.logo_naver {
		display: inline-block;
		background: url(../../assets/naver_logo.svg) no-repeat;
		width: 26px;
		height: 26px;
	}
	.logo_blog {
		display: inline-block;
		background: url(../../assets/naver_logo_text.svg) no-repeat;
		background-origin: content-box;
		width: 48px;
		height: 26px;
		margin-left: 10px;
	}
}
.wrap {
	width: 966px;
	margin: 0 auto;
}
</style>
