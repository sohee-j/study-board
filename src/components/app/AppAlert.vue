<template>
	<!-- <Transition name="slide">
		<div v-if="show" :class="['app-alert', 'alert', typeStyle]" role="alert">
			{{ message }}
		</div>
	</Transition> -->
	<div class="app-alert">
		<TransitionGroup name="slide">
			<div
				v-for="({ message, type }, index) in alerts"
				:key="index"
				:class="['alert', typeStyle(type)]"
				role="alert"
			>
				<!-- :class="['alert', typeStyle(type)]" // item.type 구조분해할당으로 -->
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
// import { computed } from 'vue'
import { useAlert } from '@/composables/alert'
const { alerts } = useAlert()

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success')

// const porps = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: 'error',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// })
// const typeStyle = computed(() =>
// 	porps.type === 'error' ? 'alert-danger' : 'alert-success',
// )
</script>

<style lang="scss" scoped>
.app-alert {
	position: fixed;
	top: 60px;
	right: 10px;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
