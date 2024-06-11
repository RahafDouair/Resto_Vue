

<template>
    <div class="section-serv  flex-wrap justify-content-center py-5">
        <h1 class="text-center py-4"> Services</h1>
      <div class="row container m-auto mb-3">
        <div class="col-lg-3 col-sm-6">
                        <div class="service-item rounded mt-3 " data-aos="fade-up">
                            <div class="p-4">
                                <i class="fa fa-3x fa-user-tie text-orange mb-4 icon"></i>
                                <h5>Master Chefs</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="service-item rounded mt-3" data-aos="fade-up">
                            <div class="p-4">
                                <i class="fa fa-3x fa-utensils text-orange mb-4 icon"></i>
                                <h5>Quality Food</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 " data-aos="fade-up">
                        <div class="service-item rounded mt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-cart-plus text-orange mb-4 icon"></i>
                                <h5>Online Order</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 " data-aos="fade-up">
                        <div class="service-item rounded mt-3">
                            <div class="p-4">
                                <i class="fa fa-3x fa-headset text-orange mb-4 icon"></i>
                                <h5>24/7 Service</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
        <!-- <ServiceCard v-for="item in 4"/> -->
      </div>
         

      
    
</div>
</template>
<script setup>
import ServiceCard from '../components/ServiceCard.vue';

</script>
<style>
.icon{
   color: #FEA116;
   /* background: #F4F4F4; */
}
.service-item :hover{
    cursor: pointer;
    color: #F4F4F4;
}
.section-serv{
    background-color: #F4F4F4;
}
.service-item{
    background-color: white;
}
.service-item:hover{
    background-color: #FEA116;
    color:#F4F4F4
}
</style>