window.Curate.Flash = {
  notice: function(msg) {
    return this.notification('notice', 5000, msg);
  },
  alert: function(msg) {
    return this.notification('alert', false, msg);
  },
  error: function(msg) {
    return this.notification('error', 5000, msg);
  },
  success: function(msg) {
    return this.notification('success', 5000, msg);
  },
  notification: function(type, timeout, msg) {
    $.noty.closeAll();
    return noty({
      text: msg,
      type: type,
      theme: 'defaultTheme',
      layout: "top",
      animation: {
        open: {
          height: "toggle"
        },
        close: {
          height: "toggle"
        },
        easing: 'swing',
        speed: 500
      },
      timeout: timeout,
      closeWith: ['click', 'button'],
      modal: false
    });
  }
};

