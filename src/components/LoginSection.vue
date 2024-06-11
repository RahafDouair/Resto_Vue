<template>
    <div class="container row justify-content-center mt-5 align-item-center">
       <h1 class="text-center">Login With<i class="fa fa-utensils  me-2 color-custom"></i> Restoran</h1> 
       
 
       <form class="myform" @submit.prevent="submit">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" v-model="username" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
  </div>

  <button type="submit" class="btn  text-white bg-warning">Submit</button>
</form>
    </div>
</template>
<script>
import user from '@/store/user.js'
import { mapActions } from 'pinia';

export default {
    

    data: () => ({
    username: 'kminchelle',
    password: '0lelplR',
  }),
  methods: {
    ...mapActions(user, ['login']),
    submit() {
      this.login(this.username, this.password);
      if(this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
    }else{
        this.$router.push( {name: 'home'})
    }
    }
  }
//     data:()=>({
//    email:'',
//    password:""
        

    
//     }),
//     methods:{
//         siginIn(){
//             if(this.password==='' || this.email===" ")
//             console.log('msg login')
//         else
//         console.log(`email:${this.email} password${this.password}`);   

//         }
//     }
}
</script>
<style>
    /* .myform{
        width: 50%;
    margin-top: 100px;

    } */
</style>