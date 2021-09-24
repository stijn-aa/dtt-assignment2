<template>
    <div class="bar">
        <button
            @click="this.methods.emitNewPage(-1)"
            class="btn align-left left"
        >
            {{ this.page - 1}}
        </button>
        <div class="date align-center">
            {{ this.page }}
        </div>
        <button
            @click="this.methods.emitNewPage(1)"
            class="btn align-right right"
        >
            {{ this.page + 1}}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Dayselect',
    props: {
        page: Number
    },
    data () {
        return {
            methods: {
                emitNewPage: days => {
                    this.$emit('go', this.page + days)
                }
            }
        }
    }
}
</script>

<style scoped>
.bar {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 20px;
    justify-content: center;
}
.date {
    margin-top: auto;
    margin-bottom: auto;
}

.align-left {
    float: left;
    text-align: left;
}

.align-center {
    float: left;
    width: 40%;
    text-align: center;
}

.align-right {
    float: left;
    text-align: right;
}
.left {
    background: rgb(9, 9, 121);
    background: linear-gradient(
        -90deg,
        rgba(9, 9, 121, 0) 20%,
        rgb(163, 255, 217) 100%
    );
    /* box-shadow: 0px 5px 22px 0px rgba(0, 0, 0, 0.2); */
    border-radius: 10px;
    transition: 0.5s;
}
.right {
    background: rgb(9, 9, 121);
    background: linear-gradient(
        90deg,
        rgba(9, 9, 121, 0) 20%,
        rgb(163, 255, 217) 100%
    );
    /* box-shadow: 0px 5px 22px 0px rgba(0, 0, 0, 0.2); */
    border-radius: 10px;
    transition: 0.5s;
}
.right:hover {
    /* background-color: rgb(0, 255, 242); */
    transform: translate(8px, 0px);
}
.left:hover {
    /* background-color: rgb(0, 255, 242); */
    transform: translate(-8px, 0px);
}

@media (min-width:0px) and (max-width:900px){
    button{
        padding: 0.6rem 0.8rem;
    }
}
</style>
