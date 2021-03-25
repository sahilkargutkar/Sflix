import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';




const config ={

    apiKey: apiKey,
    authDomain: authDomain ,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,


 }

const firebase=Firebase.initializeApp(config);



export {firebase};
