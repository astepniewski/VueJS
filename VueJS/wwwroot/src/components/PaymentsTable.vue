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
                        dataClass: 'text-center'
                    },
                    {
                        name: 'nickname',
                    },
                    {
                        name: 'gender',
                        titleClass: 'text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'salary',
                        titleClass: 'text-center',
                        dataClass: 'text-right'
                    }
                ]
            }
        },
        components: { Vuetable }
    }
</script>
