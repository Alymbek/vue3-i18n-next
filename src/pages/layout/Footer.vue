<template lang="pug">
footer
	nav.uk-container.uk-container-expand
		.uk-float-left
			#about: a(href="/about") {{ $t('about') }}
		.uk-float-right
			#copyright {{ $t('copyright') }}&nbsp;&copy;
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->
<script>
	export default {
		name: "Footer",
	};
</script>

<!-- *************************************************************************
I18N # Ң ң Ү ү Ө ө
************************************************************************* -->
<i18n>
{
	"en": {
		"about":"About",
		"copyright":"Alymbek"
		},
	"ky": {
		"about":"Маалымат",
		"copyright": "Алымбек"
		},
	"ru": {
		"about":"Информация",
		"copyright": "Алымбек"
		}
}
</i18n>
