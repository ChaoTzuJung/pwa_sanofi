const detectDevice = () => {
  // Really basic check for the ios platform
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobileDevice = true;
  }

  if (window.matchMedia('(display-mode: standalone)').matches) {
    window.isPwa = true;
  }
};

// Detects if device is on iOS
export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true });
}

export default detectDevice;
