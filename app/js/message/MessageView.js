var MessageView = Backbone.View.extend({

    tagName: 'form',

    className: 'row message',

    events: {
        'click .icon': 'open',
        'click .button.edit': 'openEditDialog',
        'click .button.delete': 'destroy'
    },

    template: $('#tpl-message').html(),

    render: function () {
        this.$el.html(this.template);

        return this;
    }

});