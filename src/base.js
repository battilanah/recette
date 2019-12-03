import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCreY-xupx97LT2Cj8y7K93cJ1QTdediYE",
  authDomain: "recettes-6d733.firebaseapp.com",
  databaseURL: "https://recettes-6d733.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
