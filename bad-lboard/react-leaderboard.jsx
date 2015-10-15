var POINTS = 5;

var Leaderboard = React.createClass({
  mixins: [ReactMeteor.Mixin],

  propTypes: {
    collections: React.PropTypes.objectOf(
      React.PropTypes.instanceOf(Mongo.Collection)
    ).isRequired
  },

  getInitialState: function() {
    return {
      selectedPlayerId: null,
      players: []
    };
  },

  getMeteorState: function() {
    return {
      players: this.props.collections.Players.find({}, {sort: {score: -1, _id: 1}}).fetch()
    }
  },
  
  selectedPlayer: function() {
    return _.find(this.state.players, function(x) { 
      return x._id === this.state.selectedPlayerId;
    }.bind(this));
  },
  
  handlePlayerSelected: function(id) {
    this.setState({selectedPlayerId: id});
  },
  
  handleAddPoints: function() {
    this.props.collections.Players.update(this.state.selectedPlayerId, {$inc: {score: POINTS}});
  },
  
  render: function() {
    return (
      <div>
        <div className="leaderboard">
          <PlayerList {...this.state} onPlayerSelected={this.handlePlayerSelected} />
        </div>
        <PlayerSelector selectedPlayer={this.selectedPlayer()} onAddPoints={this.handleAddPoints} />
      </div>
    );
  }
});

var PlayerSelector = React.createClass({
  propTypes: {
    selectedPlayer: React.PropTypes.object
  },

  render: function() {
    var node;
    
    if (this.props.selectedPlayer) {
      node = <div className="details">
        <div className="name">{this.props.selectedPlayer.name}</div>
        <button className="inc" onClick={this.props.onAddPoints}>Add {POINTS} points</button>
      </div>;
    } else {
      node = <div className="message">Click a player to select</div>;
    }
  
    return node;
  }
});

var PlayerList = React.createClass({
  propTypes: {
    players: React.PropTypes.array.isRequired,
    selectedPlayerId: React.PropTypes.string
  },
  
  render: function() {
    // harmony destructuring assignment
    var { players, selectedPlayerId, ...other } = this.props;

    var playerNodes = players.map(function(player, index) {
      var selected = selectedPlayerId === player._id;

      return (
        <Player {...other} player={player} key={index} selected={selected} />
      );
    });
    return (
      <div className="playerList">
        {playerNodes}
      </div>
    );
  }
});

var Player = React.createClass({
  propTypes: {
    // This could check instancOf Player if we had models
    player: React.PropTypes.object.isRequired,
    onPlayerSelected: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool.isRequired
  },
  
  handleClick: function(event) {
    this.props.onPlayerSelected(this.props.player._id);
  },
  
  render: function() {
    // React addons aren't working just yet https://github.com/meteor/meteor/issues/3505
    // var classes = React.addons.classSet({
    //   'player': true,
    //   'selected': this.props.selected
    // });
    
    var classes = 'player';
    if (this.props.selected)
      classes += ' selected';

    return (
      <li className={classes} onClick={this.handleClick}>
        <span className="name">{this.props.player.name}</span>
        <span className="score">{this.props.player.score}</span>
      </li>
    );
  }
});

var Body = React.createClass({
  propTypes: {
    collections: React.PropTypes.objectOf(
      React.PropTypes.instanceOf(Mongo.Collection)
    ).isRequired,
    where: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="app">
        <h3>Rendered on the {this.props.where}</h3>
        <div className="outer">
          <div className="logo"></div>
          <h1 className="title">Leaderboard</h1>
          <div className="subtitle">Select a scientist to give them points</div>
          <Leaderboard collections={collections} />
        </div>
      </div>
    );
  }
});

var collections = {
  Players: Players
};

if (Meteor.isServer) {
  // add a raw connect handler for / that renders the body with react.
  var url = Npm.require("url");
  
  WebApp.rawConnectHandlers.use(
    Meteor.bindEnvironment(function(req, res, next) {
      if (url.parse(req.url).path === '/') {
        req.body =
          React.renderToString(<Body collections={collections} where='server' />);
        req.head = '<title>Leaderboard</title> \
          <meta name="viewport" content="width=device-width, user-scalable=no"> \
          <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600" rel="stylesheet" type="text/css">'
      }

      next();
    }, 'ssr-router')
  );
} else {
  // on the client, just render to the body
  Meteor.startup(function() {
    // wait 3 seconds to show folks that the output is indeed server rendered
    Meteor.setTimeout(function() {
      React.render(<Body collections={collections} where='client' />, document.body);
    }, 3000);
  });
}

