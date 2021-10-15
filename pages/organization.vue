<template>
	<div class="w-full">
		<div class="min-h-screen">
			<section class="text-gray-600 body-font bg-yellow-100">
				<div class="container px-16 sm:px-5 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<h1 class="title-font font-medium text-3xl text-gray-900">
						Organization Structure
					</h1>
				</div>

				<div class="container px-16 sm:px-5 pb-10 mx-auto flex flex-wrap items-start">
					<div class="w-full p-3 sm:p-0">
						<p class="leading-relaxed mt-4 text-justify">
							loremipsum
						</p>
					</div>
				</div>
			</section>

			<section class="text-gray-600 body-font py-12">
				<div class="container px-16 sm:px-5 mx-auto">
					<div class="grid grid-cols-1 gap-4">
						<div class="bg-orange-400 h-18 w-full rounded-md flex items-center justify-center text-white text-xl font-bold p-2 text-center">Mangalik Social Welfare Society (MSWS)</div>
					</div>

					<div class="flex space-x-4 sm:space-x-0 pt-4 sm:px-1">
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-grow bg-lime-400 h-12 rounded-md flex items-center justify-center text-white text-xl font-bold">General Body</div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
					</div>

					<div class="flex space-x-4 sm:space-x-0 pt-4 sm:px-2">
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-grow bg-green-400 h-12 rounded-md flex items-center justify-center text-white text-xl font-bold">Executive Committee</div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
					</div>

					<div class="flex space-x-4 sm:space-x-0 pt-4 sm:px-4">
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-grow bg-emerald-400 h-12 rounded-md flex items-center justify-center text-white text-xl font-bold">Programmes & Activites</div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
					</div>

					<div class="grid grid-cols-7 gap-2 pt-4 sm:px-6 sm:grid-cols-1">
						<div class="h-12 rounded-md flex items-center justify-center invisible sm:hidden"></div>
						<div class="sm:h-12 h-16 bg-sky-400 rounded-md flex items-center justify-center text-white text-sm font-medium p-2 text-center">Health Education Programmes</div>
						<div class="sm:h-12 h-16 bg-blue-400 rounded-md flex items-center justify-center text-white text-sm font-medium p-2 text-center">Health Programmes</div>
						<div class="sm:h-12 h-16 bg-indigo-400 rounded-md flex items-center justify-center text-white text-sm font-medium p-2 text-center">Livelihood Programmes</div>
						<div class="sm:h-12 h-16 bg-violet-400 rounded-md flex items-center justify-center text-white text-sm font-medium p-2 text-center">Environment Programmes</div>
						<div class="sm:h-12 h-16 bg-purple-400 rounded-md flex items-center justify-center text-white text-sm font-medium p-2 text-center">Community Developement Programmes</div>
						<div class="h-12 rounded-md flex items-center justify-center invisible sm:hidden"></div>
					</div>

				</div>
			</section>
		</div>

		<Footer/>
	</div>
</template>

<script>
import Footer from '@/components/footer/footer.vue'

export default {
	name: 'Index',
	data: () => ({
		intervention: [
			'Health education programs',
			'Health programs',
			'Environment programs',
			'Livelihood programs',
			'Community development programs',
		]
	}),
	components: {
		Footer
	},
	computed: {
	},
	methods: {
	},
	beforeMount() {
	},
	mounted() {
	}
}
</script>

<style scoped></style>
