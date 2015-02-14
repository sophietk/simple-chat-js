var DiscussionCollection = Backbone.Collection.extend({

    initialize: function () {
        this.listenTo(Backbone, 'addMessage', this.addMessage);
    },

    addMessage: function (message) {
        this.push(message);
        this.trigger('change');
    }
});
