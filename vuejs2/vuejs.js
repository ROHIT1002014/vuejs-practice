var myapp = new Vue({
el:"#my-app",
data:{
  name:"online tutor",
  playlist: "vueJs",
    ulink: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
    name1: "youtube lectures",
    isActive: true,
    imageLink:"/home/rohitkumarverma/Downloads/download.jpeg",
    email:"wohitasdf96@gmail.com",
    htmlcontent:"<p>hellow rohit this is contet binding rohit kumar verma</p>",
},
    methods: {
        run: function(message){
            return "hello" + message+' ' +this.name;

    },
        greet: function(){
            return this.playlist+' ' + this.name;
        }

    }
});
