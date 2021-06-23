
angular.module('todo').directive('todoTitle', function(){

    return {
        template : '<h1>My Todo List</h1>'
    }

});

angular.module('todo').directive('todoItem', function(){
    return {
        templateUrl : 'todoItem.tpl.html'
        // template :  
            // '<div class="input-group mb-3">' +
            //     '<div class="input-group-text">'+
            //         '<input class="form-check-input mt-0" type="checkbox" value="" ng-model = "todo.completed">' +
            //     '</di v>' +
            //     '<input type="text" class="form-control" ng-model = "todo.title">' +
            //     '<span class="input-group-btn">' +
            //         '<button class="btn btn-outline-secondary" type="button" id="button-addon" ng-click="remove(todo)" > Delete </button>' +
            //     '</span>' +
            // '</div> '
            // <p><date> {{todo.createdAt | date:'yy년 MM월 dd일, HH:mm' }} </date></p>
    }
})

angular.module('todo').directive('todoFilters', function(){
    return {
        templateUrl : 'todoFilters.tpl.html'
    };
})

angular.module('todo').directive('todoForm', function(){
    return{
        templateUrl : 'todoForm.tpl.html'
    };
})