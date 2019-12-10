import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'

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