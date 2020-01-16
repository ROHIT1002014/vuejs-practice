var app= new Vue({
    el:"#my-app",
    data:{
        x : 0,
        y : 0
    },

    methods: {
    
        movefunction: function(event){
        //  console.log(event);
       this.x=event.offsetX;
        this.y=event.offsetY;
        },
        
        overfunction: function(event){
            
            alert("this is message due to mouseover");

        },

        outfunction: function(event){
            alert("this is due to mouse out ");
                
         }
    }

});
