export const fruitMixin={
    data(){
        return{
            fruits:['Apple','Banana','Carrot','Dragon Fruit','Eggplant','Fanta','Guava','Hazulnut','Ice cream','Jackfruit','Kiwi'],
            fruitSearch:''
        }
    },
    computed:{
        filterFruits(){
            return this.fruits.filter(fruit=>fruit.toLowerCase().includes(this.fruitSearch.toLowerCase()))
        }
    },
    created(){
        console.log('Created')
    }
}