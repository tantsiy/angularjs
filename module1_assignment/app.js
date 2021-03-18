(function () {

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.messages = "";//for message
    $scope.msgClass = "text-success";//for color of o/p msg
    $scope.msgBorder = "";//for border of input text box

    $scope.check = function() { 

      var input = $scope.name;
      var numberOfTypes = input.split(",");
      var numberOfItems = 0;
       
      for (var i = 0; i < numberOfTypes.length; i++) {
        if (numberOfTypes[i].trim() !== "") {
               numberOfItems ++;
        }
      }
         
      if(numberOfItems === 0)
      {
        $scope.messages = "Please enter data first";
        $scope.msgClass = "text-danger";
        $scope.msgBorder = "messageError";
      }
      else if(numberOfItems <= 3)
      {
        $scope.messages = "Enjoy!";
        $scope.msgClass = "text-success";
        $scope.msgBorder = "messageSuccess";
      }
      else
      {
        $scope.messages = "Too much!";
        $scope.msgClass = "text-danger";
        $scope.msgBorder = "messageError";
      }
    };

  };




})();