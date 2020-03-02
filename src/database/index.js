import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBfC36_zYgXeVJqUO5owmFJP9Q51c-flTU",
  authDomain: "agent-e436e.firebaseapp.com",
  databaseURL: "https://agent-e436e.firebaseio.com",
  projectId: "agent-e436e",
  appId: "1:277209267641:web:7af19109616cc1b74e0a68"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db   = firebaseApp.firestore();
export const auth = firebaseApp.auth();
