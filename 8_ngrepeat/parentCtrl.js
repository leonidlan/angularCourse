
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
    let model;
    let color;
    let price;
    let index;

    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]

    $scope.addDevice = function(){
        console.log("adding")
        let newDevice = new Mobile({model:$scope.model, color:$scope.color, price:$scope.price});
        $scope.devices.push(newDevice);
    }

    $scope.removeDevice = function(index){
        $scope.devices.splice(index, 1);
    }
    
}
