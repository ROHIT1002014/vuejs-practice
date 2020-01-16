var myapp=new Vue({
    el:"#my-app",

    data: {
        fname:"",
        lname:"",
        nvalue:"mohit",

    },

    methods:{



    },

    computed: {

        fulname:{

            get: function(){  //getter function for fullname 

        return this.fname+this.lname ;
    
        },
    set: function(){  //setter fuction for fullname

                console.log("set function is running");
                this.nvalue="value is changed ";
        }


    }
    }
})


