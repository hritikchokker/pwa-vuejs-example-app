import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CustomButton from "./global/components/CustomButton.vue";
import { axiosPlugin } from "./plugins/axios";
Vue.config.productionTip = false;

Vue.component("CustomButton", CustomButton);
Vue.use(axiosPlugin);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
