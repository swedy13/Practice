Players = new Mongo.Collection("players");

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
                   "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon",
                   "Zoltan Olah", "Dominic Nguyen", "Tom Coleman",
                   "Dave Burles", "Tim Hingston", "JoAnna Miller",
                   "Laurie Pellicano", "Sophie Oldfield"];
      _.each(names, function (name) {
        Players.insert({
          name: name,
          score: Math.floor(Random.fraction() * 10) * 5
        });
      });
    }
  });
}