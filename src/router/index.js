import Vue from 'vue'
import Router from 'vue-router'
import JsonPaste from '@/components/JsonPaste'
import JsonView from '@/components/JsonView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JsonPaste',
      component: JsonPaste
    },
    {
      path: '/json_view',
      name: 'JsonView',
      component: JsonView
    }
  ]
})
