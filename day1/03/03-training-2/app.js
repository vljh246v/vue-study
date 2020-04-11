Vue.component('sibling-component', {
    props: ['siblingdata'],
    template: '<p>{{ siblingdata }}</p>'
})


Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
})


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!, passed from Parent Component',
        anotherMessage: 'Hello Vue?!!'
    }
})