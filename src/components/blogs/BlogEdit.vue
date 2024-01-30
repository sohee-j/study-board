<template>
	<input
		type="text"
		class="mb-3 form-control"
		@input="inputTitle"
		placeholder="제목"
	/>
	<div class="mb-3">
		<textarea
			:value="content"
			@input="inputContent"
			class="form-control"
			rows="3"
		>
		</textarea>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
