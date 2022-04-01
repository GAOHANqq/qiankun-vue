import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps,setDefaultMountApp, start } from 'qiankun';

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'child', 
    entry: '//localhost:8081/child',
    container: '#subview',
    activeRule: '/child',
  }
]);
setDefaultMountApp('/child')
start();