<template>
	<div class="w-full">
		<div class="min-h-screen">
			<section class="text-gray-600 body-font bg-yellow-100">
				<div class="container px-16 sm:px-5 pt-24 pb-10 mx-auto flex flex-wrap items-center">
					<div>
						<h1 class="title-font font-medium text-3xl text-gray-900">
							Governance
						</h1>
						<p class="leading-relaxed mt-4 text-justify">
							The Mangalik Social Welfare Society is governed by a two-tire management system to manage its policy and daily affairs. The said two tire systems are:
						</p>
					</div>
					<div class="container mx-auto flex flex-wrap items-start">
						<div class="w-1/2 sm:w-full p-3 sm:p-0">
							<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
								General Body
							</h3>
							<p class="leading-relaxed text-justify">
								The General Body of the Society is the highest authority to decide all the policy matters for the Society
							</p>
						</div>

						<div class="w-1/2 sm:w-full p-3 sm:p-0">
							<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
								Executive Committee
							</h3>
							<p class="leading-relaxed text-justify">
								The Executive Committee of the Society takes necessary decisions for proper execution/implementation and management of its human resources also being looked after by the Executive Committee of the Society
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="text-gray-600 body-font">
				<div class="container px-16 sm:px-5 mx-auto">
					<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
						Members of Executive Committee
					</h3>
					<p class="leading-relaxed text-justify my-2 font-medium">
						The Executive Committee of the Society for the year 2018-2019 was as follows
					</p>

					<div class="flex flex-col pt-4">
						<div class="overflow-x-auto">
						<div class="align-middle inline-block min-w-full sm:px-0 px-8">
							<div class="shadow overflow-hidden border-b border-gray-200 rounded-lg">
							<table class="divide-y divide-gray-200">
								<thead class="bg-gray-50">
								<tr>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Sl.
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Name & Address
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Designation
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Age
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Education
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Occupation
									</th>
								</tr>
								</thead>

								<tbody class="bg-white divide-y divide-gray-200">
								<tr
									:id="index"
									v-for="(member, index) in members"
								>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">{{ index + 1 }}</div>
									</td>
									<td class="px-6 py-4 whitespace-wrap w-1/4 sm:w-full">
										<div class="flex items-center">
											<div>
											<div class="text-sm font-medium text-gray-900">
												{{ member.name }}
											</div>
											<div class="text-sm text-gray-500 sm:hidden">
												{{ member.address }}
											</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
											{{ member.position }}
										</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">{{ member.age }}</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-900">{{ member.education }}</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-900">{{ member.occupation }}</div>
									</td>
								</tr>

								</tbody>
							</table>
							</div>
						</div>
						</div>
					</div>

					<div class="container py-4 mx-auto flex flex-wrap items-start">
						<div class="w-1/2 sm:w-full p-3 sm:p-0">
							<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
								Advisory Board
							</h3>
							<p class="leading-relaxed text-justify">
								The Mangalik Social Welfare Society has also formed an advisory Board based on the requirements of advices required for successful and impact oriented execution of its programs and projects. The Board also provides necessary inputs to executive committee, general body for selection, preparation and submission of proposals for receiving desired grants
							</p>
						</div>

						<div class="w-1/2 sm:w-full p-3 sm:p-0">
							<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
								Program Implementation Committee
							</h3>
							<p class="leading-relaxed text-justify">
								The human resource of the MSWS has formed a project implementation Committee (PIC) for insuring a smooth and successful time-bound execution of its project and programs
							</p>
						</div>

						<div class="w-1/2 sm:w-full p-3 sm:p-0">
							<h3 class="title-font font-medium text-lg text-gray-900 mt-4">
								Human Resource Development
							</h3>
							<p class="leading-relaxed text-justify">
								The human resource of the MSWS is of voluntary nature. All the volunteers are working for the Society understanding this is a part of their duty towards the community/society. Volunteers are comprises of trained, technical and non-technical persons to carry out the activities for the Society
							</p>
						</div>
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
	name: 'About-Us',
	data: () => ({
		members: [
			{
				age: '48',
				name: 'Akhil Kanti Malakar',
				address: 'Vill.: & PO: Sarala, Block: Kadamtala, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799261',
				position: 'President',
				education: 'Madhyamik',
				occupation: 'Business',

			},
			{
				age: '50',
				name: 'Manu Chakraborty',
				address: 'Vill.: South Nayapara, PO: Dharmanagar, Block/NP: Dharmanagar, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799250',
				position: 'Vice President',
				education: 'Graduate',
				occupation: 'Graduate',

			},
			{
				age: '23',
				name: 'Dr. Anku Malakar',
				address: 'Vill.: Krishanapur, PO: Dharmanagar, Block: Yuvarajnagar, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799253',
				position: 'Secretary',
				education: 'Diploma in Civil, Diploma in Homeo',
				occupation: 'Homeo Practitioner',

			},
			{
				age: '57',
				name: 'Dr. Sanjay Dey',
				address: 'Vill.: Dewanpasha, Bargul, PO: Dewanpasha, Block: Yuvarajnagar, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799261',
				position: 'Assistant Secretary',
				education: 'Graduate, Nutritionists',
				occupation: 'Homeo Practitioner',

			},
			{
				age: '70',
				name: 'Satyendra Chandra Nath',
				address: 'Vill.:Radhapur PO: Radhapur, Block: Yuvarajnagar, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799253',
				position: 'Treasurer',
				education: 'I.A. Passed',
				occupation: 'Retd Person',

			},
			{
				age: '34',
				name: 'Dr. Bijaya Chakraborty',
				address: 'Vill.: South Nayapara, PO: Rajbbari, Block/MC: Dharmanagar MC, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799253',
				position: 'Executive Member',
				education: 'DMDS',
				occupation: 'Homeo Practitioner',

			},
			{
				age: '44',
				name: 'Chaitali Bhattacharjee',
				address: 'Vill.: Pratyekray, PO Pratyekray, Block: Kadamtala, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799261',
				position: 'Executive Member',
				education: 'Graduate',
				occupation: 'House Wife',

			},
			{
				age: '35',
				name: 'Mrinal Kanti Chakraborty',
				address: 'Vill.: Thana Road, PO: Dhaarmanagar, Block/MC: Dharmanagar MC, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799250',
				position: 'Executive Member',
				education: 'Madhyamik(ITI-Electrical)',
				occupation: 'Business',

			},
			{
				age: '27',
				name: 'Anungka Malakar',
				address: 'Vill.:Radhapur PO: Radhapur, Block: Yuvarajnagar, Sub-Division: Dharmanagar, District: Tripura North, TRIPURA-799253',
				position: 'President',
				education: 'XII',
				occupation: 'House Wife',

			},
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
