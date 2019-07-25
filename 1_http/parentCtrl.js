
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope, $http, $q, constService,  dataService, serverService) {

    $scope.data = {}
    console.log("controller")
    dataService.init()
    var myPromise = serverService.getData()
    myPromise.then(function(res){
        $scope.data = res;
        console.log("data is")
        console.log($scope.data)
    })
    
}
