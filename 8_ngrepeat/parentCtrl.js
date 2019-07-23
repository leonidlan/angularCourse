angular.module("dataApp", []).controller("parentCtrl", function($scope) {
    let model;
    let color;
    let price;
    let index;
    let reverseModel = false;
    let reverseColor = false;
    let reversePrice = false;
    $scope.editable=true;

    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ];

    $scope.addDevice = function(){
        console.log("adding")
        let newDevice = new Mobile({model:$scope.model, color:$scope.color, price:$scope.price});
        $scope.devices.push(newDevice);
    }

    $scope.removeDevice = function(index){
        $scope.devices.splice(index, 1);
    }

    $scope.sortData = function(prop){
        if(prop == "model"){
            reverseModel = !reverseModel;
            if(reverseModel){
                $scope.devices.sort(dynamicSort("model"));
            }
        else{
            $scope.devices.sort(dynamicSort("-model"));
        }
        }
        if(prop == "color"){
            reverseColor = !reverseColor;
            if(reverseColor){
                $scope.devices.sort(dynamicSort("color"));
            }
            else{
                $scope.devices.sort(dynamicSort("-color"));
            }
        }
        if(prop =="price"){
            reversePrice = !reversePrice;
            if(reversePrice){
                $scope.devices.sort(dynamicSort("price"));
            }
            else{
                $scope.devices.sort(dynamicSort("-price"));
            }
        }
    }

    $scope.editDevice = function(index){

    }

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
})
