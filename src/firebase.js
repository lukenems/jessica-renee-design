import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBKDD9q7ZeJVWdNU4hqc2RymLoZVhcfxV0',
	authDomain: 'jessica-renee-design.firebaseapp.com',
	databaseURL: 'https://jessica-renee-design.firebaseio.com',
	projectId: 'jessica-renee-design',
	storageBucket: 'jessica-renee-design.appspot.com',
	messagingSenderId: '276874994544',
	appId: '1:276874994544:web:828e60b5af9cdb14f825b5',
	measurementId: 'G-Y6YWHXB6PR'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
