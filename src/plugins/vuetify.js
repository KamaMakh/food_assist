import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 640,
      sm: 768,
      md: 1280,
      lg: 1650,
      xl: 1920
    }
  }
});
