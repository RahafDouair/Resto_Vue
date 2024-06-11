<template>
    <div class="container ">

        <h5 class=" font-secondary title-menu text-center">food menu</h5>

    <h1 class="text-center">Most Popular Items</h1>    

   <div class="container d-flex flex-wrap pt-5">
       <div class="row " v-for="item in meals">
        <div class="col-md-6 " >
            <div class="card mx-3 mb-3 bg-image hover-zoom" style="width: 20rem;" data-aos="fade-up">
         <img class="card-img-top" :src="item.img" alt="Card image cap">
         <div class="card-body">
        <h5 class="card-text">
            {{item.name}}</h5>
            <p>{{ item.strCategory }}</p>
            <button class="btn bg-custom"> Add to cart</button>
         </div>
       </div>
        </div>
       </div>
   </div>
    

    <!-- <ul class="menu-list d-flex justify-content-evenly pt-4">
        <li class ="btn menu-item bg-custom  active"> breakfast</li>
        <li class ="btn menu-item"> lunch</li>
        <li class ="btn menu-item">Dinner</li>
    </ul> -->

 <!-- <div class="row">
    <div class="col-6">
        <div class="card mt-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn bg-custom">Go somewhere</a>
  </div>
</div>
<div class="card mt-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn bg-custom">Go somewhere</a>
  </div>
</div>
<div class="card mt-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn bg-custom">Go somewhere</a>
  </div>
</div>
    </div>
      <div class="col-6">
        <div class="card mt-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn bg-custom">Go somewhere</a>
  </div>
</div>
<div class="card mt-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn bg-custom">Go somewhere</a>
  </div>
</div>
<div class="card mt-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn bg-custom">Go somewhere</a>
  </div>
</div>
    </div>
 </div> -->
   
   </div>
</template>
<script>
    import axios from 'axios';
    // import { mapActions, mapState } from 'pinia'


 export default{
    data:()=>({
      
        meals:[]
    }),
    computed:{
      // ...mapState(user, ['isLoggedIn', 'user']),

    },
    created(){
        this.loadProducts();
    },
    methods:{
    loadProducts() {
      axios.get("http://localhost:3000/bestMeal")
        .then((response) => (this.meals = response.data));
    }
}
}

</script>
<style>
.menu-list{
    list-style: none;
}
.menu-item:hover{
background-color: #FEA116;
}
.bg-image{
  width: 18rem;
  height: 20px;
  overflow: hidden;
        margin: 0 auto;
}
.bg-image img{
 height: 250px;
  width: 100%;
            transition: 0.5s all ease-in-out;
            overflow: hidden;
}
  .bg-image img:hover{
    transform: scale(1.1);
   
  }
</style>