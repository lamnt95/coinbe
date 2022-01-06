const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD21DoeQNpnFj4pDHQnDsFDt-hge0piY1g',
  authDomain: 'coin-244a6.firebaseapp.com',
  databaseURL: 'https://coin-244a6-default-rtdb.firebaseio.com',
  projectId: 'coin-244a6',
  storageBucket: 'coin-244a6.appspot.com',
  messagingSenderId: '788137180530',
  appId: '1:788137180530:web:86e9bb60831e6bb5a171eb',
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/posts', (req, res) => {
  console.log('posts213ád123');
});
