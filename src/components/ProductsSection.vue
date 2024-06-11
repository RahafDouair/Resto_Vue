<template lang="">
    <div class="container mt-5 pt-5">
 <h1>from products page</h1>
 <div class="row">
  <div class="input-group mb-3">
  <input type="search" class="form-control" placeholder="Search" v-model="searchValue">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button">Search</button>
  </div>
</div>
    <div class="col-md-4" v-for="item in filteredProducts" :key="item.id">
        <div class="card mt-4 h-75"   style="width: 18rem;">
  <img :src="item.thumbnail" class="card-img-top h-50" alt="...">
  <div class="card-body">
    <h5 class="card-title">name: {{item.title}}</h5>
    <!-- <p class="card-text">{{item.description}}desc:Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">category:{{item.category}}</li>
    
  </ul>
  <div class="card-body">
    <router-link
    :to="{name: 'productssingle',params: {id: item.id},}"
    class="btn bg-info mx-2">View</router-link>
    <button  class="btn bg-warning"  >Add cart</button>
  </div>
</div>
    </div>
 </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    
    data:()=>({
      
      products:[],
      searchValue:""
  }),

    created(){
        this.getProducts();
    },
    
 
    computed:{

      filteredProducts(){
    //     if(this.searchValue){
    //       return this.products.filter((item)=>{
    //         return item.title.match(this.searchValue);
    //     }
    //   }
    // } 
    if (this.searchValue) {
        return this.products.filter(product => product.title.toLowerCase().includes(this.searchValue.toLowerCase()));
      } else {
        return this.products;
      }
    }
  }, 
    methods:{
     getProducts(){
        axios.get("http://localhost:3000/products")
        .then((response) => (this.products = response.data))
        ;
        
     }    
    }
}
</script>
<style>
    .h-75{
        height: 140px;
    }
</style>