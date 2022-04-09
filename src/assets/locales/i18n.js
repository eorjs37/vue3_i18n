import { createI18n } from 'vue-i18n';
const messages = {
    en:{
        message:{
            hello:'Hello'
        }
    },
    ko:{
        message:{
            hello:'안녕'
        }
    }
}

const i18n = new createI18n({
    locale:'en',
    legacy:false,
    messages
})

export { i18n };