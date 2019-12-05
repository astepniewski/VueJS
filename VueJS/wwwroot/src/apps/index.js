import Vue from 'vue'

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