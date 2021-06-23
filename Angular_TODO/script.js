
(function(){
    var app = angular.module('todo', []); //module을 정의하는 함수
    
    // module이라는 것은 큰 container의 개념 (controller를 module안에 만들어야 함 ) 
    app.controller('TodoCtrl',['$scope', function ($scope){ //Controller 정의 
        $scope.todos = [{
             title: 'Algorithm Study',
             completed: true,
             createdAt:Date.now()
        },
        {
            title: 'Angular Study',
            completed: false,
            createdAt:Date.now()
        },
        {
            title: 'NodeJs Study',
            completed: false,
            createdAt:Date.now()
        }

    ];
        $scope.remove = function(todo){
            //find todo index in todos
            var idx = $scope.todos.findIndex(function (item){
                return item.id === todo.id;
            })

            //remove todo from todos

            if(idx>-1){
                $scope.todos.splice(idx, 1)
            }
        }



    }]); 

    
})();