<template>
  <ion-page>
    <!-- Menú lateral -->
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item @click="navigateTo('/app')">
            <ion-icon :icon="homeOutline" slot="start" />
            <ion-label>Inicio</ion-label>
          </ion-item>
          <ion-item @click="navigateTo('/app/profile')">
            <ion-icon :icon="personOutline" slot="start" />
            <ion-label>Perfil</ion-label>
          </ion-item>
          <ion-item button @click="logout">
            <ion-icon :icon="logOutOutline" slot="start" />
            <ion-label>Cerrar Sesión</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Contenido principal (main-content) -->
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
          <ion-title>Mi Aplicación</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="main-content" id="main-content">
      <router-view />
    </div>
    </ion-page>
  </ion-page>
</template>

<script>
import { IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, menuController, IonMenuButton, IonButtons } from '@ionic/vue';
import { logOutOutline, homeOutline, personOutline } from 'ionicons/icons';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  components: { IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon,IonMenuButton,IonButtons },
  setup() {
    const router = useRouter();

    const navigateTo = async (path) => {
      await menuController.close(); // 🔹 Cierra el menú antes de navegar
      router.push(path);
    };

    const logout = async () => {
      await signOut(auth);
      await menuController.close(); // 🔹 También cerramos el menú al cerrar sesión
      router.push('/login');
    };

    return { logout, navigateTo, logOutOutline, homeOutline, personOutline };
  }
};
</script>

<style scoped>
ion-menu {
  --width: 250px;
}

ion-toolbar {
  --min-height: 70px; 
}


ion-title {
  font-size: 1.4rem; 
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>
