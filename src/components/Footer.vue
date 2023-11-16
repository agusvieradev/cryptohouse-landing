<template>
  <q-footer reveal elevated>
    <q-toolbar class=" row items-center">
      <div class="q-pt-xs row items-center">
        <div class="foot-text">© All rights reserved</div>
      </div>
      <div class="absolute-right row items-center">
        <div class="q-ml-sm gt-xs row items-center">
          <q-icon name="phone" size="xs" color="white" class="q-pr-xs" />
          <div class="text-center foot-text text-white">+54 011 2222-4444</div>
        </div>
        <div class="q-ml-sm gt-xs row items-center">
          <q-icon name="mail" size="xs" color="white" class="q-pr-xs" />
          <div class="text-white foot-text">example@gmail.com</div>
        </div>
        <q-btn flat round dense size="18px">
          <img src="../assets/logo-images/linkedin.svg" alt="LinkedIn" />
        </q-btn>
        <q-btn flat round dense size="18px">
          <img src="../assets/logo-images/facebook.svg" alt="Facebook" />
        </q-btn>
        <q-btn flat round dense size="18px">
          <img src="../assets/logo-images/twitter.svg" alt="Twitter" />
        </q-btn>
        <q-btn flat round dense size="18px">
          <img src="../assets/logo-images/instagram.svg" alt="Instagram" />
        </q-btn>
      </div>
    </q-toolbar>
  </q-footer>
</template>
<style scoped>
.q-footer {
  background-color: rgba(99, 99, 99, 0.108) !important;
  backdrop-filter: blur(4px);
}

img {
  width: 25px;
}

.foot-text {
  font-size: 18px;
}
</style>
