(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var itemAdder = this;

      
      itemAdder.toBuyitems = ShoppingListCheckOffService.getToBuyItems();
      
      
        itemAdder.bought = function(itemIndex)  {
          ShoppingListCheckOffService.bought(itemIndex);

        };
    
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)  {
      var showList = this;

    
        showList.boughtItems = ShoppingListCheckOffService.getItems();
      
   
    }


    function ShoppingListCheckOffService()  {
      var service = this;

      //The list of shopping items
      var toBuyItems = [
        {
           name: "cookies", quantity: 10
        },
        {
           name: "candies", quantity: 12
        },
        {
           name: "chocolates", quantity: 14
        },
        {
           name: "pizzas", quantity: 16
        },
        {
           name: "burgers", quantity: 20
        }
       ];

      var boughtItems = [];
      
      service.getToBuyItems = function()  {
        return toBuyItems;
                  
      };

      service.bought = function(itemIndex)  {
        
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);

       

      };

      service.getItems = function()   {
       
          return boughtItems;
       
       
      };

     
    }
    

})();



