Vue.component('todo-footer', {
    template: '<p>This is another child component</p>'
})


var localComponent = {
    template: '<p>This is another local child component</p>'
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components: {
        'todo-list': localComponent
    }
})