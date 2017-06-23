const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyCH706pmFXROJHu6oiRcvc2e17E5ZPXYWg',
  authDomain: 'fir-bones-sagas.firebaseapp.com',
  databaseURL: 'https://fir-bones-sagas.firebaseio.com',
  projectId: 'fir-bones-sagas',
  storageBucket: 'fir-bones-sagas.appspot.com',
  messagingSenderId: '389342554669'
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
