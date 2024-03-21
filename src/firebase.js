import app from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCtEduXVt_IYiAdC_Z7sd9ZxVq_PRdz2Ds",
  authDomain: "scissor-adf00.firebaseapp.com",
  projectId: "scissor-adf00",
  storageBucket: "scissor-adf00.appspot.com",
  messagingSenderId: "409817449267",
  appId: "1:409817449267:web:f6b72c50fac01b29aff446",
  measurementId: "G-5KCKW5R2GP"
};







const firebase = app.initializeApp(firebaseConfig)
const firestore = app.firestore();
const auth = app.auth();

// if(process.env.NODE_ENV === "development"){
//   firestore.useEmulator("localhost", 8080);
//   auth.useEmulator("http://localhost:9099");
// }



export{firebase, firestore, auth, app};


