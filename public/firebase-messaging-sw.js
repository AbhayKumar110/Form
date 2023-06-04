import { firebaseApp } from "../src/firebase";

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"); 
importScripts( "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js" ); 

const firebaseConfig = {
    apiKey: "AIzaSyBrjdcAj6PkB6JqtmCLecqlsgyiMcKWDLI",
    authDomain: "cryptoptk-fc00a.firebaseapp.com",
    projectId: "cryptoptk-fc00a",
    storageBucket: "cryptoptk-fc00a.appspot.com",
    messagingSenderId: "292620575310",
    appId: "1:292620575310:web:24948cb88269072dc6591f"
};
 firebase.initializeApp(firebaseConfig);
 const messaging = firebase.messaging(); 
 messaging.onBackgroundMessage((payload) => {
     console.log( "[firebase-messaging-sw.js] Received background message ", payload );
  const notificationTitle = payload.notification.title;
  const notificationOptions = { 
    body: payload.notification.body, 
    icon: payload.notification.image, 
}; 
    self.registration.showNotification(notificationTitle, notificationOptions);
 });





