var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello first world'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'This div is downloaded at ' + new Date().toLocaleString()
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
  todos: [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ]
}
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue'
    }
});
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id:1, text:'vegitables'},
            {id:2, text:'Cheese'},
            {id:3, text:'something else'}
        ]
    }
})
var data = {a:'object'}
var app8 = new Vue({
    el: '#app-8',
    data: data
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        message: 'Hello'
    },
    computed: {
        reverseMessage: function(){
            return this.message.split('').reverse().join('');
        }      
    },
    methods:{
        now: function(){
            return Date.now()
        }
    }
})

var app10 = new Vue({
    el: '#app-10',
    data: {
        firstName: 'foo',
        lastName: 'bar'
    },
    computed: {
        fullName: function(){
            return this.firstName + " " + this.lastName
        }
    }
})