import Vue from 'vue';
import App from './App';

new Vue({
    render: criarElemento => criarElemento(App)
}).$mount("#app");