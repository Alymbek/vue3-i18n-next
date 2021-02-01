<!-- *************************************************************************
TEMPLATE
************************************************************************* -->
<template lang="pug">
#app
	Header
	main(
		uk-height-viewport="expand: true; offset-top: 0; offset-bottom: 0; min-height: 300"
	) 
		section.uk-container.uk-container-expand
			router-view
	Footer
</template>

<!-- *************************************************************************
SCRIPT
************************************************************************* -->
<script>
	// @ is an alias to /src
	import Header from "@/pages/layout/Header.vue";
	import Footer from "@/pages/layout/Footer.vue";

	export default {
		name: "general",
		components: {
			Header,
			Footer,
		},
	};
</script>

<!-- *************************************************************************
I18N # Ң ң Ү ү Ө ө
************************************************************************* -->
<i18n>
{}
</i18n>
