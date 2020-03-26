import * as firebase from 'firebase';

const actions = {
  updateLoading({ commit }, status) {
    commit('LOADING', status);
  },
  toggleComfirm({ commit }, { type }) {
    return new Promise((resolve) => {
      commit('OPEN_DIALOG', { type });
      resolve();
    });
  },
  async pushNotification({ commit }, { reciever }) {
    console.log(reciever);
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'key=AAAAuVeWy8s:APA91bEXykRwwrIOgPQLJ-agh9_CrbxXUxhlnDC_1fm7phJiGlnOtP4Hr9oBbxahiXVaqVbKLpss0a7mckSxmepZGXeE7nnSAJFI4bmjwvpOnw3VfM4FjBdqehbaqaFdAx7mF3yMDNE8');
    myHeaders.append('Content-Type', 'application/json');
    /* eslint-disable no-useless-escape */
    const token = document.cookie.replace(/(?:(?:^|.*;\\s*)augustusWsPush\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    const notification = {
      notification: {
        title: 'Azfitness 已經收到來自 我 的訊息',
        body: '我 先生/小姐 送出了一則訊息至 Azfitness 團隊',
        click_action: 'https://www.surveycake.com/',
        icon: 'azchao-fitness.web.app/img/icons/favicon-16x16.png',
      },
    };

    // 使用者正開啟官網頁面
    const messaging = firebase.messaging();
    messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      const msgTitle = payload.notification.title;
      const url = payload.notification.click_action;
      const notificationEvent = new Notification(msgTitle, payload.notification);

      // 點擊推播後要連去哪
      notificationEvent.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = url;
      });
    });

    const response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        notification,
        to: token,
      }),
      redirect: 'follow',
    });
    const result = response.json();

    return new Promise((resolve, reject) => {
      const { success, failure } = result;
      resolve(success);
      reject(failure);
      commit('OPEN_DIALOG', { type: 'completeAlert', status: true });
    });
  },
};

export default actions;
