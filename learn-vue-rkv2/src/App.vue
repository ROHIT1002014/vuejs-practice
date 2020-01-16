<template>
  <div >
  <app-header> </app-header>
  
  
  <app-content v-bind:rohits="rohit" v-on:chngSpeciality="speciality($event)" v-bind:rkv="msg">  </app-content>
  
  <app-footer> </app-footer>

</div>
</template>



<script>
import header from './components/Header.vue'
import footer from './components/footer.vue'
import content from './components/content.vue'


export default {

components:{
'app-header':header,
'app-footer':footer,
'app-content':content,
},


data() {
    return {
      msg: 'this is parent component',
        rohit:[
        {name:'rohit' , speciality: 'vue component1', show:false },
        {name:'mohit' , speciality: 'vue component2', show:false },
        {name:'shohit' , speciality: 'vue component3', show:false },
        {name:'spandan' , speciality: 'vue component4', show:false },
        {name:'shivam' , speciality: 'vue component5', show:false },
        {name:'shobhit' , speciality: 'vue component6', show:false },
        {name:'sumit' , speciality: 'vue component7', show:false },
            
        {name:'rakesh' , speciality: 'vue component7', show:false },
            ],
}
},
methods: {
speciality: function(value){
this.msg=value;
}
},

}
</script>

