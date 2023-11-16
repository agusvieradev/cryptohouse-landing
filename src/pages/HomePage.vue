<template>
  <q-page>
    <div class="gt-sm q-pa-xl q-mt-xl row">
      <div class="q-mx-sm row justify-center">
        <div class="q-mx-md q-my-lg row">
          <div class="col-9">
            <div class="text-h1 text-white text-weight-bold">
              ¡Descubre el Futuro de las Finanzas!
            </div>
            <div class="text-h3 text-white q-my-xl">
              Conviértete en parte de la <b>revolución</b> de las criptomonedas.
            </div>
          </div>
          <img src="../assets/vectors/title-image.png" alt="" class="col" style="width: 35vw" />
        </div>
        <div class="q-mx-md q-my-xl row">
          <img src="../assets/vectors/architect-image.png" alt="" class="col-2 q-mr-lg" />
          <div class="col">
            <div class="text-h2 text-white text-weight-bold q-mb-md">
              Sé el Arquitecto de tu Riqueza
            </div>
            <div class="text-h4 text-white t-description">
              En <b>CryptoHouse</b> te ofrecemos una plataforma <b>segura</b> y
              <b>fácil</b> de usar para comprar, vender e intercambiar
              criptomonedas. Únete a miles de inversores que han elegido la vía
              rápida hacia el <b>futuro financiero</b>.
            </div>
          </div>
        </div>
        <div class="q-mx-md q-my-xl q-mb-lg">
          <div class="text-h2 text-white text-weight-bold q-my-sm">
            Descubre cómo las Criptomonedas pueden transformar tu Portafolio
          </div>
          <div class="text-h4 text-white t-description">
            Ya sea que estés explorando oportunidades de inversión o simplemente
            busques entender mejor el mundo de las criptomonedas, estamos aquí
            para ayudarte. Completa el formulario para contratar nuestros
            servicios o recibir información detallada sobre cómo empezar.
          </div>
        </div>

        <q-card class="my-card shadow-up-20 col q-ma-xl">
          <div class="row self-center">
            <img src="../assets/vectors/form-image.png" alt="" class="col q-pa-xl" />
            <div class="col q-pa-lg self-center">
              <q-card-section>
                <div class="text-h4 text-white text-weight-bold q-my-sm">
                  Deja tus datos para poder brindarte la mejor atención
                </div>
              </q-card-section>
              <q-card-section>
                <q-form @submit.prevent="handleFormSubmit()" class="text-white">
                  <q-input dark standout filled color="white" type="text" class="text-white q-my-md" v-model="name"
                    label="Escribe tu nombre" lazy-rules />

                  <q-input dark color="white" q-input filled type="email" class="text-white q-my-md" v-model="email"
                    label="Escribe tu email" lazy-rules />

                  <div>
                    <q-btn type="submit" size="lg" class="text-white text-weight-bold q-mt-xs button-send">Enviar</q-btn>
                  </div>
                </q-form>
              </q-card-section>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <div class="lt-md q-pa-md">
      <div class="text-h2 text-white text-weight-bold q-mb-lg">
        ¡Descubre el Futuro de las Finanzas!
      </div>
      <div class="text-h4 text-white q-mb-lg">
        Conviértete en parte de la <b>revolución</b> de las criptomonedas.
      </div>
      <img src="../assets/vectors/title-image.png" alt="" style="width: 90vw" class="q-mb-xl" />
      <div class="text-h4 text-white text-weight-bold q-mb-lg">
        Sé el Arquitecto de tu Riqueza
      </div>
      <div class="text-h5 text-white t-description q-mb-lg">
        En <b>CryptoHouse</b> te ofrecemos una plataforma <b>segura</b> y
        <b>fácil</b> de usar para comprar, vender e intercambiar criptomonedas.
        Únete a miles de inversores que han elegido la vía rápida hacia el
        <b>futuro financiero</b>.
      </div>
      <img src="../assets/vectors/architect-image.png" alt="" class="q-mb-xl" style="width: 90vw" />
      <div class="text-h4 text-white text-weight-bold q-mb-lg">
        Descubre cómo las Criptomonedas pueden transformar tu Portafolio
      </div>
      <div class="text-h5 text-white t-description q-mb-xl">
        Ya sea que estés explorando oportunidades de inversión o simplemente
        busques entender mejor el mundo de las criptomonedas, estamos aquí para
        ayudarte. Completa el formulario para contratar nuestros servicios o
        recibir información detallada sobre cómo empezar.
      </div>
      <q-card class="my-card shadow-up-5">
        <img src="../assets/vectors/form-image.png" alt="" class="col q-pa-md q-mt-sm" />

        <q-card-section>
          <div class="text-h4 text-white text-weight-bold q-my-sm">
            Deja tus datos para poder brindarte la mejor atención
          </div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="handleFormSubmit()" class="text-white">
            <q-input dark standout filled color="white" type="text" class="text-white q-my-md" v-model="name"
              label="Escribe tu nombre" lazy-rules />

            <q-input dark color="white" q-input filled type="email" class="text-white q-my-md" v-model="email"
              label="Escribe tu email" lazy-rules />

            <div>
              <q-btn type="submit" class="text-white text-weight-bold q-mt-xs button-send">Enviar</q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import { sendMail } from "../utils/sendMail.js";
const name = ref("");
const email = ref("");

const handleFormSubmit = async (name, email) => {
  if (
    email.value &&
    email.value.length > 0 &&
    name.value &&
    name.value.length > 0
  ) {
    await sendMail(name, email)
  }
};
</script>
<style>
.q-card {
  background-color: rgba(140, 140, 140, 0.242) !important;
  backdrop-filter: blur(4px);
}

.button-send {
  background-color: #2c3e50
}


.q-field {
  font-size: 18px;
}

div {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
