import { Route, IndexRoute } from 'react-router';
import AdminApp from './AdminApp';
import Dashboard from './Dashboard';


export default (
  <Route path="/admin" component={AdminApp}>
    <IndexRoute component={Dashboard} />
  </Route>
);


/* import AdminApp from './AdminApp';
	 import Dashboard from './Dashboard';


	 export default {
	 component: AdminApp,
	 childRoutes: [{
	 path: 'dashboard',
	 component: Dashboard
	 }]
	 };*/
