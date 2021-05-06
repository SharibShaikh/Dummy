import * as firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyChKPf7MvVs-l82l8M8Vcxm3_CK7SYYciU",
  authDomain: "wireleibrary-5abe3.firebaseapp.com",
  projectId: "wireleibrary-5abe3",
  storageBucket: "wireleibrary-5abe3.appspot.com",
  messagingSenderId: "1018060209050",
  appId: "1:1018060209050:web:ed965c40b3d368ec465823"
};
// Initialize Firebase
//  if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
// }

export default firebase.firestore();
