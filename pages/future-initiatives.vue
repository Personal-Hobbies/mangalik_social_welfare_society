<template>
	<div class="w-full">
		<div class="min-h-screen">
			<section class="text-gray-600 body-font bg-yellow-100">
				<div class="container px-16 sm:px-5 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<h1 class="title-font font-medium text-3xl text-gray-900">
						Future Initiatives
					</h1>
				</div>

				<div class="container px-16 sm:px-5 pb-10 mx-auto flex flex-wrap items-start">
					<div class="w-full p-3 sm:p-0">
						<p class="leading-relaxed mt-4 text-justify">
							<ul class="list-disc">
								<li class="font-medium text-md text-black-200">Establishment of a Hospital</li>
								<p>
									The Society has started its initiatives for establishment of an Aurvedic Hospital under sponsorship of the department of Ayush, Government of India.  The application-cum Proposal is under preparation and to be submitted shortly.
								</p>
								<li class="font-medium text-md text-black-200">Child Care initiatives</li>
								<p>
									The Society has started its initiatives for introducing a complete institution to take care of children in the North Tripura district.  A proposal has been submitted to specific department and sponsoring for establishment for a child care institution and the application in under active consideration.
								</p>
								<li class="font-medium text-md text-black-200">Sustainable Development Initiatives</li>
								<p>
									The Society has started its initiatives for receiving sponsoring and introducing sustainable development programs under CSR from various departments, companies and Institutions for which preparation of proposals and submissions are on.
								</p>
							</ul>
						</p>
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
	name: 'Future-Inititatives',
	data: () => ({
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
