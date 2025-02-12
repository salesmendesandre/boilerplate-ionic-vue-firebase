# 🚀 Ionic Vue + Firebase + Firestore CRUD

Este es un proyecto basado en **Ionic Vue** con autenticación mediante **Firebase** y un CRUD de **Tareas** usando **Firestore**.

## 📌 Características
- 🔥 **Firebase Authentication** (Login, Registro, Recuperación de Contraseña)
- 🔐 **Rutas Protegidas** con Vue Router
- 📌 **Persistencia de Sesión** con Firebase
- 🏠 **Menú Lateral Dinámico**
- 📝 **CRUD de Tareas con Firestore** (Crear, Leer, Editar, Eliminar)
- 🎨 **Interfaz optimizada con Ionic Components**

## 🚀 Instalación
### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/salesmendesandre/boilerplate-ionic-vue-firebase.git
cd boilerplate-ionic-vue-firebase
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar Firebase
Crea un archivo **`.env`** en la raíz del proyecto y añade tu configuración de Firebase:
```env
VITE_FIREBASE_API_KEY=TU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=TU_APP_ID
```

### 4️⃣ Ejecutar el proyecto en desarrollo
```sh
ionic serve
```

## 📁 Estructura del Proyecto
```
📂 src/
 ├── 📂 components/         # Componentes reutilizables
 ├── 📂 views/              # Vistas principales (Login, Home, Tasks, Profile)
 ├── 📂 router/             # Configuración de Vue Router
 ├── 📂 firebase.js         # Configuración de Firebase
 ├── 📂 store/              # Gestión de estado (Opcional)
 ├── 📂 assets/             # Imágenes y recursos
```

## 🔥 Funcionalidades del CRUD de Tareas
- **➕ Agregar Tarea**: Escribe una nueva tarea y guárdala en Firestore.
- **👀 Ver Tareas**: Lista de tareas guardadas en tiempo real desde Firestore.
- **✏️ Editar Tarea**: Modifica una tarea existente.
- **🗑️ Eliminar Tarea**: Borra una tarea permanentemente.

## 🛠️ Tecnologías Utilizadas
- **Ionic Vue 6** - Framework UI
- **Vue 3** - Framework JS
- **Firebase Authentication** - Login/Registro
- **Firestore** - Base de datos en la nube
- **Vue Router** - Navegación



## 📄 Licencia
Este proyecto está bajo la licencia **MIT**.

---
✨ **Desarrollado con ❤️ y código por André Sales Mendes ✨
