<!-- *************************************************************************
TEMPLATE
************************************************************************* -->
<template lang="pug">
li <!-- component "language" -->
	a.uk-link-muted(href="#")
		span.uk-icon(uk-icon="icon:world; ratio: 0.8")
		| &nbsp;{{ $t('language') }}
	.uk-navbar-dropdown
		ul.uk-nav.uk-navbar-dropdown-nav
			li: a(href="#", v-on:click.prevent="changeLanguage('en')") {{ $t('ENG') }} - ENG
			li: a(href="#", v-on:click.prevent="changeLanguage('ky')") {{ $t('KYR') }} - KYR
			li: a(href="#", v-on:click.prevent="changeLanguage('ru')") {{ $t('RUS') }} - RUS
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->
<script>
	const var_dump = require("var_dump");

	export default {
		name: "Language",
		methods: {
			changeLanguage: function (language) {
				var_dump(this.$root.$i18n);
				this.$root.$i18n.locale = language;
			},
		},
	};
</script>

<!-- *************************************************************************
I18N # Ң ң Ү ү Ө ө
************************************************************************* -->
<i18n>
{
	"en": {
		"language": "Language",
		"ENG": "ENG",
		"KYR": "KYR",
		"RUS": "RUS"
		},
	"ky": {
		"language": "Тилдер",
		"ENG": "ENG",
		"KYR": "KYR",
		"RUS": "RUS"
		},
	"ru": {
		"language": "Языки",
		"ENG": "ENG",
		"KYR": "KYR",
		"RUS": "RUS"
		}
}
</i18n>
