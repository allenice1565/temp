import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tooltip, Input, Pagination, Radio, Card, Button, Dropdown, DropdownMenu, DropdownItem, Table, TableColumn, Icon, Row, Col, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/normalize.css'
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false



Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Radio)
Vue.use(Card)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
