
module.controller("parentCtrl", ParentCtrl)

function ParentCtrl($scope, $rootScope, dataService) {
    let minimum;
    let maximum;

    let randomnumber;
    let arrayLength;

    const maximumNumberOfOpenNumbers = 2;
    $scope.numberOfOpenNumbers = 0;

    $scope.memoryArray = [];
    $scope.memoryShowIndexArray = [];
    $scope.memoryDiscoveredArray = [];

    $scope.firstIndex = -1;
    $scope.secondIndex = -1;

    this.generateRandomWholeNumber = function(maximum=100, minimum=0){
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    arrayLength = this.generateRandomWholeNumber(30);

    $scope.showMe= function(i){
        if($scope.numberOfOpenNumbers<2){
            dataService.increaseNumberOfGuesses();
            if($scope.numberOfOpenNumbers==0){
                $scope.firstIndex = i
            }
            else if($scope.firstIndex != i){
                $scope.secondIndex = i
                if($scope.memoryArray[$scope.firstIndex]==$scope.memoryArray[$scope.secondIndex]){
                    $scope.memoryDiscoveredArray[$scope.firstIndex] = true
                    $scope.memoryDiscoveredArray[$scope.secondIndex] = true
                    $scope.numberOfOpenNumbers = -1
                    $scope.firstIndex = -1;
                    $scope.secondIndex = -1;
                    dataService.increaseNumberOfCorrectAnswers();
                }
            }
            $scope.numberOfOpenNumbers++;
            $scope.memoryShowIndexArray[i] = false;
        }
    }
   
    $scope.hideMe= function(i){
        if($scope.numberOfOpenNumbers==2){
            if($scope.secondIndex == i){
                $scope.secondIndex = -1;
            }
            else if($scope.firstIndex == i ){
                $scope.firstIndex = $scope.secondIndex;
                $scope.secondIndex = -1;
            }
        }
        else if ($scope.numberOfOpenNumbers == 1){
            $scope.firstIndex = -1;
        }
        $scope.numberOfOpenNumbers--;
        $scope.memoryShowIndexArray[i] = true;
    }

    $scope.clearOpenGuess = function(){
        $scope.numberOfOpenNumbers = 0;
        $scope.memoryShowIndexArray[$scope.firstIndex] = true;
        $scope.memoryShowIndexArray[$scope.secondIndex] = true;
        $scope.firstIndex = -1;
        $scope.secondIndex = -1;
    }

    for(var i = 0; i< arrayLength; i++){
        let temp = this.generateRandomWholeNumber(10);
        $scope.memoryArray.push(temp)
    }

    for(var i=0; i< arrayLength; i++){
        $scope.memoryShowIndexArray[i]= true;
    }
    
    
    for(var i=0; i< arrayLength; i++){
        $scope.memoryDiscoveredArray[i]= false;
    }
}
