App.module('Config', function(Config, App, Backbone, Marionette, $, _) {

    $('[name^="config:"]').each(function (i, meta) {
        var name = meta.name.replace('config:', '');
        var type = meta.getAttribute('type');

        type = (type) ? type.toLowerCase() : type;

        switch (type) {
            case 'boolean':
                Config[name] = (meta.content === 'true');
                break;
            case 'json':
                try {
                    Config[name] = JSON.parse(meta.content);
                } catch (e) {
                    throw new Error(e);
                }
                break;
            default:
                Config[name] = meta.content;
        }
    });

});
