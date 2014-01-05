angular.module("myApp",['ngRoute']);
var app = angular.module("myApp");

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'TodoListCtrl',
        templateUrl: "partials/todo.html"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

app.controller('TodoListCtrl', function($scope) {
  $scope.todoList = [{
    name: 'first Todo'
  }, {
    name: 'second Todo'
  }];

  $scope.addTodo = function() {
    var newTodo = $scope.todoInput.trim();
    $scope.todoList.push({
      name: newTodo
    });
    $scope.todoInput = "";
  };

  $scope.deleteTodo = function(index) {
    $scope.todoList.splice(index, 1);
  };
});