<template lang="">
    <div class="container mt-5">
        <div class="section d-flex pt-5 justify-content-between">
            <h3 class="">all Products</h3>
            <router-link class="btn bg-info my-2" to="/addproduct">Add product</router-link>
        </div>
        <table class="table">
  <thead class="thead-dark">
    <tr >
      <th scope="col">#</th>
      <th scope="col">product Name</th>
      <th scope="col">price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in displayedItems">
      <th scope="row"></th>
      <td>{{product.title}}</td>
      <td>{{product.price}}</td>
<td>
  
    <button class="btn bg-info mx-2">edit</button>
    <button class="btn bg-danger mx-2">delete</button>

</td>

    </tr>
   
  </tbody>
</table>

<nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="previousPage">Previous</a>
       
        </li>
        <li class="page-item " v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: currentPage === pageNumber }">
          <a class="page-link" href="#" @click="goToPage(pageNumber)">{{ pageNumber }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click="nextPage">Next</a>
        </li>
      </ul>
    </nav>
  
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data:()=>({
        items: [],          // Array to store the table data
      itemsPerPage: 5,    // Number of items to display per page
      currentPage: 1,     // Current page number
      totalItems: 0,      // Total number of items from the API
      products:[]
  
  }),

  created(){
        this.getProducts();
    },
    
 
    computed:{
        totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
   
  }, 
    methods:{
        previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

     getProducts(){
        axios.get("http://localhost:3000/products")
        .then((response) => (
            this.products = response.data ,
            this.totalItems = response.data.length
            
            ))
            .catch(error => {
          console.error(error);
        });
        ;
        
     }    
    }
}
</script>
<style lang="">
    
</style>