import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'webpack-icons-installer/bootstrap'
import PaymentsTable from '../components/PaymentsTable.vue'

new Vue({
    el: '#app',
    components: { PaymentsTable }
});