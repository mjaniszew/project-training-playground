var HomeViewTemplate = '' +
    '<div class="awesome-div">' +
        '<h1>Welcome on our project playground!</h1>'+
        '<p>Here you can lear basic project structure and patterns.</p>'+
        '<a href="/login-page">Go to Login Page</a>' +
    '</div>';

var HomeView = Backbone.View.extend({
    tagName: 'div',

    initialize: function(){
        this.template = HomeViewTemplate;
    },

    render: function(){
        rendered = Mustache.to_html(this.template, {});
        $(this.el).html(rendered);
        return this.el;
    }
});