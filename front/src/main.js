// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import $ from 'jquery'
import axios from 'axios'

Vue.config.productionTip = false;
//配置生产环境的ip
//var url = ' http://127.0.0.1:80/';
//生产环境
var url =   'http://39.105.40.137:8000/';
axios.defaults.baseURL = url;
/* eslint-disable no-new */
Vue.prototype.$ajax = axios;
new Vue({
  el: '#app',
  router
});
