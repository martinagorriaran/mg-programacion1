//importamos
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCekYjnE1-MoRFffKFUF4tgjNuiOJSOGaM",
    authDomain: "clase-240921.firebaseapp.com",
    projectId: "clase-240921",
    storageBucket: "clase-240921.appspot.com",
    messagingSenderId: "878078698804",
    appId: "1:878078698804:web:9d92a9074a8e6afaf4b161",
    measurementId: "G-ELE7HZPF4E"
};

//esto incia la conexion con firebase
const app= initializeApp(firebaseConfig)

//iniciamos conexion con el servicio de firebase
const db = getFirestore()

//obtenemos acceso al servicio de storage
const storage = getStorage(app)

const auth = getAuth()

export{db,storage,auth};