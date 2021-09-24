<template>
    <div class="menu">
        <MenuLine class="line" text="ANHET" link="/" />
        <MenuLine class="line" text="AMHES" link="/Amhes" />
        <MenuLine class="line" text="Random" link="/Random" />
    </div>
</template>

<script>
import MenuLine from '@/components/MenuLine.vue'

export default {
    name: 'Menu',
    components: {
        MenuLine
    },
    props: {},
    methods: {}
}
</script>

<style scoped>
.menu {
    padding-top: 150px;
    padding-bottom: 150px;
    text-align: center;
    color: white;
}
.line {
    padding: 25px;
}
a{
    text-decoration: none;
}

</style>
