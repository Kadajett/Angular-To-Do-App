angular.module('todoApp')
.controller('TodoListCtrl', function($scope){
	$scope.todoList = [ name: 'first Todo', name: 'second Todo'];

	$scope.addTodo = function(){
		todoList.push($scope.newTodo);
	}

	$scope.deleteTodo = function(index) {
		todoList.splice(index, 1);
	}
});