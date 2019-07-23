
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.x = 0

    $scope.$watch('x', function(newX, old) {
        if(newX =='leon'){
            alert('hi');
        }
    })
    
}
