<template>
    <div class="left"></div>
        <div class="card-front">
            <img src="../assets/images/card-logo.svg">
            <v-container class="card-text flex flex-column align-center">
                <p class="ff-serif fw-500 text-white fs-500 letter-spacing-1 uppercase"> {{numberCard || '0000 0000 0000 0000'}}</p>
                <div class="w-100 flex align-flex-end justify-space-around" style="--gap: 12rem; height: 3rem;">
                    <p class="ff-serif fw-500 text-lg-violet fs-200 uppercase letter-spacing-3"> {{ nameCard || 'Jane Appleseed'}}</p>
                    <p class="ff-serif fw-500 text-lg-violet fs-200"> {{ monthCard || '00' }}/{{ yearCard || '00'}}</p>
                </div>
            </v-container>
        </div>
        <div class="card-back">
            <p class="ff-serif fw-500 text-white fs-400">{{ secretCard || '000'}}</p>
        </div>
</template>

<script setup>
const props = defineProps({
  numberCard: String,
  nameCard: String,
  monthCard: String,
  yearCard: String,
  secretCard: String,
})

</script>


<style>
    .left {
        grid-column: 1 / 7;
        grid-row: 1 / 7;
        background-image: url(../assets/images/bg-main-desktop.png);
    }

    .card-front {
        aspect-ratio: 2 / 1.09; /* computed height will be 133.33px, which is width/aspect-ratio */
        width: 446px;
        border-radius: 4%;
        background-repeat: no-repeat;
        background-image: url(../assets/images/bg-card-front.png);
        grid-column: 3;
        grid-row: 2/3;
        display: grid;
        grid-template-rows: repeat(5,1fr);
        box-shadow: 3px 3px 10px hsl(278, 68%, 11%);
    }

    .card-front img {
        grid-row: 1;
        margin-top: 2em;
        margin-left: 2em;
    }

    .card-front .card-text {
        grid-row: 3 / span 3;
    }

    .card-back {
        aspect-ratio: 2 / 1.09; /* computed height will be 133.33px, which is width/aspect-ratio */
        width: 446px;
        border-radius: 4%;
        background-repeat: no-repeat;
        background-image: url(../assets/images/bg-card-back.png);
        grid-column: 4;
        grid-row: 4 / 5;
        display: grid;
        grid-template-rows: repeat(5,1fr);
        justify-content: end;
        align-items: center;
        box-shadow: 3px 3px 10px hsl(279, 6%, 55%);
    }

    .card-back p {
        grid-row: 3;
        margin-right: 3rem;
        padding-bottom: .3rem;
    }
</style>