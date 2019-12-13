<template>
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields"
              :css="css"
              :sort-order="sortOrder">
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
                    {
                        name: '__checkbox',
                        titleClass: 'center aligned',
                        dataClass: 'center aligned'
                    },
                    {
                        name: 'name',
                        sortField: 'name'
                    },
                    'email',
                    {
                        name: 'birthdate',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                        callback: 'formatDate|MM/DD/YYYY',
                        sortField: 'birthdate'
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
                ],
                sortOrder: [
                    {
                        field: 'birthdate',
                        sortField: 'birthdate',
                        direction: 'asc'
                    }
                ],
                css: {
                    ascendingIcon: 'glyphicon glyphicon-chevron-up',
                    descendingIcon: 'glyphicon glyphicon-chevron-down'
                }
            }
        },
        mounted() {
            setTimeout(() => {
                console.log(this.$refs.vuetable.selectedTo);
                this.fields[3].visible = false;
                this.$refs.vuetable.normalizeFields();
            }, 5000);
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
