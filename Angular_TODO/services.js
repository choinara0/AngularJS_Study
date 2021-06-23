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
        }
    }
    return storage;
});


// service를 만들 때는 service. factory, provicer라는 함수가 있다.
