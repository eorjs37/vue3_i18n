import { createI18n } from 'vue-i18n';
import messages from '@/assets/locales/index';

const i18n = new createI18n({
    locale:'ko',
    legacy:false,
    messages
})

export { i18n };