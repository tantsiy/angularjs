(function () {
  "use strict";
  angular.module("data").component('items', {
    templateUrl: 'pages/items.template.html',
    bindings: {
      items:'<'
    }
  })
})();
