import * as firebase from 'firebase';

const askForPermissionToReceiveNotifications = async () => {
  try {
    // Retrieve Firebase Messaging object.
    const messaging = firebase.messaging();
    // Add the public key generated from the console here.
    messaging.usePublicVapidKey('BIX_0bYLDlkfE4YO42cvmoMU7g5oluAJi1wsH7P5tgDAE3gkZbkbRYO2Kf002pOQcHIqnIzjHOE-qLNXOn72s3U');
    await messaging.requestPermission();

    // 先判斷cookies有沒有token，沒有再取token
    // eslint-disable-next-line no-useless-escape
    const token = document.cookie.replace(/(?:(?:^|.*;\\s*)augustusWsPush\s*\=\s*([^;]*).*$)|^.*$/, '$1') || null;

    // cookies不存在，跟使用者要求通知權限
    if (token === null) {
      const currentToken = await messaging.getToken();
      // token存至firebase
      const id = currentToken.split(':')[0];
      firebase.database().ref(`webUsers/${id}`).set({ token: currentToken });
      // token存至cookies
      document.cookie = `augustusWsPush=${token}`;
    } else {
      // cookies 已存在，從 cookies 取出後傳至 firebase
      const id = token.split(':')[0];
      firebase.database().ref(`webUsers/${id}`).set({ token });
    }

    // messaging.onMessage(payload => console.log('Message received. ', payload));

    // make user token to backend
    // const tokenData = new FormData();
    // tokenData.append('token', token);

    // const result = await wrapFetch('api/web/notification', {
    //  method: 'POST',
    //  body: tokenData,
    // });

    // const { data, status, message } = await result.json();
    // console.log(`${message} to send ${data} to backstage, status: ${status}`);

    return token;
  } catch (err) {
    throw new Error('使用者未允許通知', err);
  }
};

export { askForPermissionToReceiveNotifications, firebase };
