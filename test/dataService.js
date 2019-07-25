module.service('dataService', function( $q, $interval) {

    var numberOfCorrectAnswers = 0;
    var numberOfGuesses = 0;
    var bla = 0;
    $interval(function () {
    $q.resolve(Math.random()) //some promise, maybe from $http, but for sake of simplicity I will use $q.resolve
      .then(function (result) {
        bla = result; //setting change to random value
      });
  }, 1000); //changes every second
  
 


    return {
        getNumberOfCorrectAnswers: function () {
            console.log("getting the number" + numberOfCorrectAnswers);

          return numberOfCorrectAnswers;
        }, 
        increaseNumberOfCorrectAnswers : function(){
            console.log("im increasing");
            numberOfCorrectAnswers++;
            console.log(numberOfCorrectAnswers)
        }, 
        getNumberOfGuesses: function(){
            return numberOfGuesses;
        },
        increaseNumberOfGuesses: function(){
            numberOfGuesses++;
        }
    }
});