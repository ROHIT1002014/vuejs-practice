var myapp= new Vue({
    el: "#my-app",
    data:{
    counter:0

    },
    methods:{ 
    increment: function(){
        this.counter++;
    },
    decrement: function(){
        this.counter--;

    },
    say: function(message){
        alert(message);
    }
    }
})
