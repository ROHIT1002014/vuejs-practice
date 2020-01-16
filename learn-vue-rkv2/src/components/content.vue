<template>
    <div> 
        <ul>
            <li v-for="rohit  in rohits" v-on:click="rohit.show = !rohit.show">
                <h2>{{ rohit.name }}</h2>
                <h3 v-show="rohit.show">{{ rohit.speciality }}</h3>
            </li>
        </ul> 

       <h2>{{ rkv }}</h2>
<button  v-on:click="deleteContent">click Me for delete </button>
<button  v-on:click="changeSpeciality">click Me to change speciality </button>
    </div>
</template>
<script>
export default {
   
       props:{
       
       rohits:{
        type:Array,
       },

       rkv:{
           type: String,

       },
       
       },
   
   data(){
       return{
        
        
        }
    },

    methods:{

deleteContent: function(){
        this.rohits.pop();
        },

    

   changeSpeciality: function(){

        this.$emit('chngSpeciality','this is updated component');
    },
   } 
}
</script>
<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
