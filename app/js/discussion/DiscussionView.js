var DiscussionView = Backbone.View.extend({

    className: 'row discussion',

    template: $('#tpl-discussion').html(),

    initialize: function () {
        this.collection = new DiscussionCollection();
        this.listenTo(this.collection, 'change', this.render);
    },

    render: function () {
        var self = this,
            rendered;

        rendered = Mustache.render(this.template, {
            messages: this.collection.toJSON(),
            formatTime: function () {
                return moment(this.timestamp).format('HH:mm:ss');
            }
        });
        this.$el.html(rendered);

        _.defer(function () {
            var height = self.$el[0].scrollHeight;
            self.$el.scrollTop(height);
        });

        return this;
    }

});