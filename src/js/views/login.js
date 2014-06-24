var LoginViewTemplate = '' +
    '<form method="post" action="/login-submit">' +
        '<p><input type="text" name="login" value="" placeholder="Username or Email"></p>' +
        '<p><input type="password" name="password" value="" placeholder="Password"></p>' +
        '<p class="remember_me">' +
            '<label>' +
                '<input type="checkbox" name="remember_me" id="remember_me">' +
                'Remember me on this computer' +
            '</label>' +
        '</p>' +
        '<p class="submit"><a href="/dashboard">Login</a></p>' +
    '</form>';

var LoginView = Backbone.View.extend({
    tagName: 'div',

    initialize: function(){
        this.template = LoginViewTemplate;
    },

    render: function(){
        rendered = Mustache.to_html(this.template, {});
        $(this.el).html(rendered);
        return this.el;
    }
});