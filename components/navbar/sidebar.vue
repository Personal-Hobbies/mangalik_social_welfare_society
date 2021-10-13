<template>
	<div class="h-screen shadow-xl select-none">
		<div class="h-full bg-gray-50 overflow-y-auto overflow-x-hidden">
			<div class="flex items-center justify-start pt-6 ml-8 cursor-pointer">
				<p class="font-bold dark:text-white text-xl">
					Mangalik Social Welfare Society [MSWS]
				</p>
			</div>
			<nav class="mt-6">
				<ul>
					<nuxt-link
						:to="element.link"
						:key="element.name"
						v-for="(element, index) in navbar"
					>
						<li
							@click="change_active(element.name, index, 'novalue')"
							:class="element.active ? 'w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 transition-colors duration-200 justify-start border-l-4 border-blue-500 bg-gradient-to-r to-white from-blue-100 cursor-default' : 'w-full text-gray-400 flex items-center pl-6 p-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent cursor-pointer hover:bg-gray-100 rounded-lg'"
						>
							<span class="text-left">
								<svg class="w-4 h-4 fill-current text-grey-800">
									<use :xlink:href="require('@/assets/icons/bds.svg') + `#${element.icon}`"></use>
								</svg>
							</span>
							<span
								:class="element.active ? 'mx-2 text-sm font-bold' : 'mx-2 text-sm font-normal'"
							>
								{{ element.name }}
							</span>
							<span class="text-right" v-if="element.submenu">
								<svg class="w-4 h-4 fill-current text-grey-800" v-if="element.active">
									<use xlink:href="@/assets/icons/bds.svg#arrow-up-g"></use>
								</svg>
								<svg class="w-4 h-4 fill-current text-grey-800" v-else>
									<use xlink:href="@/assets/icons/bds.svg#arrow-down-g"></use>
								</svg>
							</span>
						</li>

						<div class="flex relative pb-3" v-if="element.submenu && element.active">
							<div class="flex-none w-10">
								<div class="h-full w-10 absolute inset-0 flex items-end justify-end">
									<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
							</div>
							<div class="flex-grow w-auto">
								<ul class="mt-3">
									<nuxt-link
										:to="sub_ele.link"
										:key="sub_ele.name"
										v-for="(sub_ele, subindex) in element.submenu"
									>
										<li
											@click="change_active(sub_ele.name, index, subindex)"
											:class="sub_ele.active ? 'w-full text-gray-800 dark:text-white flex items-center p-2 pl-3 transition-colors duration-200 justify-start bg-gradient-to-r to-white from-blue-100 cursor-default' : 'w-full text-gray-400 flex items-center p-2 pl-3 transition-colors duration-200 justify-start hover:text-gray-800 cursor-pointer hover:bg-gray-100'"
										>
												<span class="text-left">
													<svg class="w-4 h-4 fill-current text-grey-800">
														<use :xlink:href="require('@/assets/icons/bds.svg') + `#${sub_ele.icon}`"></use>
													</svg>
												</span>
												<span
													:class="sub_ele.active ? 'mx-2 text-sm font-bold' : 'mx-2 text-sm font-normal'"
												>
													{{ sub_ele.name }}
												</span>
										</li>
									</nuxt-link>
								</ul>
							</div>
						</div>
					</nuxt-link>

				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { map } from 'lodash'

export default {
	name: 'Index',
	data: () => ({
		navbar: [
			{ name: 'Home', icon: 'home-bold-g', link: '/', active: true, submenu: false },
			{ name: 'About us', icon: 'business-g', link: '/about-us', active: false, submenu: [
				{ name: 'Our mission', icon: 'spark-g', link: '/about-us', active: true },
				{ name: 'Governance', icon: 'spark-g', link: '/about-us/governance', active: false },
			]},
			{ name: 'Organization Structure', icon: 'orgchart-g', link: '/', active: false, submenu: false },
			{ name: 'Operations', icon: 'policy-g', link: '/', active: false, submenu: false },
			{ name: 'Intervention', icon: 'document-g', link: '/', active: false, submenu: [
				{ name: 'Health education program', icon: 'spark-g', link: '/', active: true },
				{ name: 'Health program', icon: 'spark-g', link: '/', active: false },
				{ name: 'Environment program', icon: 'spark-g', link: '/', active: false },
				{ name: 'Livelihood program', icon: 'spark-g', link: '/', active: false },
				{ name: 'Community Development program', icon: 'spark-g', link: '/', active: false },
			]},
			{ name: 'Future Initiatives', icon: 'gears-g', link: '/', active: false, submenu: false },
			{ name: 'Gallery', icon: 'cards-g', link: '/', active: false, submenu: [
				{ name: 'Health education program', icon: 'spark-g', link: '/', active: true },
				{ name: 'Health program', icon: 'spark-g', link: '/', active: false },
				{ name: 'Environment program', icon: 'spark-g', link: '/', active: false },
				{ name: 'Livelihood program', icon: 'spark-g', link: '/', active: false },
				{ name: 'Community Development program', icon: 'spark-g', link: '/', active: false },
			]},
			{ name: 'Join us', icon: 'talk-g', link: '/', active: false, submenu: false },
			{ name: 'Contact', icon: 'phone-call-g', link: '/', active: false, submenu: false },
		]
	}),
	components: {
	},
	computed: {
	},
	methods: {
		change_active(name, index, subindex) {
			if(subindex == 'novalue') {
				map(this.navbar, (d,i)=> this.navbar[i].active = index == i ? true : false)
			}
			else {
				map(this.navbar[index].submenu, (d,i)=> this.navbar[index].submenu[i].active = subindex == i ? true : false)
			}
		}
	},
	beforeMount() {
	},
	mounted() {
	}
}
</script>

<style scoped>

</style>
