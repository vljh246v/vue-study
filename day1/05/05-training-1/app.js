var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        anotherMessage: 'Hello??',
        uid: '120',
        flag: false
    },
    methods: {
        clickBtn(){
            console.log("hi")
        },
        eventMethod() {
            alert('!!!')
        }
    }

})