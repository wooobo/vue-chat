module.exports = (Vue) => {
  Vue.directive('auto-bottom', {
    update: (el) => {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
    },
  });
};
