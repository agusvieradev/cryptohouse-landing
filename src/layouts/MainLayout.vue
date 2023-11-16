<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="gt-sm  text-white" height-hint="100">
      <q-toolbar>
        <q-toolbar-title class="text-h4 q-mt-sm q-ml-md ">
          {{ clientName }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-header reveal class="lt-md text-white" height-hint="100">
      <q-toolbar>
        <q-toolbar-title class="text-h5">
          {{ clientName }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <Footer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Footer from "../components/Footer.vue";
const clientName = "CryptoHouse"
</script>
<style>
.my-menu-link {
  color: white;
  background: #2a0f68;
}

.q-tab__label {
  font-size: 19px;
  font-weight: 600;
}

.q-layout__section--marginal {
  background-color: rgba(255, 255, 255, 0);
}


body {
  background: linear-gradient(to bottom, #1a1a1a, #2c3e50, #4a69bd);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}</style>

