
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2zhA1SeJvR3NwrZarM3mZAbLYQfG-B3s",
    authDomain: "kwitter-8e834.firebaseapp.com",
    projectId: "kwitter-8e834",
    storageBucket: "kwitter-8e834.appspot.com",
    messagingSenderId: "46291081692",
    appId: "1:46291081692:web:738162a5bdfc81663bd719"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

     function addUser()
     {
         user_name = document.getElementById("user_name").value;
         firebaseConfig.database().ref("/").child(user_name).update({
             purpose : "adding user"
         });
     }
     