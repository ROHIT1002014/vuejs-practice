var myapp= new Vue({
el:"#my-app",

    data:{

        title:"Online web tutorial",

    },

    methods: {

    rkv: function(){

        return "hello i am from methods from first instance ";

    }

    },

    computed:{
        comput: function(){


            return "hii i am from computed ";


    }

    }


});

var myapp2= new Vue({

    el:"#my-app2",

    data:{

        author:"sanjay",
        title:myapp.title, 
    },

    methods:{
        rkv2: function(){
            return "hello i am from method from second instace"+ " " + myapp.rkv();
        

        }
       , 

    cometh: function(){

        return myapp.comput;
    }
    },


    computed:{

        comput2: function(){

            return myapp.comput;
        }
    
    },

})
