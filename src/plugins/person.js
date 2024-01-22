export default {
	install(app, options) {
		const person = {
			name: '소희',
			say() {
				alert(this.name)
			},
		}
		app.config.globalProperties.$person = person
		app.provide('person', person)
	},
}
