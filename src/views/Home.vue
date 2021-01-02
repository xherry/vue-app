<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="$router.push('about')">totototootot</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
  img{
    width: 350px;
    height: 300px;
    display: block;
    margin: 0 auto;
  }
  button{
    width: 200px;
    height: 70px;
    font-size: 28px;
    margin: 30px auto;
    display: block;
  }
</style>
