(function() {

  // проверяем поддержку
  if (document.documentElement.textContent === undefined) {

    // определяем свойство
    Object.defineProperty(HTMLElement.prototype, "textContent", {
      get: function() {
        return this.innerText;
      },
      set: function(value) {
        this.innerText = value;
      }
    });
  }

})();