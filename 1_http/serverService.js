module.service('serverService',['$http', 'constService','dataService',  function($http, constService, dataService) {
    this.getData = function(){
        console.log("serverService im in getData")
        this.x
        return $http.get(constService.url).then( (resp) => {
            return resp.data

        }, (err) => {
            console.log(`ERROR === ${err}`)   
        }
        )
    }
}]);