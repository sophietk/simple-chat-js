var FriendsView = Backbone.View.extend({

    className: 'col s3 friends',

    template: $('#tpl-friends').html(),

    initialize: function () {
        this.collection = new FriendsCollection([
            {name: 'Jack', avatar: 'skellington.png'},
            {name: 'Frank', avatar: 'frankenstein.png'},
            {name: 'Vlad', avatar: 'dracula.png'},
            {name: 'Paul', avatar: 'alien.png'}
        ]);
    },

    render: function () {
        var rendered = Mustache.render(this.template, {friends: this.collection.toJSON()});
        this.$el.html(rendered);

        return this;
    }

});