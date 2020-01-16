var myapp = new Vue({

    el:"#my-app",
    data:{
        isActive:true,
        isActive2:false,
       num:1

    },

    methods:{
       changeColor: function(){
            this.isActive2=true;
       }


    },
    

    computed:{
    }


})
