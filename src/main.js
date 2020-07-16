import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueWindowSize from "vue-window-size";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueMask from "v-mask";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false;

Vue.use(VueWindowSize);
Vue.use(VueMask);
Vue.use(PerfectScrollbar);
Vue.use(VueScrollTo, {
  duration: 600,
  container: "#container"
});
Vue.component("slick-carousel", VueSlickCarousel);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
