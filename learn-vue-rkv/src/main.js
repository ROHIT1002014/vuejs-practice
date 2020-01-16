import Vue from 'vue'
import App from './App.vue'

import student from './student.vue'

Vue.component("rohitComponent",student)


new Vue({
  el: '#app',
  render: h => h(App)
})
