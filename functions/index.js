const functions = require('firebase-functions');
// admin 是 讓你有權限去 firebase database的套件
const admin = require('firebase-admin');
// Allow cross origin access
const cors = require('cors')({ origin: true });
const webpush = require('web-push');

const serviceAccount = require('./serviceAccountKey');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pwa-native.firebaseio.com',
});

exports.storePostData = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    admin
      .database()
      .ref('posts')
      .push({
        id: request.body.id,
        title: request.body.title,
        location: request.body.location,
        image: request.body.image,
      })
      .then(() => {
        webpush.setVapidDetails(
          'mailto:business@academind.com',
          'BFUtihh8yo5r4f6Zh1AxN1SbSyb3yAKBrwIx060x5TjPrrg1Pd62xNbS1j7KSA0pcO9c9DpDVNW9IZyDlWdM88Y',
          'L9Mxsj2XASqsoxqyBtVIC3JfqQ-1JISPbQXLlVQQ6tc',
        );
        return admin
          .database()
          .ref('subscriptions')
          .once('value');
      })
      .then((subscriptions) => {
        subscriptions.forEach((sub) => {
          const pushConfig = {
            endpoint: sub.val().endpoint,
            keys: {
              auth: sub.val().keys.auth,
              p256dh: sub.val().keys.p256dh,
            },
          };
          // eslint-disable-next-line promise/no-nesting
          webpush
            .sendNotification(
              pushConfig,
              JSON.stringify({
                title: 'New Post',
                content: 'New Post added!',
                // 新增
                openUrl: '/help',
              }),
            )
            .catch((err) => {
              console.log(err);
            });
        });
        return response.status(201).json({ message: 'Data stored', id: request.body.id });
      })
      .catch((err) => {
        response.status(500).json({ error: err });
      });
  });
});
