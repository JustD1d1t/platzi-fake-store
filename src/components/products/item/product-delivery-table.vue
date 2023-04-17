<template>
    <table>
        <thead>
            <tr>
                <th v-for="(value, key) in data" :key="key" class="text-center">{{ key }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="(value) in data" :key="value" class="text-center">
                    {{ value }}
                </td>
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
    margin: 64px 0;
    width: 100%;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

td,
th {
    padding: 16px;
    font-size: 24px;
}
td {
    white-space: nowrap;
}
</style>