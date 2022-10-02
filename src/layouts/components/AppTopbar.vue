<template>
	<div class="layout-topbar">
		<router-link 
			class="layout-topbar-logo"
			to="/" 
		>
			<img 
				alt="Logo"
				:src="defaultResturantLogo" 
			/>
			<span> Restaurant Name </span>
		</router-link>

		<button 
			class="p-link layout-menu-button layout-topbar-button" 
			@click="onMenuToggle"
		>
			<i class="pi pi-bars"></i>
		</button>

		<button 
			class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ 
				selector: '@next', 
				enterClass: 'hidden', 
				enterActiveClass: 'scalein', 
				leaveToClass: 'hidden', 
				leaveActiveClass: 'fadeout', 
				hideOnOutsideClick: true
			}"
		>
			<i class="pi pi-ellipsis-v"></i>
		</button>

		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li 
				v-for="menu in topbarMenu" 
				v-bind:key="menu.id"
			>
				<button 
					class="p-link layout-topbar-button" 
					@click="this.$router.push(menu.to)"
				>
					<i :class="`pi ${menu.icon}`"></i>
					<span>{{ menu.name }}</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useAppTopbar } from './useAppTopbar';

const router = useRouter();

export default {
	name: "appTopbar",
	setup: () => {
		const { 
			defaultResturantLogo,
			topbarMenu,
		} = useAppTopbar; 

		return {
			defaultResturantLogo,
			topbarMenu,
			router
		}
	},

    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },

		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
    }
}
</script>