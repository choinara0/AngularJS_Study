angular.module('todo').controller('TodoCtrl',function ($scope, todoStorage){ //Controller 정의 
    
    $scope.todos = todoStorage.get();
    
    // $scope.todos = [{
    //     title: 'Algorithm Study',
    //     completed: true,
    //     createdAt:Date.now()
    // },
    // {
    //     title: 'Angular Study',
    //     completed: false,
    //     createdAt:Date.now()
    // },
    // {
    //     title: 'NodeJs Study',
    //     completed: false,
    //     createdAt:Date.now()
    // }

    // ];
    $scope.remove = function(todo){
        //find todo index in todos
        var idx = $scope.todos.findIndex(function (item){
        return item.id === todo.id;
        })

        //remove todo from todos
        if(idx>-1){
            $scope.todos.splice(idx, 1)
        }
    };

        
    $scope.add = function(newTodoTitle){
        // create new todo
            var newTodo = {
                title : newTodoTitle,
                completed : false,
                createdAt : Date.now()
            };

            //push into todos
            $scope.todos.push(newTodo);
            $scope.newTodoTitle = "";
        }
}); 