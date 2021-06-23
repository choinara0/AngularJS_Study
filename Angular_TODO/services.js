angular.module('todo').factory('todoStorage', function(){
    var storage = {
        //todo ...
        todos : [
        {
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
    
        ],
 
        get : function(){
            return storage.todos;
        },

        remove : function(todo){
            var idx = storage.todos.findIndex(function (item){
                return item.id === todo.id;
            })
            if(idx>-1){
                storage.todos.splice(idx, 1)
            }
        },

        add : function(newTodoTitle){
            // create new todo
            var newTodo = {
                title : newTodoTitle,
                completed : false,
                createdAt : Date.now()
            };
        
            //push into todos
            storage.todos.push(newTodo);
        }
    }
    
    return storage;
});


// service를 만들 때는 service. factory, provicer라는 함수가 있다.
