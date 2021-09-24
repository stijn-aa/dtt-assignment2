<template>
    <div class="item">
        <div class="lines">
            <div class="line">
                <div class="static">Name:</div>
                <div class="variable " id="name">{{ itemObj.name }}</div>
            </div>
            <div class="line">
                <div class="static ">Size:</div>
                <div class="variable " id="size">
                    {{ itemObj.size + itemObj.metric }}
                </div>
            </div>
            <div class="line">
                <div class="static ">Flyby:</div>
                <div class="variable " id="flyby">{{ itemObj.flyby }}</div>
            </div>
            <div class="line">
                <div class="static ">Hazardous:</div>
                <div class="variable " id="haz">{{ itemObj.haz }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemGeneral',
    props: {
        itemObj: Object
    }
}
</script>

<style scoped>
.item {
    background: rgba(0, 0, 0, 0.205);
    border-color: rgb(163, 255, 217);
    border-style: solid;
    border-width: 1px;
    box-shadow: 0px 5px 22px 0px rgba(0, 0, 0, 0.37);
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    padding: 30px;
    border-radius: 10px;
    font-family: 'Press Start 2P';
    font-size: 0.8em;
    cursor: pointer;
    transition: 0.4s ease;
}
.item:hover {
    transform: scale(1.02);
}
.static {
    flex-basis: 40%;
    color: grey;
}

.line{
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
}

@media (min-width: 0px) and (max-width: 900px) {
    .item {
        width: inherit;
        border-radius: 0px;
        border-left-style: none;
        border-right-style: none;
    }
}
@media (min-width:0px) and (max-width: 685px){
   .line {
        flex-direction: column;
   }
   .static {
        margin-bottom: 1rem;
   }
}
</style>
