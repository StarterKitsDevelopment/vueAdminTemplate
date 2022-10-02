<template>
	<div class="layout-menu-container">
		<AppSubmenu 
			class="layout-menu"
			:items="model" 
			:root="true" 
			@menuitem-click="onMenuItemClick" 
			@keydown="onKeyDown" 
		/>
	</div>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	components: {
		AppSubmenu
	},

	props: { model: Array },

    methods: {

        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },

		onKeyDown(event) {
			const nodeElement = event.target;
			if (event.code === 'Enter' || event.code === 'Space') {
				nodeElement.click();
				event.preventDefault();
			}
		},

		bannerImage() {
			return this.$appState.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png';
		}
    },
}
</script>