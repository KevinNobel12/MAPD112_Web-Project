var email = document.getElementById("username")
var password = document.getElementById("password")
var login = document.getElementById("login")


const firebaseConfig = {
  apiKey: "AIzaSyBvSIJ6r4XxJbx3lmtdYM8tcjSNlAib_9E",
  authDomain: "mapd714-lesson11-ios.firebaseapp.com",
  databaseURL: "https://mapd714-lesson11-ios.firebaseio.com",
  projectId: "mapd714-lesson11-ios",
  storageBucket: "mapd714-lesson11-ios.appspot.com",
  messagingSenderId: "146873455104",
  appId: "1:146873455104:web:b6ec4f973ad48254903ee5"
};



firebase.initializeApp(firebaseConfig)

login.addEventListener('click', data => { 

  e = email.value
  p  = password.value

  firebase.auth().signInWithEmailAndPassword(e, p).catch(function(error) {
     alert(error.message)
     return false;
  })
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      window.open('main.html','_self');
  }
})

    
          
        