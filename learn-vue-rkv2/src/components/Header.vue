<template>
  <div >

<header>
<h2>{{ headerMessage }} </h2>
<p> {{ msgUrl }} </p>
 </header>
  
  
  
  
  
  </div>
</template>



<script>

export default {

data () {
    return {
        headerMessage:"welcome rohit this is online vuejs practice work ",
        msgUrl:"https://vuejs.org/v2/guide/components-registration.html#Local-Registration-in-a-Module-System",
}

}

}


</script>
<style scoped>

header{
background:yellow;
color:green;
padding: 3px;
text-align: center;
}
</style>
