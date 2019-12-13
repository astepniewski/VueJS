<template>
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields">
    </vuetable>
</template>

<script>
    import Vuetable from 'vuetable-2'

    export default {
        data() {
            return {
                fields: [
                    'name', 'email',
                    {
                        name: 'birthdate',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
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
                        dataClass: 'text-right'
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
            }
        },
        components: { Vuetable }
    }
</script>
