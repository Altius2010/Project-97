//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBXXe530DKWbO0lIj8RJn-OVI3Pce2-4BQ",
      authDomain: "kwitter-45a7c.firebaseapp.com",
      databaseURL: "https://kwitter-45a7c.firebaseio.com",
      projectId: "kwitter-45a7c",
      storageBucket: "kwitter-45a7c.appspot.com",
      messagingSenderId: "423868905204",
      appId: "1:423868905204:web:c65a0f3d23633988ac50a1",
      measurementId: "G-1ZXMCC66C9"
};
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_name = childKey;
                  //Start code
                  console.log("Room name= " + Room_name);
                  row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' >#" + Room_name + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}