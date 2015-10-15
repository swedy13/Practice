(function () {
    'use strict';

    Meteor.methods({
        // We remove all Posts from mirror db
        removePosts: function () {
            Posts.remove({});
        },
        randomPost: function () {
            var postId = Posts.findOne();
            return postId._id;
        },
        // We add some initial data
        addInitialPosts: function () {
            var now = new Date().getTime();

            // create two users
            var tomId = Meteor.users.insert({
                profile: {name: 'Tom Coleman'}
            });
            var tom = Meteor.users.findOne(tomId);
            var sachaId = Meteor.users.insert({
                profile: {name: 'Sacha Greif'}
            });
            var sacha = Meteor.users.findOne(sachaId);

            var telescopeId = Posts.insert({
                title: 'Introducing Telescope',
                userId: sacha._id,
                author: sacha.profile.name,
                url: 'http://sachagreif.com/introducing-telescope/',
                submitted: new Date(now - 7 * 3600 * 1000),
                commentsCount: 2
            });

            Comments.insert({
                postId: telescopeId,
                userId: tom._id,
                author: tom.profile.name,
                submitted: new Date(now - 5 * 3600 * 1000),
                body: 'Interesting project Sacha, can I get involved?'
            });

            Comments.insert({
                postId: telescopeId,
                userId: sacha._id,
                author: sacha.profile.name,
                submitted: new Date(now - 3 * 3600 * 1000),
                body: 'You sure can Tom!'
            });

            Posts.insert({
                title: 'Meteor',
                userId: tom._id,
                author: tom.profile.name,
                url: 'http://meteor.com',
                submitted: new Date(now - 10 * 3600 * 1000),
                commentsCount: 0
            });

            Posts.insert({
                title: 'The Meteor Book',
                userId: tom._id,
                author: tom.profile.name,
                url: 'http://themeteorbook.com',
                submitted: new Date(now - 12 * 3600 * 1000),
                commentsCount: 0
            })
        }
    });


})();