TwitterPost = React.createClass({
	render() {
		let twitterPost = this.props.twitterPost;
		
		return (
			<li className={"post" + (twitterPost.active ? "-active" : "")}>
				<img className="avatar" src={tweet.avatar}/>
				<blockquote>
					<cite>
						<a href={"http://www.twitter.com/" + twitterPost.screenname}>{twitterPost.author}</a>
						<span className="userId">@{twitterPost.screenname}</span>
					</cite>
					<span className="post-content">{twitterPost.body}</span>
				</blockquote>
			</li>
		)
	}
});
