import Vue from 'vue'
import App from './App'
import store from '@/store/store'
import uniFly from '@/pages/uniFly.js'
import user from './userInfo.js'
Vue.prototype.$store=store;
Vue.config.productionTip = false;

uniFly.baseUrl = 'http://192.168.1.25:8089/users';
// uniFly.headers.common['Authorization'] = AUTH_TOKEN;
uniFly.headers['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.unifly=uniFly;

Vue.prototype.$user=user;

App.mpType = 'app'
import cuCustom from '@/common/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

const app = new Vue({
    ...App
})
app.$mount()
