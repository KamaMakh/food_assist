import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "../shared/api";
import { userUrls } from "./urls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackBar: {
      value: false,
      color: "success",
      text: "Внимание!",
      button_text: "Ok"
    }
  },
  mutations: {
    ignore() {
      //ignore
    }
  },
  actions: {
    feedback({ commit }, data) {
      return new Promise((resolve, reject) => {
        axiosInstance
          .post(userUrls.feedback, data)
          .then(response => {
            if (response.status === 200) {
              commit("ignore");
              resolve();
            } else {
              reject(response);
            }
          })
          .catch(error => {
            reject(error.response);
          });
      });
    }
  },
  modules: {}
});
