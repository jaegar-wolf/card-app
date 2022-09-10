<template>
    <v-form class="right mt-10 d-flex">
        <v-container class="d-flex flex-column align-start">
            <p class="ff-serif uppercase fw-500">Card Holder Name</p>
            <v-text-field class="w-75" variant="outlined" color="primary" placeholder="eg. Jeane Appleseed"></v-text-field>

            <p class="ff-serif uppercase fw-500">Card Number</p>
            <v-text-field class="w-75" variant="outlined" color="primary" placeholder="eg. 1234 5678 9123 0000"></v-text-field>
            
            <div class="w-75">
                <div class="flex flex-row" style="--gap: 3.2rem;">
                    <p class="ff-serif uppercase fw-500">Exp. Date (Mm/Yy)</p>
                    <p class="ff-serif uppercase fw-500">Cvc</p>
                </div>
                <div class="flex flex-row mt-1 w-100">
                    <v-text-field class="w-auto" variant="outlined" color="primary" placeholder="MM"></v-text-field>
                    <v-text-field class="w-auto" variant="outlined" color="primary" placeholder="YY"></v-text-field>
                    <v-text-field class="w-50" variant="outlined" color="primary" placeholder="eg. 123"></v-text-field>
                </div>
            </div>
            <v-btn class="w-75 mt-3" flat color="secondary" size="large">
                Confirm
            </v-btn>
        </v-container>
    </v-form>
</template>
  
<style>
    .right{
        grid-column: 7 / -1;
        grid-row: 2/ span 2;
        margin-right: 10em ;
    }

</style>