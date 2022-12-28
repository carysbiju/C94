firebaseConfig = {
  apiKey: "AIzaSyAfF3dnMy3s0ezcY1DCAPz5VM5yt7ZHdes",
  authDomain: "class-test-e11a3.firebaseapp.com",
  projectId: "class-test-e11a3",
  storageBucket: "class-test-e11a3.appspot.com",
  messagingSenderId: "449450885152",
  appId: "1:449450885152:web:640908da08918e00b2fc45",
  measurementId: "G-74QB2QC8W9"
};

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
