Vue.component("rkv",{
/* we cann't define another tag in parent tage but due to div-tage we can define another tag and all tage must be in one line otherwise it will give error */
    template:"<div><h2> hellow friends this is component and name of aurthor is : {{ author }} and title is {{ title }} </h2> <br><br><h2>thisis from method {{ rkv() }} and this is from computed method {{ rkv1 }}</h2><br><br> <button type='button' @click='fireme'>click Me to change author and titile</button></div>",
        
        //in component data is written as function and return also
        data: function(){

            return{
            author : "rohit",
                title: " online vuejs tutorial",
        }
        },


    methods: {
        rkv: function(){
            return "this is from method ";
        },

        fireme: function(){
        this.author="sanjeev";
            this.title="online java script tutorial";
        
        },
    } ,

    computed: {
        rkv1: function(){
        return "this is from computed ";
        }


    }
});



var myapp= new Vue({
    el:"#my-app",
    data:{


    },

    methods: {



    },

    computed:{



    }
});
var myapp2= new Vue({
    el:"#my-app2",
    data:{


    },

    methods: {



    },

    computed:{



    }
});
