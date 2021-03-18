(function(){
	angular.module('LunchCheck', [])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope)
	{
		$scope.name ="";
		$scope.messages ="";
		$scope.msgClass "text-success";
		$scope.msgBorder = "";

		$scope.check = function()
		{
			var input = $scope.name;
			var numberOfTypes = input.split(",");
			var numberOfItems = 0;

			for(var j=0; j<numberOfTypes.length; j++)
			{
				if(numberOfTypes[j].trim() !==)
				{
					numberOfItems ++;
				}
			}
			if(numberOfItems ===0)
			{
				$scope.messages = "Please enter the data first";
				$score.msgClass = "text-danger";
				$scope.msgBorder = "messageErro";
			}
			else if(numberOfItems <=3)
			{
				$scope.messages = "Enjoy Buddy";
				$scope.msgClass = "text-success";
				$scope.msgBorder = "messageSuccess";
			}
			else
			{
				$scope.messages = "Too much Buddy";
				$scope.msgClass = "text-danger";
				$scope.msgBorder = "messageErro";
			}
		};
	};

}());