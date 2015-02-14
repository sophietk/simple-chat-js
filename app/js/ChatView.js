var ChatView = Backbone.View.extend({

    className: 'row',

    initialize: function () {
        //this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        var discussionView = new DiscussionView(),
            messageView = new MessageView(),
            friendsView = new FriendsView(),
            $leftSide = $('<div class="col s9"></div>');

        $leftSide.append(discussionView.render().el);
        $leftSide.append(messageView.render().el);
        this.$el.append($leftSide);
        this.$el.append(friendsView.render().el);
        return this;
    }

});