<template>
	<div class="w-full">
		<div class="min-h-screen">
			<section class="text-gray-600 body-font bg-indigo-100">
				<div class="container px-16 sm:px-5 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<h1 class="title-font font-medium text-3xl text-gray-900">
						Contact
					</h1>
				</div>
				<div class="container px-16 sm:px-5 pb-10 mx-auto flex flex-wrap items-start">
					<div class="w-1/2 sm:w-full p-3 sm:p-0">
						<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
							Where to Find Us
						</h3>
						<p class="leading-relaxed text-justify">
							MANGALIK SOCLAL WELFARE SOCIETY<br>
							Registered Office:<br>
							Village: Saraspur Ward No.-8,<br>
							Panchayat: Bargul,<br>
							Post: Amtali,<br>
							Block: Kadamtala,<br>
							Sub-Division: Dharmanagar,<br>
							District: North Tripura,<br>
							State: TRIPURA, PIN Code - 799261
						</p>
					</div>

					<div class="w-1/2 sm:w-full p-3 sm:p-0">
						<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
							Contact Information
						</h3>
						<p class="leading-relaxed text-justify">
							Email: <nuxt-link to="mailto:mangalikwelfare2016@gmail.com">mangalikwelfare2016@gmail.com</nuxt-link>
						</br>
							Mobile: +918794262260, +919856026851
						</p>
					</div>
				</div>
			</section>

			<section class="text-gray-600 body-font py-12">
				<div class="container px-16 sm:px-5">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14524.691108535482!2d92.18294018909523!3d24.479469697759352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ea5c7d55c531%3A0x3856f489e4ce6d68!2sSarala%2C%20Tripura%20799261!5e0!3m2!1sen!2sin!4v1581857932295!5m2!1sen!2sin" frameborder="0" style="border:0; height:60vh; width: inherit" allowfullscreen="true"></iframe>
				</div>
			</section>
		</div>

		<Footer/>
	</div>
</template>

<script>
import Footer from '@/components/footer/footer.vue'

export default {
	name: 'About-Us',
	data: () => ({
		objectives: [
			'To establish and maintain libraries and reading rooms for the welfare of the common people.',
			'To promote agriculture and allied activities and animal resource development for welfare of the society.',
			'To generate public awareness about potential of nutrition, homeopathy, bio-chemic, and ayurvedic system of medicine for enhancing health security of rural communities including disease prevention and health promotion.',
			'To organize and undertake trainings on village industries for the welfare of the interested persons for self-employment',
			'To provide care through ayurvedic, nutrition, homeopathy and bio-chemic system of medicine to suffering humanity',
			'To generate public awareness in Tripura under bio-medical waste (management & handling)',
			'To confer motivational speech for the mental development and welfare of the prisoners and perverts peoples',
			'To ensure girls educational supports and women’s rights and empowerment of their security in both rural and urban slums',
			'To fight and welfare against child labour',
			'To accept bequeath, gift, grant or endowment for the objects of the society',
			'To publish books, journals and posters for betterment of young stars and for the attainment of objectives of the society. Continued from the next page. Continued from the last page',
			'To acquire by purchase or by lease or by otherwise, land and building and other properties movable or immovable for the society from time to time may think fit for the welfare of the society',
			'To collect subscriptions and donations from members and others to attain the object of the society',
			'To work as a non-political organization',
			'To do all such other things as may be conducive or incidental for attainment of all or any of the above objectives',
			'To organize vocational training courses for promotion of self-employment among the rural poor for sustainable livelihoods',
			'To conduct awareness programs on critical disease like: HIV-AIDS, Cancer, Diabetes, Tuberculosis, and Hepatitis for their control and to take up preventive measures',
			'To assist and cooperate for execution of various welfare and development programs for the state government departments, ministries and sponsoring agencies',
			'To assist and cooperate for execution of various welfare and development programs for the state government departments, ministries and sponsoring agencies',
			'To establish special coaching classes for the disabled, run residential school and hostels for promotion of education among disabled persons',
			'To organize capacity building seminars, workshops, health camps, eye camps, blood donation camps, environment and sanitation awareness camps and it can run health centre, ayurvedic hospital to improve the health status of poor people',
			'To organize planned actions for latest skill development trainings and to assist in promotion of men and women groups for adoption of cluster approach for sustainable livelihoods',
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
