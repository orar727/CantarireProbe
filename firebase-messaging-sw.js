importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD15S33f08uCwywQBHuFp0Y1GCMEMpnBwY",
  authDomain: "cantarire-probe-lab.firebaseapp.com",
  projectId: "cantarire-probe-lab",
  storageBucket: "cantarire-probe-lab.firebasestorage.app",
  messagingSenderId: "394365424669",
  appId: "1:394365424669:web:c88aa24c37a81f6dbaa2f4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'Notificare Expirare Probe';
  const notificationOptions = {
    body: payload.notification?.body || 'Unul sau mai multe alimente intră în lucru azi!',
    icon: 'icon.png',
    badge: 'icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
