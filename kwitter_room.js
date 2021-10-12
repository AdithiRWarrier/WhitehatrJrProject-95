
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCSLoLzp0GAl96j-4ANPqGeLb5e26C5AAI",
      authDomain: "chat-bot-website-kwitter-copy.firebaseapp.com",
      databaseURL: "https://chat-bot-website-kwitter-copy-default-rtdb.firebaseio.com",
      projectId: "chat-bot-website-kwitter-copy",
      storageBucket: "chat-bot-website-kwitter-copy.appspot.com",
      messagingSenderId: "209703070371",
      appId: "1:209703070371:web:2c7f005c111c4075c26d16"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function addRoom()
      {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
      }

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)' >#"+Room_names+"</div><h2>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
