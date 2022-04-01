import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
console.log(window.__POWERED_BY_QIANKUN__)
new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
function render(props = {}) {
   console.log(props)

}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
   render(props)
   console.log('mount props', props);
}


export async function unmount(props) {
   console.log('unmount props', props);
}


export async function update(props) {
  console.log('update props', props);
}