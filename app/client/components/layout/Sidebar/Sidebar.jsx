Sidebar = React.createClass({

	getInitialState() {
		return {
			sidebar: false,
			footer: false,
		};
	},

	openSidebar() {
		this.setState({ sidebar: true });
	},

	closeSidebar() {
		this.setState({ sidebar: false });
	},

	openFooter() {
		this.setState({ footer: true });
	},

	closeFooter() {
		this.setState({ footer: false });
	},
	
	render() {
		return (
			<div>
				<div id="sidebar">
					<div onClick={this.state.sidebar ? this.closeSidebar : this.openSidebar}>
						<SubscriptionsSB/>
					</div>
					<div onClick={this.state.sidebar ? this.closeSidebar : this.openSidebar}>
						<TopScoresSB/>
					</div>
					<div onClick={this.state.sidebar ? this.closeSidebar : this.openSidebar}>
						<InboxSB/>
					</div>
					<div onClick={this.state.footer ? this.closeFooter : this.openFooter}>
						<FooterSB/>
					</div>
				</div>
				<div>
					{this.state.sidebar ? (
						<SidebarPanel className=" sb-open">
						{this.props}
						</SidebarPanel>
					 ) : (
						 <SidebarPanel className=" sb-closed"/>
					 )}
				</div>
				<div>
					{this.state.footer ? (
						<Footer className="footer-open">
						{this.props}
						</Footer>
					 ) : (
						 <Footer className="footer-closed"/>
					 )}
				</div>
			</div>
		)
	}
});
