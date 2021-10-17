<template>
	<div class="w-full">
		<div class="min-h-screen">
			<section class="text-gray-600 body-font bg-yellow-100">
				<div class="container px-16 sm:px-5 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<h1 class="title-font font-medium text-3xl text-gray-900">
						Join Us
					</h1>
				</div>

				<div class="container px-16 sm:px-5 pb-10 mx-auto flex flex-wrap items-start">
					<div class="w-full p-3 sm:p-0">
						<p class="leading-relaxed mt-4 text-justify">
							<ul class="list-disc">
								<li>
									Man/Woman who subscribe to the aims and objects of this Society are eligible for membership provided he/she pledges to adhere to the aims and objects of the Society and to pay Rs.100/-(Rupees one hundred) only as admission fee (Not Refundable) and Monthly subscription of Rs.30/- (thirty) only
								</li>
								<li>
									Members to be enrolled to this society after being proposed and seconded by existing members with the consent of at least 2/3" (two/third) of the members of the Executive Committee of the Society
								</li>
								<li>
									The Executive Committee shall have the right to disqualify or to remove from membership any member, who has been found to have acted contrary to the interest and objects of the society and any member, whose subscriptions shall have been in arrear for a period of not exceeding 3 (three) months
								</li>
								<li>
									A Man/Women shall not be eligible for election as a member of the Executive Committee or exercising his/her voting right, if he/she has been a member of the society for less than six months immediately preceding the date of Annual General Meeting of the Society
								</li>
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
