import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOPtions: {
    $loadingKey: "loading"
  }
});

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount("#app");
