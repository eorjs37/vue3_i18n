# Vue3 i18n

## π₯· 1. μ€μΉ
```javascript
npm install vue-i18n@next
```

## π¬ 2. μΈν(μλ νμΌ μμ±)
- **assets/locales/en.json**
- **assets/locales/ko.json**
- **assets/locales/index.js**
- **assets/i18n/i18n.js**


### assets/locales/en.json
```json
{
  "hello": "hello"
}
```

### assets/locales/ko.json
```json
{
  "hello": "μλνμΈμ"
}
```

### assets/locales/index.js
```javascript
import ko from '@/assets/locales/ko.json';
import en from '@/assets/locales/en.json';

export default{
    'ko':ko,
    'en':en,
}
```

### assets/i18n/i18n.js
```javascript
import { createI18n } from 'vue-i18n';
import messages from '@/assets/locales/index';

const i18n = new createI18n({
    locale:'ko',
    legacy:false,
    messages
})

export { i18n };
```

## π 3. main.js import
```javascript
import { createApp } from 'vue'
import App from '@/App.vue';
import { i18n } from '@/assets/i18n/i18n';

const app =  createApp(App);
app.use(i18n);
app.mount('#app');
```


## 4. μ¬μ©λ²
```html javascript
<template>
  <h1>
    {{$t('hello')}}
  </h1>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
```