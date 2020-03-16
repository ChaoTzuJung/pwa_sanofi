const detectDevice = () => {
  // Really basic check for the ios platform
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobileDevice = true;
  }

  // Detects if device is on iOS
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.iOS = true;
  }

  if (window.matchMedia('(display-mode: standalone)').matches) {
    window.isIos = true;
  }

  // Detects if device is in standalone mode
  if (('standalone' in window.navigator) && (window.navigator.standalone)) {
    window.isInStandaloneMode = true;
  }
};

export default detectDevice;
