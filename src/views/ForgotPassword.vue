<template>
    <ion-page>
      <ion-content class="ion-padding">
        <h2>Recuperar Contraseña</h2>
        <ion-input v-model="email" type="email" placeholder="Correo"></ion-input>
        <ion-button expand="full" @click="resetPassword">Enviar Enlace</ion-button>
        <p>
          <router-link to="/login">Volver al inicio de sesión</router-link>
        </p>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';
  import { sendPasswordResetEmail } from 'firebase/auth';
  import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
  
  export default {
    components: { IonPage, IonContent, IonInput, IonButton },
    setup() {
      const email = ref('');
  
      const resetPassword = async () => {
        try {
          await sendPasswordResetEmail(auth, email.value);
          alert('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
        } catch (error) {
          console.error('Error al recuperar contraseña:', error.message);
          alert(error.message);
        }
      };
  
      return { email, resetPassword };
    }
  };
  </script>
  