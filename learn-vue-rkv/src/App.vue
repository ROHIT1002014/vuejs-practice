<template>
  <div id="app">
  
  <h2> {{ msg }} </h2>
  <br><br>
  <h3> {{ shift("gooood morning") }}</h3>
  
  <br><br>
  <ul>
        <li  v-for="name in name " > {{ name }} </li>

  </ul>

    
      <rohitComponent>   </rohitComponent>
  
      <employee></employee>

  </div>

</template>


<script>

import employee from './employee.vue'
export default{
    components: {
        "employee":employee
    },

data () {

    return {
       name : ["rohit", "shivam","monika","spandan"],
      msg: 'Welcome to Your Vue.js App',

    }
  },

  methods: {

    shift: function(msg){   // we can also remove function directly write shift(msg)
        return "hii" + " rohit " +msg;
            
    }


  }

}
</script scoped>

<style>
h2{
color :green;
font-size:25px;

}

</style>
