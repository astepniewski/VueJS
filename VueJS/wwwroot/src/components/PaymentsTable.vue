<template>
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields">
    </vuetable>
</template>

<script>
    import Vuetable from 'vuetable-2'
    import accounting from 'accounting'
    import moment from 'moment'

    export default {
        data() {
            return {
                fields: [
                    'name', 'email',
                    {
                        name: 'birthdate',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                        callback: 'formatDate|DD/MM/YYYY'
                    },
                    {
                        name: 'nickname',
                        callback: 'allcap'
                    },
                    {
                        name: 'gender',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                        callback: 'genderLabel'
                    },
                    {
                        name: 'salary',
                        titleClass: 'text-center',
                        dataClass: 'text-right',
                        callback: 'formatNumber'
                    }
                ]
            }
        },
        methods: {
            allcap(value) {
                return value.toUpperCase()
            },
            genderLabel(value) {
                return value == 'M'
                    ? '<span class="badge badge-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
                    : '<span class="badge badge-danger"><i class="glyphicon glyphicon-heart"></i> Female</span>'
            },
            formatNumber(value) {
                return accounting.formatNumber(value, 2)
            },
            formatDate(value, fmt = 'D MMM YYYY') {
                return (value == null)
                    ? ''
                    : moment(value, 'YYYY-MM-DD').format(fmt)
            }
        },
        components: { Vuetable }
    }
</script>
