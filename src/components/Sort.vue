<template>
    <div class="line">
        <div
            @click="select('time')"
            :class="{ selected: this.sortBy === 'time' }"
        >
            Time
        </div>
        /
        <div
            @click="select('size')"
            :class="{ selected: this.sortBy === 'size' }"
        >
            Size
        </div>
        /
        <div
            @click="select('haz')"
            :class="{ selected: this.sortBy === 'haz' }"
        >
            Hazerdes
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sort',
    props: {
        sortBy: String
    },
    methods: {
        select (num) {
            this.$emit('select', num)
        }
    }
}
</script>

<style scoped>
.line {
    cursor: pointer;
    font-size: 0.8em;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 30px;
    padding-top: 50px;
}
.line div {
    text-decoration: underline solid transparent;
    transition: 0.5s ease;
}
.selected {
    text-decoration: underline solid currentColor !important;
}
</style>
