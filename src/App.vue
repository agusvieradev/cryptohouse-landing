<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>


<style>
@font-face {
    font-family: "Poppins";
    src: url("../assets/font/Poppins-Light.ttf") format("truetype");
  }
body{
  font-family: "Poppins";
}  

</style>