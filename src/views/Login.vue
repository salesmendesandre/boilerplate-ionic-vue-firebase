<template>
    <ion-page>
      <ion-content class="ion-padding">
        <h2>Iniciar Sesión</h2>
        <ion-input v-model="email" type="email" placeholder="Correo"></ion-input>
        <ion-input v-model="password" type="password" placeholder="Contraseña"></ion-input>
        <ion-button expand="full" @click="login">Iniciar Sesión</ion-button>
        <p>
          ¿No tienes cuenta? <router-link to="/register">Regístrate</router-link>
        </p>
        <p>
          <router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link>
        </p>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: { IonPage, IonContent, IonInput, IonButton },
    setup() {
      const email = ref('');
      const password = ref('');
      const router = useRouter();
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push('/app');
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message);
          alert(error.message);
        }
      };
  
      return { email, password, login };
    }
  };
  </script>
  