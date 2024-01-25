<template>
	<HomeBoard></HomeBoard>
	<h2>Store</h2>
	<p>counter : {{ counter }}</p>
	<p>doubleCount : {{ doubleCount }}</p>
	<p>doubleCountPlusOne : {{ doubleCountPlusOne }}</p>
	<button @click="increment()">Click!</button>
</template>

<script setup>
import HomeBoard from '../components/main/HomeBoard.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store)
const { increment } = store
</script>

<style lang="scss" scoped></style>
