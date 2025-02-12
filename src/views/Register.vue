<template>
    <ion-page>
      <ion-content class="ion-padding">
        <h2>Registro</h2>
        <ion-input v-model="email" type="email" placeholder="Correo"></ion-input>
        <ion-input v-model="password" type="password" placeholder="Contraseña"></ion-input>
        <ion-button expand="full" @click="register">Crear Cuenta</ion-button>
        <p>
          ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link>
        </p>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: { IonPage, IonContent, IonInput, IonButton },
    setup() {
      const email = ref('');
      const password = ref('');
      const router = useRouter();
  
      const register = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          router.push('/app');
        } catch (error) {
          console.error('Error al registrarse:', error.message);
          alert(error.message);
        }
      };
  
      return { email, password, register };
    }
  };
  </script>
  