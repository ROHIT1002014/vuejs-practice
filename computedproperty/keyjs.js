var myapp = new Vue({
el:"#my-app",
data:{
    firstname:"",
    lastname:"",
    number:"",
    science:0,
    math:0,
    english:0
},
methods:{
    runme : function(){

        console.log("this is first method");
return "hii rohit"+" and this is function call";
    }




},

    computed: {

        fullname: function(){
            return this.firstname+this.lastname;

        }  ,

        convertor: function(){
            return this.number*100;

    },
        totalmarks: function(){

        return parseInt(this.math)+parseInt(this.science)+parseInt(this.english);
        }

    }


})
