var myapp = new Vue({
    el: "#my-app",
    data: {
        checkedNames:[],
        checked:"",
        character:"",
        name:"rohit kumar ",
        Email:"rvlverma96@gmail.com",
        picked:"",
        selected:"",
        selected1:"",
    },

    methods: {
          keypressfunction: function(event){

            this.character=event.key;


          },



    }
    
})
