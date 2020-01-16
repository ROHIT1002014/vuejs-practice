<template>
<div >
  
  <h2> {{ msg }} </h2>
  <br><br>
  <h2> {{ shift("gooood morning") }}</h2>
  
  <br><br>
  <ul>
        <li v-for="name in name " > {{ name }} </li>

  </ul>
  
  
  </div>
</template>

<script>
export default {
  data () {
    return {
       name : ["rohit", "shivam","monika","spandan"],
      msg: 'this is globally define component',

    }
  },


  methods: {

    shift: function(msg){   
        return "hii" + " rohit " +msg;
            
    }


  }

}
</script>

<style scoped>
h2{
color: blue;
font-size:20px;
}
</style>
