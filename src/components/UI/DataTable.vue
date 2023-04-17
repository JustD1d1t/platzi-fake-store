<template>
    <table>
        <tbody>
            <tr v-for="(value, key) in data" :key="value">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => { }
        },
        classes: {
            type: String,
            default: ''
        }
    }

}
</script>

<style lang="scss" scoped>
table {
    &.center {
        text-align: center;
    }

    &.text-to-center {
        tbody {
            tr {
                & td {
                    padding: 8px 20px;

                    &:first-of-type {
                        text-align: right;
                    }
                }
            }
        }
    }
}
</style>