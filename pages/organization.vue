<template>
	<div class="w-full">
		<div class="min-h-screen">
			<section class="text-gray-600 body-font bg-yellow-100">
				<div class="container px-16 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<h1 class="title-font font-medium text-3xl text-gray-900">
						Organization Structure
					</h1>
				</div>

				<div class="container px-16 pb-10 mx-auto flex flex-wrap items-center">
					<div class="lg:w-3/5 md:w-full md:pr-16 lg:pr-0 pr-0">
						<p class="leading-relaxed mt-4 text-justify">
							The <b>Mangalik Social Welfare Society (MSWS)</b> has completed its second formal years and marching for the third formal years of its existence for extending welfare and development services for the people of North Tripura district.  However, the Society was emerged with another name, <b>Bharatiya Health Mission (BHM)</b> but considering similar names of one central government, the same was declined and was registered as <b>Mangalik Social Welfare Society (MSWS)</b> on <b>6th April 2017</b>. Since inception, the MSWS is extending its welfare and development services for the needy poor people in one hand and also organizing its efforts for its organizational development.
						</p>
					</div>
				</div>
			</section>

			<section class="text-gray-600 body-font py-12">
				<div class="container px-16 mx-auto">
					<div class="grid grid-cols-1 gap-4">
						<div class="bg-orange-400 h-18 w-full rounded-md flex items-center justify-center text-white text-xl font-bold p-2 text-center">Mangalik Social Welfare Society (MSWS)</div>
					</div>

					<div class="flex md:space-x-4 sm:space-x-0 pt-4 sm:px-1">
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

					<div class="flex md:space-x-4 sm:space-x-0 pt-4 sm:px-2">
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-grow bg-green-400 h-12 rounded-md flex items-center justify-center text-white text-xl font-bold">Executive Committee</div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
						<div class="flex-none w-16 h-12 rounded-md flex items-center justify-center sm:hidden"></div>
					</div>

					<div class="flex md:space-x-4 sm:space-x-0 pt-4 sm:px-4">
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
