<template>
  <div id="app">
  
  <footer>

      <p>   {{ msg }} </p>
    </footer>
         </div> 
</template>

<script>

export default {

data () {
    return {
       msg: " @copyright @online vuejs project",
}

}

}


</script>
<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>
