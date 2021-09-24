<template>
    <div>
        <router-view />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Poppins:wght@500;900&family=Press+Start+2P&display=swap');

body {
    background: rgb(20, 20, 29);
    /* background: linear-gradient(198deg, rgba(20,20,29,1) 0%, rgba(0,0,71,1) 100%); */
    color: #ffffff;
    font-weight: 500;
    font-family: 'Press Start 2P';
    margin: 0;
    scroll-behavior: smooth;
    overflow: scroll;
    /* font-size: 0.8em; */
}

.container {
    width: 90%;
    max-width: 89rem;
    margin-left: auto;
    margin-right: auto;
}

button {
    font-size: 0.8em;
    font-family: 'Press Start 2P';
    color: rgb(20, 20, 29);
    width: 230px;
    display: inline-block;
    border: none;
    text-decoration: none;
    background: none;
    cursor: pointer;
    padding: 1rem 1rem;
}

h1 {
    color: rgb(255, 255, 255);
    font-family: 'Poppins', sans-serif;
    font-size: 3em;
    letter-spacing: 0.1em;
    word-spacing: 0.2em;
}

@media (min-width:0px) and (max-width:900px){
    button.btn {
        padding: 0.3rem 0.3rem;
    }
}
</style>
