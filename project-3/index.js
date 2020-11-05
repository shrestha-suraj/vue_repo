new Vue({
    el:'#root',
    data:{
        num1:0,
        num2:0
    },
    computed:{
        getNum1:function(){
            console.log("Log for num 1")
            return this.num1
        }
    },
    methods:{
        getNum2:function(){
            console.log("Log for num 2")
            return this.num2
        }
    }

})