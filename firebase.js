import * as firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD_Y1CNRFu1zXQnm6TN7it4MMPjdGa2tgE",
    authDomain: "wspot-d238a.firebaseapp.com",
    databaseURL: "https://wspot-d238a.firebaseio.com",
    projectId: "wspot-d238a",
    storageBucket: "wspot-d238a.appspot.com",
    messagingSenderId: "778105760530",
    appId: "1:778105760530:web:886686bc3816270e9321cb",
    measurementId: "G-M6PGYWE4QE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db