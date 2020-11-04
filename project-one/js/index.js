new Vue({
    el:".root",
    data:{
        name:"Enter a name and hit the button",
        inpName:""
    },
    methods:{
        changeName:function(){
            this.name=this.inpName
        },
        setName:function(event){
            this.inpName=event.target.value
        }
    }
})