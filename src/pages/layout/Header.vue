<!-- *************************************************************************
TEMPLATE
************************************************************************* -->
<template lang="pug">
header(uk-sticky)
	nav.uk-container.uk-navbar-container.uk-container-expand.uk-navbar-transparent(
		uk-navbar="mode: click"
	)
		.uk-navbar-left
			ul.uk-navbar-nav
				li: router-link(to="/", exact) {{ $t('home') }}
				li: router-link(:to="{ name: 'About' }") {{ $t('about') }}

		.uk-navbar-center
		.uk-navbar-right
			ul.uk-navbar-nav
				Language <!-- component "language" -->
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->
<script>
	import Language from "./components/Language.vue";

	export default {
		name: "Header",
		methods: {},
		components: { Language },
	};
</script>

<!-- *************************************************************************
I18N
************************************************************************* -->
<i18n>
{
	"en": {
		"home": "Home",
		"about": "About"
		},
	"ky": {
		"home": "Башкы бет",
		"about": "Маалымат"
		},
	"ru": {
		"home": "Главная страница",
		"about": "Информация"
		}
}
</i18n>
