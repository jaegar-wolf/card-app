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
                :rules="[rules.required, rules.maxLengthName]"
                maxlength="28"
                ></v-text-field>

            <p class="ff-serif uppercase fw-500">Card Number</p>
            <v-text-field 
                class="w-75" 
                variant="outlined" 
                color="primary" 
                placeholder="eg. 1234 5678 9123 0000" 
                @input="changeNumberCard($event); space($event)"
                maxLength="19"
                :rules="[rules.required, rules.numberOnly]"
                ></v-text-field>
            
            <div class="flex w-75 flex-row flex-wrap">
                <div class="flex flex-column flex-wrap">
                    <p class="ff-serif uppercase fw-500">Exp. Date (Mm/Yy)</p>
                    <div class="flex flex-row">
                        <v-text-field 
                            class="w-auto" 
                            variant="outlined" 
                            color="primary" 
                            placeholder="MM"
                            @input="changeMonthCard"
                            @keypress="isNumber($event)"
                            maxLength="2"
                            :rules="[rules.required, rules.month]"
                            ></v-text-field>
                        <v-text-field 
                            class="w-auto" 
                            variant="outlined" 
                            color="primary" 
                            placeholder="YY"
                            @input="changeYearCard"
                            @keypress="isNumber($event)"
                            maxLength="2"
                            :rules="[rules.required]"
                            ></v-text-field>
                    </div>
                </div>
                <div class="flex flex-column w-50">
                    <p class="ff-serif uppercase fw-500">Cvc</p>
                    <v-text-field 
                        class="w-100" 
                        variant="outlined" 
                        color="primary" 
                        placeholder="eg. 123"
                        @input="changeSecretCard"
                        @keypress="isNumber($event)"
                        maxlength="3"
                        :rules="[rules.required]"
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

    const rules = {
        required: value => !!value || "Can't be blank",
        month: value => Number(value) <= 12 || "Not a month",
        numberOnly: value => !isNaN(value.replace(/\s+/g, '')) || 'Wrong format, only number', 
        maxLengthName: value => value.length <= 28 || "Max 28 characters",
    }

    function space(e){
        e.target.value = e.target.value.replace(/[^\da-zA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    function isNumber (evt){
        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        const keyPressed = evt.key;
        
        if (!keysAllowed.includes(keyPressed)) {
            evt.preventDefault()
        }
}

    function changeNumberCard(e){
        numberCard.value = String(e.target.value)
        emit('changeNumberEmit', numberCard.value)
    }

    function changeNameCard(e){
        nameCard.value = e.target.value
        emit('changeNameEmit', nameCard.value)
    }

    function changeMonthCard(e){
        monthCard.value = e.target.value
        emit('changeMonthEmit', monthCard.value)
    }

    function changeYearCard(e){
        yearCard.value = e.target.value
        emit('changeYearEmit', yearCard.value)
    }

    function changeSecretCard(e){
        secretCard.value = e.target.value
        emit('changeSecretEmit', secretCard.value)
    }
</script>
  
<style>
    .right{
        grid-column: 7 / span 2;
        grid-row: 2/ span 2;
        width: 100%;
        margin-left: 4em;
    }

</style>