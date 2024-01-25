<template>
	<NavBar></NavBar>
	<main>
		<router-view />
	</main>
	<AppAlert></AppAlert>
</template>

<script setup>
import NavBar from './components/main/NavBar.vue'
</script>

<style lang="scss" scoped>
main {
	height: calc(100vh - 56px);
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;
}
</style>
