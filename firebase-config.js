// 1. Importamos las herramientas de la nube
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// 3. Inicializamos la app (ESTA ES LA PARTE QUE TE FALTABA O FALLABA)
const app = initializeApp(firebaseConfig);

// Definimos las variables antes de exportarlas
const auth = getAuth(app);      // <--- Aquí nace 'auth'
const db = getFirestore(app);   // <--- Aquí nace 'db'

// 4. Exportamos para que registro.html las pueda usar
export { auth, db };