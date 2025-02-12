<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding fullscreen">
      <h2>Bienvenido a la App</h2>
      <p>Selecciona una opción del menú.</p>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
};
</script>

<style scoped>
.fullscreen {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
