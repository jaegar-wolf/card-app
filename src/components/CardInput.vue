<template>
    <v-form class="right mt-10 d-flex">
        <v-container class="d-flex flex-column align-start">
            <p class="ff-serif uppercase fw-500">Card Holder Name</p>
            <v-text-field 
                class="w-75" 
                variant="outlined" 
                color="primary" 
                placeholder="eg. Jane Appleseed"
                @input="changeNameCard"
                ></v-text-field>

            <p class="ff-serif uppercase fw-500">Card Number</p>
            <v-text-field 
                class="w-75" 
                variant="outlined" 
                color="primary" 
                placeholder="eg. 1234 5678 9123 0000" 
                @input="changeNumberCard"
                ></v-text-field>
            
            <div class="w-75">
                <div class="flex flex-row" style="--gap: 3.2rem;">
                    <p class="ff-serif uppercase fw-500">Exp. Date (Mm/Yy)</p>
                    <p class="ff-serif uppercase fw-500">Cvc</p>
                </div>
                <div class="flex flex-row mt-1 w-100">
                    <v-text-field 
                        class="w-auto" 
                        variant="outlined" 
                        color="primary" 
                        placeholder="MM"
                        @input="changeMonthCard"
                        ></v-text-field>
                    <v-text-field 
                        class="w-auto" 
                        variant="outlined" 
                        color="primary" 
                        placeholder="YY"
                        @input="changeYearCard"
                        ></v-text-field>
                    <v-text-field 
                        class="w-50" 
                        variant="outlined" 
                        color="primary" 
                        placeholder="eg. 123"
                        @input="changeSecretCard"
                        ></v-text-field>
                </div>
            </div>
            <v-btn class="w-75 mt-3" flat color="secondary" size="large">
                Confirm
            </v-btn>
        </v-container>
    </v-form>
</template>

<script setup>
    import { ref } from 'vue';

    const emit = defineEmits([
        'changeNumberEmit',
        'changeNameEmit',
        'changeMonthEmit',
        'changeYearEmit',
        'changeSecretEmit'
    ])
    const numberCard = ref()
    const nameCard = ref()
    const monthCard = ref()
    const yearCard = ref()
    const secretCard = ref()

    function changeNumberCard(e){
        numberCard.value = Number(e.target.value)
        emit('changeNumberEmit', numberCard.value)
    }

    function changeNameCard(e){
        nameCard.value = String(e.target.value)
        emit('changeNameEmit', nameCard.value)
    }

    function changeMonthCard(e){
        monthCard.value = Number(e.target.value)
        emit('changeMonthEmit', monthCard.value)
    }

    function changeYearCard(e){
        yearCard.value = Number(e.target.value)
        emit('changeYearEmit', yearCard.value)
    }

    function changeSecretCard(e){
        secretCard.value = Number(e.target.value)
        emit('changeSecretEmit', secretCard.value)
    }
</script>
  
<style>
    .right{
        grid-column: 7 / -1;
        grid-row: 2/ span 2;
        margin-right: 10em ;
    }

</style>