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
        }
    }

}
</script>

<style lang="scss" scoped>
table {
    margin: 32px auto 32px;

    tbody {
        tr {
            & td {
                padding: 8px 20px;
                font-size: 30px;
                font-weight: 500;
                width: 50%;

                &:first-of-type {
                    text-align: right;
                }
            }
        }
    }
}
</style>