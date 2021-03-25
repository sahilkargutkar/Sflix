import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';




const config ={
    apiKey: "AIzaSyBhAdKQB0_4E7mXnMhEJwNexV3yLk7r4vo",
    authDomain: "sflix-c9aab.firebaseapp.com",
    projectId: "sflix-c9aab",
    storageBucket: "sflix-c9aab.appspot.com",
    messagingSenderId: "211783472262",
    appId: "1:211783472262:web:43e94d8f609acc0f74ad07"
}

const firebase=Firebase.initializeApp(config);



export {firebase};
