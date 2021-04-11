(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems );

  function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
   
    controller: MenuSearchDirectiveController,
    controllerAs: 'menu',
    bindToController: true,
       
   
  };
  return ddo;
}

  function MenuSearchDirectiveController()  {
    var menu = this;

    menu.isEmpty = function() {
      return menu.found !== undefined && menu.found.length === 0;
    };
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var menu = this;
    menu.itemName = "";
    menu.searchButtonText = "";
    
    console.log("menu.searchButtonText", menu.searchButtonText);

    menu.getMatchedMenuItems = function() {

      menu.searchButtonText = "Searching";
      console.log("menu.searchButtonText", menu.searchButtonText);
      if(menu.itemName  === "") {
        menu.found =[];
        menu.searchButtonText = "Searched";
        console.log("menu.searchButtonText", menu.searchButtonText);
        return;
      }

      var promise= MenuSearchService.getMatchedMenuItems(menu.itemName);
      promise.then(function(response){
        
        menu.searchButtonText = "Searched";
        console.log("menu.searchButtonText", menu.searchButtonText);
        menu.found = response;
      })
      .catch(function(error) {
        console.log("Something went wrong", error);
      });
    };
     
    menu.removeItem = function(itemIndex)  {
      MenuSearchService.removeItem(itemIndex);
    };
    
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath)  {
    var service = this;
    var foundItems = [];


    service.getMatchedMenuItems = function(itemName)  { 
      
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
                   
          var items = result.data.menu_items;
          foundItems = [];

          for (var i = 0; i < items.length; i++) {
          if (items[i].description.toLowerCase().indexOf(itemName.toLowerCase()) >= 0) {
            foundItems.push(items[i]);
          }
        }
          console.log("result: ", foundItems);
          return foundItems;
      });
      
         
    };

    service.removeItem = function(itemIndex)  {
      foundItems.splice(itemIndex,1);
    };
  }

 

})();