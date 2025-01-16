import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { createStore } from "vuex";
import * as modules from "./store";

const app = createApp(App);

const store = createStore({
  modules,
});

app.use(router);
app.use(store);

app.use(VueAxios, axios);

app.mount("#app");
