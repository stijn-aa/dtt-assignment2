<template>
    <div class="bar">
        <button
            @click="this.methods.emitNewDate(-1)"
            class="btn align-left left"
        >
            {{ this.methods.calcDateInString(-1) }}
        </button>
        <div class="date align-center">
            {{ this.methods.calcDateInString(0) }}
        </div>
        <button
            @click="this.methods.emitNewDate(1)"
            class="btn align-right right"
        >
            {{ this.methods.calcDateInString(1) }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Dayselect',
    props: {
        date: Date
    },
    data () {
        return {
            methods: {
                fetchNewData: days => {
                    const newDate = new Date(this.date)
                    newDate.setDate(newDate.getDate() + days)
                    return newDate
                },
                StringifyDate: dateGot => {
                    const dd = String(dateGot.getDate()).padStart(2, '0')
                    const mm = String(dateGot.getMonth() + 1).padStart(2, '0')
                    const yyyy = dateGot.getFullYear()
                    const date = dd + '/' + mm + '/' + yyyy
                    return date
                },
                emitNewDate: days => {
                    console.log(this)
                    const dateInFormat = this.methods.fetchNewData(days)
                    this.$emit('go', dateInFormat)
                },
                calcDateInString: days => {
                    const dateInFormat = this.methods.fetchNewData(days)
                    console.log(dateInFormat)
                    const dateInstring = this.methods.StringifyDate(
                        dateInFormat
                    )
                    return dateInstring
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
