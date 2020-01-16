var myapp= new Vue({

    el:"#my-app",
    data: {
        students:["rohit","shivam","monika","shubham","spandan", "yashi"],
        


        parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],

    
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },
    
  teachers:[
           { name:"rohit",subject:"math",loction:{street:"street1", city:"noida"}},
           { name:"rohi1",subject:"mat2",loction:{street:"street2", city:"noid1"}},
           { name:"rohi2",subject:"mat3",loction:{street:"street3", city:"noid2"}},
           { name:"rohi3",subject:"mat5",loction:{street:"street4", city:"noid3"}},
           { name:"rohi4",subject:"mat4",loction:{street:"street5", city:"noid4"}},
           { name:"rohi5",subject:"mat6",loction:{street:"street6", city:"noid5"}},
           { name:"rohi6",subject:"mat6",loction:{street:"street7", city:"noid6"}},
           { name:"rohi7",subject:"mat7",loction:{street:"street8", city:"noid7"}},
        ],
    
    },
        methods:{




        },

    computed: {

    }



})
