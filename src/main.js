import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
//1param name filter, 2 function
Vue.filter("date", dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
