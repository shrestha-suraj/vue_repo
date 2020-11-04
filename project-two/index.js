new Vue({
    el:"#root",
    data:{
        x:0,
        y:0,
        counter:0
    },
    methods:{
        changeCoordinates:function(event){
            this.x=event.clientX;
            this.y=event.clientY;
        },
        increaseCounter:function(increaseBy,event){
            //Here event is not needed but we need to know that if we need event its $event to be passed in html
            this.counter+=increaseBy
        }
    }
})