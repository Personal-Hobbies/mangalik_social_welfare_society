<template>
	<div class="w-full">
		<div class="min-w-screen">
			<section class="text-gray-600 body-font bg-indigo-100">
				<div class="container px-16 sm:px-5 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<h1 class="title-font font-medium text-3xl text-gray-900">
						About Us
					</h1>
				</div>
				<div class="container px-16 sm:px-5 pb-10 mx-auto flex flex-wrap items-start">
					<div class="w-1/2 sm:w-full p-3 sm:p-0">
						<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
							Our Mission
						</h3>
						<p class="leading-relaxed text-justify">
							To organize people for their socio-economic, socio-cultural and for improvement of health and environment with special attention to promote better services for health, education, environment and livelihood for every person by spreading and extending it mainly among the needy poor persons residing in remote areas
						</p>
					</div>

					<div class="w-1/2 sm:w-full p-3 sm:p-0">
						<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
							Our Vision
						</h3>
						<p class="leading-relaxed text-justify">
							To organize specialized services and interventions towards extending planned development services on health, education, environment, livelihood and culture to enable a common people to adopt better life-style for a peaceful and progressive living in the society
						</p>
					</div>

					<div class="w-1/2 sm:w-full p-3 sm:p-0">
						<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
							Strategies Vision
						</h3>
						<p class="leading-relaxed text-justify">
							The operational strategies for development intervention of MSWS are based on the programs and projects intends to uplift the poor, needy, deprived persons and with special priority for the women.   The operation strategies are focusing towards five (5) sectoral programs and activities with special reference to the socio-economic-cultural empowerment of the people especially those are needy, poor, deprived and marginalized persons.

							The MSWS organizes its operations based on local resources, skills and markets and more specifically for the livelihoods programs incorporate with the utilization of traditional and natural resources for helping the needy people to have a regular flow of income round the year.  It also engaged itself to promote community harmony and national integration to share nation building responsibility.
						</p>
					</div>

					<div class="w-1/2 sm:w-full p-3 sm:p-0">
						<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
							Legal Status
						</h3>
						<p class="leading-relaxed text-justify">
							To organize specialized services and interventions towards extending planned development services on health, education, environment, livelihood and culture to enable a common people to adopt better life-style for a peaceful and progressive living in the society
						</p>
					</div>
				</div>
			</section>

			<section class="text-gray-600 body-font pb-12">
				<div class="container px-16 sm:px-5 mx-auto">
					<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
						Objectives
					</h3>
					<p class="leading-relaxed text-justify my-2 font-medium">
						Major objectives of Mangalik Social Welfare Society with latest amendments
					</p>
					<ol class="list-decimal ml-8">
						<li
							:key="index"
							v-for="(item, index) in objectives"
						>
							{{ item }}
						</li>
					</ol>
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
