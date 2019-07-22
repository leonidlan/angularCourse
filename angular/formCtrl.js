module.controller("formCtrl", FormCtrl)

function FormCtrl($scope) { 
    $scope.person = new Person();

    
    function Person(name, age, password, gender, carCompany , hasBike){
    this.name = name
    this.age = age
    this.password = password
    this.gender = gender
    this.carCompany = carCompany
    this.hasBike = hasBike
    
    this.toString = function(){
        console.log(this)
    }
}
}
