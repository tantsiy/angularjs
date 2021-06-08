(function () {
  "use strict";
  angular
    .module("data")
    .controller("CategoriesController", CategoriesController)
    .controller("ItemsController", ItemsController);

  CategoriesController.$inject = ["categories"];
  ItemsController.$inject = ["items"];
    
    function CategoriesController(categories) {
        var ctrl = this;
      ctrl.categories = categories;
      
    }
  
   function ItemsController(items) {
     var ctrl = this;
     ctrl.items = items;
     console.log(items[0]);
   }
})();
