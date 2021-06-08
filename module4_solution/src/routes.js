(function () {
  "use strict";
    angular.module("MenuApp").config(RouteConfig);
    RouteConfig.$inject = [
      "$stateProvider",
      "$urlRouterProvider"
    ];

    function RouteConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state("home", {
          url: "/",
          template: " <h1>Welcome to our Restaurant</h1>",
        })
        .state("categories", {
          url: "/categories",
          templateUrl: "pages/categories.html",
          controller: "CategoriesController as ctrl",
          resolve: {
            categories: [
              "MenuDataService",
              function (MenuDataService) {
                return MenuDataService.getAllCategories();
              },
            ],
          },
        })
        .state("categories.items", {
          url: "/items/{categoriesname}",
          templateUrl: "pages/items.html",
          controller: "ItemsController as ctrl",
          resolve: {
            items: [
              "MenuDataService",
              "$stateParams",
              function (MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory(
                  $stateParams.categoriesname
                );
              },
            ],
          },
        });
      $urlRouterProvider.otherwise("/");
    }
})();
