 //module을 정의하는 함수
    
    // module이라는 것은 큰 container의 개념 (controller를 module안에 만들어야 함 ) 

// app.directive('todoTitle', function(){
//     return {
//         template : '<h1>My Todo List</h1>'
//     }    
// });
        
// app.directive('todoItem', function(){
//     return {
//         templateUrl : 'todoItem.tpl.html'
//         // template :  
//         // '<div class="input-group mb-3">' +
//         //     '<div class="input-group-text">'+
//         //         '<input class="form-check-input mt-0" type="checkbox" value="" ng-model = "todo.completed">' +
//         //     '</di v>' +
//         //     '<input type="text" class="form-control" ng-model = "todo.title">' +
//         //     '<span class="input-group-btn">' +
//         //         '<button class="btn btn-outline-secondary" type="button" id="button-addon" ng-click="remove(todo)" > Delete </button>' +
//         //     '</span>' +
//         // '</div> '
//         // <p><date> {{todo.createdAt | date:'yy년 MM월 dd일, HH:mm' }} </date></p>
//     }
// });

    // app.directive('todoTitle', function(){

    //     return {
    //         template : <h1>My Todo List</h1>
    //     }

    // });
    
    // app.directive('todoItem', function(){
    //     return {
    //         templateUrl : 'todoItem.tpl.html'
    //         // template :  
    //             // '<div class="input-group mb-3">' +
    //             //     '<div class="input-group-text">'+
    //             //         '<input class="form-check-input mt-0" type="checkbox" value="" ng-model = "todo.completed">' +
    //             //     '</div>' +
    //             //     '<input type="text" class="form-control" ng-model = "todo.title">' +
    //             //     '<span class="input-group-btn">' +
    //             //         '<button class="btn btn-outline-secondary" type="button" id="button-addon" ng-click="remove(todo)" > Delete </button>' +
    //             //     '</span>' +
    //             // '</div> '
    //             // <p><date> {{todo.createdAt | date:'yy년 MM월 dd일, HH:mm' }} </date></p>
    //     }
    // })