function testController(){

}




angular.module('app',['ngRoute']);
angular.module('app')
.config(['$routeProvider',function config($routeProvider){
    $routeProvider.when('/',{
        template:'<test></test>'
        // templateUrl:"test.html",
        // controller:"test"

    })
    .when('/angular',{
        template:"<demo></demo>"
    })
    .otherwise('/');
}])
.component('test', {
    templateUrl: './ng1/test.html',
    controller: testController,
    bindings: {
      title: '<',
     
    }
  })
.controller('test',function(){
      console.log("test1");
})
.factory('Test',function(){
    return {
        data:"Test data"
    }
});



