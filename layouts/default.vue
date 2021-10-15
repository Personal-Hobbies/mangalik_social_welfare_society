<template>
	<div class="flex h-screen relative">
		<Sidebar class="w-1/6 z-50 fixed"/>
		<div class="flex-none w-1/6 sm:hidden"/>
		<Nuxt class="flex-grow z-0"/>
	</div>
</template>

<script>
import Footer from '@/components/footer/footer.vue'
import Sidebar from '@/components/navbar/sidebar.vue'

export default {
	data: () => ({
	}),
	components: {
		Footer,
		Sidebar,
	},
	computed: {
	},
	beforeMount(){
	},
};
</script>

<style scoped></style>
