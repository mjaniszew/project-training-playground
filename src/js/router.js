/**
 * Application router. redirects to specific views
 * based on current url
 */
var Router = Backbone.Router.extend({
    routes: {
        '':              'home',
        'login-page':    'login'
    },

    home: function () {
        app.switchView(new HomeView());
    },

    login: function () {
        app.switchView(new LoginView());
    },
});