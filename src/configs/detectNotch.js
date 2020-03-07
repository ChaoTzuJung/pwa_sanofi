const detectNotch = () => {
  // Really basic check for the ios platform
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Get the device pixel ratio
  const ratio = window.devicePixelRatio || 1;

  // Define the users device screen dimensions
  const screen = {
    width: window.screen.width * ratio,
    height: window.screen.height * ratio,
  };

  // Notch position checker
  function checkNotch() {
    let notch = 'top';

    if ('orientation' in window) {
      // Mobile
      if (window.orientation === 90) {
        notch = 'left';
      } else if (window.orientation === -90) {
        notch = 'right';
      }
    } else if ('orientation' in window.screen) {
      // Webkit
      if (screen.orientation.type === 'landscape-primary') {
        notch = 'left';
      } else if (screen.orientation.type === 'landscape-secondary') {
        notch = 'right';
      }
    } else if ('mozOrientation' in window.screen) {
      // Firefox
      if (screen.mozOrientation === 'landscape-primary') {
        notch = 'left';
      } else if (screen.mozOrientation === 'landscape-secondary') {
        notch = 'right';
      }
    }

    window.notch = notch;
  }

  // Each time the device orientation changes, run this update function
  function update() {
    checkNotch();
  }

  // iPhone X Detection
  if (iOS && screen.width === 1125 && screen.height === 2436) {
    // Set a global variable now we've determined the iPhoneX is true
    window.iphoneX = true;

    // Adds a listener for ios devices that checks for orientation changes.
    window.addEventListener('orientationchange', update);
    update();
  }

  // iPhone X Detection
  if (iOS && screen.width === 750 && screen.height === 1624) {
    // Set a global variable now we've determined the iPhoneX is true
    window.iphoneX = true;

    // Adds a listener for ios devices that checks for orientation changes.
    window.addEventListener('orientationchange', update);
    update();
  }

  // iphone 11 Detection已有新版
  if (iOS && screen.width === 1242 && screen.height === 2688) {
    // Set a global variable now we've determined the iPhoneX is true
    window.iphoneX = true;

    // Adds a listener for ios devices that checks for orientation changes.
    window.addEventListener('orientationchange', update);
    update();
  }

  // iphone 11 Detection已有新版
  if (iOS && screen.width === 828 && screen.height === 1792) {
    // Set a global variable now we've determined the iPhoneX is true
    window.iphoneX = true;

    // Adds a listener for ios devices that checks for orientation changes.
    window.addEventListener('orientationchange', update);
    update();
  }
};

export default detectNotch;
