import React from "react";
import * as firebase from "firebase";

import Navbar from "./Navbar";
import Main from "./Main";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0KbYrBNUB7xIHUmPJMxueovwQNFThGqQ",
  authDomain: "art-collection-react.firebaseapp.com",
  databaseURL: "https://art-collection-react.firebaseio.com",
  projectId: "art-collection-react",
  storageBucket: "art-collection-react.appspot.com",
  messagingSenderId: "74301360801"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
