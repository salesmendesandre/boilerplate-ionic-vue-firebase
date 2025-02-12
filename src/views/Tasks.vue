<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Gestión de Tareas</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <!-- 🔹 Formulario para agregar tareas -->
        <ion-item>
          <ion-input v-model="newTask" placeholder="Nueva tarea..." />
          <ion-button @click="addTask">Agregar</ion-button>
        </ion-item>
  
        <!-- 🔹 Lista de tareas -->
        <ion-list>
          <ion-item v-for="task in tasks" :key="task.id">
            <ion-label>{{ task.name }}</ion-label>
            <ion-button fill="clear" color="primary" @click="editTask(task)">✏️</ion-button>
            <ion-button fill="clear" color="danger" @click="deleteTask(task.id)">🗑️</ion-button>
          </ion-item>
        </ion-list>
  
        <!-- 🔹 Modal para editar tarea -->
        <ion-modal :is-open="isEditModalOpen" @didDismiss="isEditModalOpen = false">
          <ion-header>
            <ion-toolbar>
              <ion-title>Editar Tarea</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-input v-model="editedTask.name" />
            <ion-button expand="full" @click="updateTask">Actualizar</ion-button>
          </ion-content>
        </ion-modal>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonModal } from '@ionic/vue';
  import { db } from '../firebase';
  import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
  
  export default {
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonModal },
    setup() {
      const tasks = ref([]);
      const newTask = ref('');
      const isEditModalOpen = ref(false);
      const editedTask = ref({ id: '', name: '' });
  
      const tasksCollection = collection(db, 'tasks'); // 🔥 Referencia a la colección "tasks"
  
      // 🔹 Obtener tareas de Firestore
      const fetchTasks = async () => {
        const querySnapshot = await getDocs(tasksCollection);
        tasks.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      };
  
      // 🔹 Agregar tarea a Firestore
      const addTask = async () => {
        if (!newTask.value.trim()) return;
        await addDoc(tasksCollection, { name: newTask.value.trim() });
        newTask.value = '';
        fetchTasks(); // Recargar tareas
      };
  
      // 🔹 Eliminar tarea de Firestore
      const deleteTask = async (id) => {
        await deleteDoc(doc(db, 'tasks', id));
        fetchTasks(); // Recargar tareas
      };
  
      // 🔹 Editar tarea
      const editTask = (task) => {
        editedTask.value = { ...task };
        isEditModalOpen.value = true;
      };
  
      // 🔹 Actualizar tarea en Firestore
      const updateTask = async () => {
        await updateDoc(doc(db, 'tasks', editedTask.value.id), { name: editedTask.value.name });
        isEditModalOpen.value = false;
        fetchTasks(); // Recargar tareas
      };
  
      onMounted(fetchTasks); // Cargar tareas al montar
  
      return { tasks, newTask, addTask, deleteTask, editTask, updateTask, isEditModalOpen, editedTask };
    }
  };
  </script>
  