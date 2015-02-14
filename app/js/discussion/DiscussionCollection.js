var DiscussionCollection = Backbone.Collection.extend({

    initialize: function () {
        this.listenTo(Backbone, 'addMessage', this.addMessage);

        this.letThemTalk();
        this.letThemTalk();
        this.letThemTalk();
        setInterval(this.letThemTalk.bind(this), 2000);
    },

    addMessage: function (message) {
        this.push(message);
        this.trigger('change');
    },

    letThemTalk: function () {
        this.addMessage({
            name: _.sample(['Jack', 'Frank', 'Vlad', 'Paul']),
            content: chance.sentence(),
            timestamp: new Date().getTime()
        });
    }
});
