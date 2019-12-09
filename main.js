var logout = document.getElementById("logout")


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

logout.addEventListener('click', data => { 
    firebase.auth().signOut()
    window.open("index.html","_self")
})