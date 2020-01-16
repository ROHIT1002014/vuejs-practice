<template>
  <div >
 
 <h2>{{ employeeMsg }} </h2>
  <ul>
        <li v-for=" emp in ename"> {{ emp }} </li>


  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
       ename : ["rohit emp ", "shivam emp ","monika emp","spandan emp"],
     employeeMsg: "this is employee msg and this is define locally",

    }
  },

  methods: {

            
    }


  }
</script>

<style scoped>
h2{
color: red;
font-size:20px;


}

</style>
