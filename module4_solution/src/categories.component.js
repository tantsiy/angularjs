(function () {
  "use strict";
  angular.module("data").component("categories", {
    templateUrl: "pages/categories.template.html",
    bindings: {
      categories: "<",
    },
  });
})();
