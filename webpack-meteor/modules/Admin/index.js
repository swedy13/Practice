
/* export default {
	 path: '/admin',
	 indexRouter: {
	 onEnter: function(nextState, replaceState) {
	 replaceState(null, '/admin/dashboard');
	 }
	 },
	 getChildRoutes(location, cb) {
	 if (Meteor.isClient) {
	 require.ensure(
	 [],
	 require => {
	 cb(null, require('./routes'))
	 },
	 '/admin');
	 } else {
	 global.__CHUNK__COLLECTOR__.push('/admin')
	 cb(null, require('./routes'))
	 }
	 }
	 }; */
