module.controller("reverseString", ReverseString)

function ReverseString($scope) {
    $scope.name = "leon";
    $scope.reverseString = function() {
        $scope.name = $scope.name.split('').reverse().join('');
    }
}
