var MessageView = Backbone.View.extend({

    tagName: 'form',

    className: 'row message',

    events: {
        'keyup textarea': 'checkIfSubmit',
        'submit': 'submitMessage'
    },

    template: $('#tpl-message').html(),

    render: function () {
        this.$el.html(this.template);

        return this;
    },

    checkIfSubmit: function (event) {
        if (event.keyCode === 13) this.submitMessage(event);
    },

    submitMessage: function (event) {
        event.preventDefault();
        Backbone.trigger('addMessage', {
            name: 'Me',
            content: this.$('textarea').val(),
            timestamp: new Date().getTime()
        });

        this.$('textarea').val('');
    }

});