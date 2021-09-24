<template>
    <div class="footer">
        <!-- <div class="footer-img">
            <img src="../assets/img/asteroid.svg" alt="Kiwi standing on oval" />
        </div>
        <p>Sitemap</p> -->
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        headerText: String
    }
}
</script>

<style scoped>
.footer {
    display: flex;
    margin-bottom: 3em;
}
img {
    width: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    -webkit-animation: rotating 18s linear infinite;
}
.footer-img {
    margin-left: auto;
}
p {
    font-size: 0.8em;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    padding-left: 40px;
}

img:hover {
    -webkit-animation: rotating 1s linear infinite;
}

@-webkit-keyframes rotating {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

h1 {
    margin-top: auto;
    margin-bottom: auto;
}
</style>
