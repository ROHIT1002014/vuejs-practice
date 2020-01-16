/* Directives are instruction for VueJS to do things in a certain way. We have already seen directives such as v-if, v-show, v-else, v-for, v-bind , v-model, v-on, etc.

  Syntax: 
          Vue.directive('directive_name', { directive_function }); */

//for the custom directory we use sytax and in this we implement 3 method
/*Vue.directive('custom-directive', (

    bind: function(el, binding, vnode){


    },

    update: function(0{


    },
     
    unbind: funciton(){

    }
    


})*/

Vue.directive('custom-directive', {

    bind: function(el, binding, vnode){
        console.log(el); //dom element is pass 

        el.style.backgroundColor="blue"; //here style is used with dom element i.e. css
        el.style.fontSize="20px";
        el.style.color="pink";
        el.title="title is updated" //we can modify dom elemnt attribute like title,css etc
        
        
        console.log(binding);  //properties of directive

        console.log("Vlue is "+ binding.value);


    },

    update: function(object1, object2){


        console.log("Running");

        var data=JSON.parse(JSON.stringify(object2));
        console.log(data);

    },
     
    unbind: function(){

    }
    


})

var myapp=new Vue({

    el:"#my-app",
    data: {
    message:"this is custom directory",


    },

    methods:{
        updateValue: function(){

        console.log("update......");
            this.message="value has been updated now";

        }

    },

    computed: {


    }




})
