import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";
import MultiselectDropdown from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

Vue.component("MultiselectDropdown", MultiselectDropdown);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
