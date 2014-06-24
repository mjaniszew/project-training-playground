/**
 * Main application entry. Everything starts here...
 * @author Michał Janiszewski - kontakt@mjaniszew.pl
 */
var app = {
        root: '/',
        viewport: '#viewport'
    };

if (CONFIG.debug === false || CONFIG.debug === undefined){
    (function () {
        var methods = ['log', 'debug', 'warn', 'info'],
            i;

        if (window.console === undefined) {
            window.console = {};
        }
        for (i=0; i < methods.length; i++) {
            console[methods[i]] = function() {};
        }
    })();
}

var THEME = unescape((' ' + document.cookie).match(new RegExp('[; ]themeName=([^\\s;]*)')) || ['', CONFIG.defaultTheme][1]),
	searchParams;

// Gets query params from url
(function () {
    var params = {},
        args;
    if (!!document.location.search) {
        $.each(document.location.search.replace('?', '').split('&'), function (){
           args = this.split('=');
           params[args[0]] = args[1];
        });
    }
    searchParams = params;
}());


$('head').append('<link rel="stylesheet/less" type="text/css" href="themes/' + THEME + '/less/all.less">');
$('head').append('<script type="text/javascript" src="js/less/dist/less-1.7.5.js"></script>');

$(document).ready(function () {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();
    app.switchView = function (view) {
        $(this.viewport).html(
            view.render({
                page: true
            })
        );
    };

    $(window).on('resize', function () {
        $(app.viewport).height($(window).height());
    }).resize();

    $('body').on('click', 'a', function (event) {
        var url = $(event.target).closest('a').attr('href');
        // navigate if url matches a route
        if (/^(\/)?(.*)/ig.test(url) && url.indexOf('.') === -1) {
            app.router.navigate(url, {trigger: true});
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    });

    // Trigger the initial route and enable HTML5 History API support, set the
    // root folder to '/' by default.  Change in app.js.
    Backbone.history.start({
        pushState: true,
        root: app.root
    });
});
