angular.module('todo').controller('TodoCtrl',function ($scope, todoStorage){ //Controller 정의 
    
    $scope.todos = todoStorage.get();
    
    $scope.remove = function(todo){
        
        todoStorage.remove(todo);

    };

        
    $scope.add = function(newTodoTitle){

        todoStorage.add(newTodoTitle);
            //empty form
        $scope.newTodoTitle = "";
    }
}); 