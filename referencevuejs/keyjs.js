var myapp=new Vue({
    el:"#my-app",
    data:{



    },

    methods:{
    btnsubmit: function(){

   // alert("you clicked");
     
        console.log(this.$refs);
        console.log("name is "+this.$refs.txtname.value);
        console.log("value is "+this.$refs.txtmail.value);

    }



    },

    computed: {




    }
})
