<template>
    <div>
        <h5 class=" font-secondary title-menu text-center">Testimonial</h5>

<h1 class="text-center">Our Clients Say</h1>    
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../assets/testimonial-4.jpg" class="d-block  img-test" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/testimonial-2.jpg" class="d-block  img-test" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/testimonial-1.jpg" class="d-block  img-test" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- <div class="row">
<div class="col-md-3"> -->
    <!-- <div class="card text-start">
<div class="card-header">
    <h4 class="card-title">''</h4>

</div>
        <div class="card-body">
        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nihil repellendus, aliquid quia ipsum soluta saepe ullam? Eos, excepturi tempora explicabo consequatur 
            fugiat facere. Vitae placeat eaque dicta est esse!</p>
      </div>
      <div class="card-footer">
        <div class="row">
            <div class="col-3">
                <img src="../assets/testimonial-1.jpg" class="w-75 rounded-circle" alt="">
            </div>
            <div class="col-4">
                <h4>test</h4>
                <p>porffision</p>
            </div>
        </div>
      </div>
    </div> -->
<!-- </div>
</div> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .img-test{
        width: 30px;
        border-radius: 50%;
    }
</style>