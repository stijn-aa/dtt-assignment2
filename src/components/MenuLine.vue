<template>
    <div>
        <router-link :to="link">{{ text }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'MenuLine',
    props: {
        text: String,
        link: String
    }
}
</script>

<style scoped>
a {
  color: rgb(255, 255, 255);
}
a:visited {
  color: rgb(255, 255, 255);
}
</style>
