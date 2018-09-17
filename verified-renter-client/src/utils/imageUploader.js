import firebase from "firebase";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDgO94Gd5r5fTt7LgNoPw8Fjo1tb9ABu3w",
  authDomain: "verified-renter.firebaseapp.com",
  databaseURL: "https://verified-renter.firebaseio.com",
  projectId: "verified-renter",
  storageBucket: "verified-renter.appspot.com",
  messagingSenderId: "56052019613"
};

const app = firebase.initializeApp(config);

const storage = app.storage();

export default storage;
