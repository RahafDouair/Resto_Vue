<template lang="">
    <div class="pt-5 mt-5 container">
        single page for product
   

       <div class="row">
           <div class="card col-6 w-50" >
             <div class="card-body">
         
                <div id="imageSlider" class="carousel slide" data-ride="carousel" data-interval="3000">
            <ol class="carousel-indicators">
                <!-- Generate carousel indicators dynamically -->
                <li v-for="(image, index) in product.images" :key="index" :data-target="'#imageSlider'" :data-slide-to="index" :class="{'active': index === 0}"></li>
            </ol>
            <div class="carousel-inner">
                <!-- Generate carousel slides dynamically -->
                <div v-for="(image, index) in product.images" :key="index" :class="{'carousel-item': true, 'active': index === 0}">
                    <img :src="image" class="img-slide" >
                </div>
            </div>
            <a class="carousel-control-prev" href="#imageSlider" role="button" data-slide="prev" @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#imageSlider" role="button" data-slide="next" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
             
             </div>
           </div>
           <div class="col-6">
            <h5 class="card-title">{{product.title}}</h5>
               <p class="card-text">{{product.description}}</p>
               <p> {{product.category}}</p>
               <p><small class="text-muted">Price: ${{product.price}}</small></p>
               <p>{{product.rating}}</p>
               <!-- <img class="card-img-top w-50 d-block" :src="product.thumbnail" alt="Card image cap"> -->

               <router-link to="/" class="btn btn-primary">back</router-link>
           </div>
       </div>
       <!-- <img :src="{{product.thumbnail}}" alt="">  -->
    </div>
</template>
<script>
import axios from 'axios';

export default {
    
    data:()=>({
      
      product:{}
  }),

    created(){
        this.getProducts();
    },
    methods:{
     getProducts(){
        axios.get(`http://localhost:3000/products/${this.$route.params.id}`)
        .then((response) => (this.product = response.data))
        ;
     },
                prevSlide() {
                    // Move to the previous slide
                    $('#imageSlider').carousel('prev');
                },
                nextSlide() {
                    // Move to the next slide
                    $('#imageSlider').carousel('next');
                }
            }  
    }

</script>
<style>
    .img-slide{
        width: 190px !important;
    height: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 167px;
    }
</style>