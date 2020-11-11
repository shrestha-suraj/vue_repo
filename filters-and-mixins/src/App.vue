<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
                <p>{{text}}</p>
                <p>{{text | toUppercase}}  -> Text is being transformed to upper case by local filter</p>
                <p>{{text | to-lowercase}}  -> Text is being transformed to lower case by global filter</p>
                <p>{{text | toUppercase | to-lowercase}}  -> Text is being transformed to upper case and then lower case by piping two filters</p>
                <hr/>
                <h5>Filter is not always convinent. Below example: Input text makes filter the fruits</h5>
                <p>Filter has performance issues in such case and hence we use computed instead to use js native .filter function</p>
                <input placeholder="search for fruit" v-model="fruitSearch"/>
                <ul>
                    <li v-for="fruit in filterFruits" :key="fruit">{{fruit}}</li>
                </ul>
            </div> 
        </div>
        <hr/>
        <h1>Below this portion is the code from List.vue . See the code.</h1>
        <app-list></app-list>
    </div>
</template>

<script>
// In above example we are piplining multiple filters together where is toUppercase is local filter and to-lowercase is global (check main.js)
import List from './List.vue'
import {fruitMixin} from './fruitMixin'
    export default {
        data(){
            return{
                text:'Hello There',
                // fruits:['Apple','Banana','Carrot','Dragon Fruit','Eggplant','Fanta','Guava','Hazulnut','Ice cream','Jackfruit','Kiwi'],
                // fruitSearch:''
            }
        },
        filters:{   // Local filter  --> Filter is always a function that takes value as input, modifies it and returns it
            toUppercase(value){   // -> In template we call the filter with pipe ( | )  symbol i.e. text | toUppercase
                return value.toUpperCase()
            }
        },
        // computed:{
        //     filterFruits(){
        //         return this.fruits.filter(fruit=>fruit.toLowerCase().includes(this.fruitSearch.toLowerCase()))
        //     }
        // },
        components:{
            appList:List
        },
        mixins:[fruitMixin]
        // (((((Note: If I eliminate the fruits, fruitSearch in data and them remove the computed to add mixins:[fruitMixis].
        // since the data is not shared between the components now. Change in one component doesnot affects the other)))))

    }
</script>

<style>

</style>
