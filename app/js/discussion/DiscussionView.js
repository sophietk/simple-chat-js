var DiscussionView = Backbone.View.extend({

    className: 'row discussion',

    template: $('#tpl-discussion').html(),

    initialize: function () {
        this.collection = new FriendsCollection([
            {name: 'Jack', content: 'coucou', timestamp: 1423926206320},
            {name: 'Jack', content: 'coucou 2', timestamp: 1423926204320},
            {name: 'Jack', content: 'coucou 4', timestamp: 1423924206320}
        ]);
    },

    render: function () {
        var rendered = Mustache.render(this.template, {
            messages: this.collection.toJSON(),
            formatTime: function () {
                return moment(this.timestamp).format('HH:mm:ss');
            }
        });
        this.$el.html(rendered);

        return this;
    }

});