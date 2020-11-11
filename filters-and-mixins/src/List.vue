<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins</h1>
        
                <input placeholder="search for fruit" v-model="fruitSearch"/>
                <ul>
                    <li v-for="fruit in filterFruits" :key="fruit">{{fruit}}</li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
import {fruitMixin} from './fruitMixin'
    
    export default {
        mixins:[fruitMixin],
        created(){
            console.log('Inside List Component created hook')
        }
    }
</script>

<style>

</style>
