const {RaisedButton, Toolbar, ToolbarTitle, FontIcon} = mui;
const ThemeManager = new mui.Styles.ThemeManager();


Leaderboard = React.createClass({
  mixins: [ReactMeteorData],
	
  getInitialState: function () {
    return {
      selectedPlayerId: null  
    };
  },
	
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
	
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
	
  getMeteorData() {
    return {
      players: Players.find({}, { sort: { score: -1, name: 1 } }).fetch(),
      selectedPlayer: Players.findOne(this.state.selectedPlayerId)
    }
  },
	
  selectPlayer(playerId) {
    this.setState({
      selectedPlayerId: playerId
    });
  },
	
  addPointsToPlayer(playerId) {
    Players.update(playerId, {$inc: {score: 5}});
  },
	
  render() {
    let bottomBar;
		
    if (this.state.selectedPlayerId) {
      bottomBar = (
				<div>
          <div className="name">{this.data.selectedPlayer.name}</div>
          <RaisedButton
            onClick={this.addPointsToPlayer.bind(
										 this, this.state.selectedPlayerId)}
            style={{float: "right"}}
            label="Add 5 points"
            secondary={true}/>
				</div>
      )
    } else {
      bottomBar = <div className="message">Click a player to select</div>;
    }

    return (
			<Box>
        <Leaders players={this.data.players}
          selectedPlayerId={this.state.selectedPlayerId}
          onPlayerSelected={this.selectPlayer}
					style={{position: 'absolute'}} />
        { bottomBar }
			</Box>
    )
  }
});
