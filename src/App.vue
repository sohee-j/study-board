<script setup>
import NavBar from './components/main/NavBar.vue'
</script>

<template>
	<NavBar></NavBar>
	<main>
		<router-view />
	</main>
</template>

<style lang="scss" scoped>
main {
	height: calc(100vh - 56px);
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;
}
</style>
