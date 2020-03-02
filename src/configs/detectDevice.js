const detectDevice = () => {
  // Really basic check for the ios platform
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobile = true;
  }

  if (window.matchMedia('(display-mode: standalone)').matches) {
    window.isPwa = true;
  }
};

export default detectDevice;
