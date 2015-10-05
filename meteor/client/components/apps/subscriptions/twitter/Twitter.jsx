
/* 
	 twitterPosts = new Mongo.Collection("twitterPosts");

	 let schema = new mongoose.Schema({
	 twid: String,
	 active: Boolean,
	 author: String,
	 avatar: String,
	 body: String,
	 date: Date,
	 screenname: String
	 });

	 schema.statics.getTwitterPosts = function(page, skip, callback) {
	 let twitterPosts = [];
	 let start = (page * 10) + (skip * 1);

	 twitterPost.find({}, 'twid active author avatar body date screenname', {
	 skip: start,
	 limit: 10
	 }).sort({
	 date: 'desc'
	 }).exec(function(err, docs) {
	 if (!err) {
	 twitterPosts = docs;
	 twitterPosts.forEach(function(tweet) {
	 twitterPos.active = true;
	 });
	 }
	 callback(null, twitterPosts)
	 });
	 }

	 let twitterPost = mongoose.model('twitterPost', schema);
	 module.exports = twitterPost;

 */
