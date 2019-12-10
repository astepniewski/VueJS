import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    data() {
        return {
            resource: {}
        }
    },
    beforeMount() {
        this.resource = JSON.parse(this.$el.attributes['vue-resource'].value);
    }
})