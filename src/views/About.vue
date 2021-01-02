<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$router.go(-1)">backbcakbcak</button>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
}
</script>
<style scoped>
.about{
  width: 750px;
  height: 100vh;
  background: red;
}
  button{
    width: 200px;
    height: 50px;
    font-size: 28px;
    margin: 30px auto;
    display: block;
    background: green;
    color: #ffffff;
  }

</style>
