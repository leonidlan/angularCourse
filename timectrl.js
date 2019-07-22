module.controller("timeCtrl", TimeCtrl)

function TimeCtrl($scope) {    
    $scope.time = new Date();
    $scope.increaseTime = function() {
        $scope.time = new Date();
    }
}
