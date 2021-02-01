require('./style.css');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { createI18n } from 'vue-i18n';
// setup i18n instance with globaly
const i18n = createI18n({
	legacy: true,
	locale: 'ky',
	fallbackLocale: 'ky',
	availableLocales: ['en', 'ky', 'ru'],
	sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
	silentTranslationWarn: false, // true - warning off
	silentFallbackWarn: true,
});

createApp(App)
	.use(i18n)
	.use(router)
	.mount('#app');
