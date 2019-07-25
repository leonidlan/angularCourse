module.controller("sonCtrl", SonCtrl)

function SonCtrl($scope, $rootScope,$timeout,  dataService) {
    $scope.myNum = 0;
    $scope.myGuesses = 0;
    $scope.$watch(dataService.getNumberOfCorrectAnswers, function (numberOfCorrectAnswers) { 
        $scope.myNum = numberOfCorrectAnswers; 
    }.bind(this))
    $scope.$watch(dataService.getNumberOfGuesses, function (a) { 
        $scope.myGuesses = a; 
    }.bind(this))
}

