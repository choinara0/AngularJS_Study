angular.module('todo').factory('todoStorage', function(){
    var storage = {
        //todo ... 
        todos : [
        // {
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
    ],
        _saveToLocalStorage: function(data){
            //localStorage에는 string으로만 저장되기 떄문에 객체화된 data를 JSON에서 stringfy한다.
            localStorage.setItem('TODO_DATA', JSON.stringify(data))
        },
        _getFromLocalStorage: function(){
            return JSON.parse(localStorage.getItem('TODO_DATA')) || [];
        },

        get : function(){
            //storage.todos = storage._getFromLocalStorage()을 사용하면 X. copy를 사용할 것 
            angular.copy(storage._getFromLocalStorage, storage.todos) // LocalStoarge에 있는 data를 todos에 가져오게하기 
            return storage.todos;
        },

        remove : function(todo){
            var idx = storage.todos.findIndex(function (item){
                return item.id === todo.id;
            })
            if(idx>-1){
                storage.todos.splice(idx, 1)
            }
            storage._saveToLocalStorage(storage.todos);
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
            storage._saveToLocalStorage(storage.todos);
        },

        update: function(){
            storage._saveToLocalStorage(storage.todos);
        }
    }
    
    return storage;
});


// service를 만들 때는 service. factory, provicer라는 함수가 있다.
