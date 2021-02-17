// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let firebaseConfig = {
    apiKey: "AIzaSyAinAkeiHr60ko08z26GeAwcbEfVVW4YRw",
    authDomain: "afinsider-ea483.firebaseapp.com",
    projectId: "afinsider-ea483",
    storageBucket: "afinsider-ea483.appspot.com",
    messagingSenderId: "985417759395",
    appId: "1:985417759395:web:0606bc7d866ac315ce5d16",
    measurementId: "G-C1ZGLEG9HP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//adding team
function goNext()
{
let passcode = document.getElementById('pass').value;
 let nextMove = document.getElementById('nextMove').value;

 if(passcode != '')
 {
   if(passcode == pass)
   location.replace(nextMove +".html");
   else
   alert("Wrong passcode!!!");
 }
 else{
   alert("You must enter a passcode!!!");
 }
 }

    function emptyLeaderboard() {
      if(prompt("Enter lobby code to empty: ") == lobby) {
        db.collection("leaderboards").doc(lobby).update({
    result: [],
    oldResult: [],
    teams: []
  }).then(function(){
    alert("Leaderboard emptied!!");
    location.reload();
  }).catch(function(error){
    alert("Error emptying leaderboard" +error);
  })
      }
      else
      alert("Wrong lobby code");
}


//adding team
function addTeam()
{
  let db = firebase.firestore();
//Get newTeam Details
let tName = document.getElementById('tName').value;
  let tTag = document.getElementById('tTag').value;
  let tLogo = document.getElementById('tLogo').value;
  let tLobby = document.getElementById('tLobby').value;

  if(tName != '' && tTag != '')
  {
    let tTagName = tTag.concat(' | ' + tName)
    if(tLogo == '')
    tLogo = 'https://firebasestorage.googleapis.com/v0/b/demotest-73a88.appspot.com/o/assetss%2Fscrypted_icon.png?alt=media&token=06f54655-5b45-46ad-8d71-4ff5eb2b6f44';

    db.collection("teams").doc(tName).set({
    name: tName,
    tag: tTag,
    logo: tLogo,
    lobby: tLobby,
    tagName: tTagName
})
.then(function() {
  location.reload();
})
.catch(function(error) {
    alert("Error adding team: ", error);
});
  }
  else{
    alert("You Must Fill Team Name and Tag");
 
  }

  }


