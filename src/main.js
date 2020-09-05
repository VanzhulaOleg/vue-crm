import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "./components/app/Loader.vue";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase, { database } from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
//1param name filter, 2 function
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

const firebaseConfig = {
  apiKey: "AIzaSyB8W9YZyLo-cHBP7ApO1yWw0b6sKk_CXDc",
  authDomain: "vue-crm-65358.firebaseapp.com",
  databaseURL: "https://vue-crm-65358.firebaseio.com",
  projectId: "vue-crm-65358",
  storageBucket: "vue-crm-65358.appspot.com",
  messagingSenderId: "439677026067",
  appId: "1:439677026067:web:887ef0d762c9c700c5a4e6"
};
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  //cheked before create app
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
