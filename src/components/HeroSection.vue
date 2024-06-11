<template>
<section
class="hero-bg  d-flex justify-content-center align-item-center bg-dark"

>
<div class="">
    <div class="container my-5 py-5">
        <div class="row align-items-center g-5">
            <div class="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                <h1 class="display-3 text-white " >Enjoy Our<br>Delicious Meal</h1>
                <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <button class="btn text-white bg-warning" >Book TABLE</button>

            </div>
            <div class="col-lg-6 text-center text-lg-start">
                <div class=" text-center text-lg-end overflow-hidden second-section" >
         <img class="img-fluid" src="../assets/hero.png" width="500px" >
         </div>

            </div>
        </div>
    </div>
    <!-- <div class="first-section">
        <div class="title"   data-aos="fade-right">
            <h1 class="title-hero text-white d-flex justify-content-center align-item-center">Enjoy Our
    Delicious Meal</h1>
    <p class="section-paragh text-white d-flex justify-content-center align-item-center">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
    <h3 class="btn text-white bg-warning" >Book TABLE</h3>

        </div>
    </div>
    
    <div class="second-section">
     

        <div class=" text-center text-lg-end overflow-hidden" >
         <img class="img-fluid" src="../assets/hero.png" width="500px" >
         </div>
    </div> -->
</div>

</section>



</template>

<style>
 .hero-bg{
    background-image: url('../assets/bg-hero.jpg');
    /* height: 100vh; */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

 }
 .bg-dark {
    background-color: #0F172B !important;
    background: linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(../img/bg-hero.jpg);

}

 .title-hero{
    z-index: 1;
     /* margin-top: 100px; */
 }

 .second-section img {
    animation: imgRotate 50s linear infinite;
}

@keyframes imgRotate { 
    100% { 
        transform: rotate(360deg); 
    } 
}
 .first-section{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
font-size: calc(1.525rem + 3.3vw);
    font-weight: 800;
    line-height: 1.2;
    margin-right: 50px;
}
.section-paragh{
    font-size: 20px;
    font-weight: 300;
}
</style>