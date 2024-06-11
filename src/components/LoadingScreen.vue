<template>
<div class="myspinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>  </template>
  
  <script>
  export default {
    name: "Loading"
    ,
    data:()=>({

    })
  };
  </script>

<style>

/* #loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
} */
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
.color-custom{
  color:#FEA116

}
.bg-white{
  background-color: #ffffff !important;
}
</style>