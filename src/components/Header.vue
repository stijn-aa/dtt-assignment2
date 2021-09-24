<template>
    <div class="sticky">
        <div class="menu">
            <div class="header-img">
                <img
                    :class="loading"
                    src="../assets/img/asteroid.svg"
                    alt="Kiwi standing on oval"
                />
            </div>
            <h1>{{ headerText }}</h1>
        </div>
        <!-- <p>So Many Astroids, So Much Space</p> -->
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        headerText: String,
        loading: String
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    position: sticky;
    flex-direction: row;
    cursor: pointer;
}
img {
    width: 100px;
    padding-top: 40px;
    padding-bottom: 40px;
    -webkit-animation: rotating 35s linear infinite;
}
.header-img {
    margin-left: auto;
}
p{
    text-align: center;
    font-size: 0.7em;
    transform: translate(0, -60px);
}
h1 {
    margin-right: auto;
    padding-left: 40px;
    margin-top: auto;
    margin-bottom: auto;
    text-decoration: underline solid transparent;
    transition: 0.5s ease;
}
h1:hover {
    /* color: rgb(114, 125, 126); */
    text-decoration: underline solid Currentcolor;
}

img:hover {
    -webkit-animation: rotating 1s linear infinite;
}
img.loading {
    -webkit-animation: rotating 0.5s linear infinite;
}
.sticky {
    position: sticky;
    top: 0;
    background: rgb(20, 20, 29);
    background: linear-gradient(
        -180deg,
        rgb(20, 20, 29) 88%,
        rgba(163, 255, 243, 0) 100%
    );
    padding-bottom: 0.3em;
    z-index: 10;
}
@-webkit-keyframes rotating {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

@media (min-width:0px) and (max-width:1500px){
    .menu {
        flex-direction: column;
        justify-content: center;
    }
    .header-img {
        margin-right: auto;
    }
    img {
        width: 40px;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    h1 {
        margin-top: 0rem;
        margin-bottom: 1rem;
        font-size: 2.2rem;
        text-align: center;
        width: 100%;
    }
}
@media (min-width:0px) and (max-width:900px){
    h1 {
        margin-top: 0rem;
        margin-bottom: 1rem;
        font-size: 2.2rem;
        text-align: left;
    }
}

</style>
