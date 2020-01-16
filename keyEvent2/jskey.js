var myapp = new Vue({
    el:"#my-app",
    data: {


    },

    methods: {

        keypressfunction: function(event){
            console.log(event.key);

        },

        keyupfunction: function(event){
            console.log(event.keyCode);

        },

        keydownfunction: function(event){
        console.log(event.code);

        }



    }



})
