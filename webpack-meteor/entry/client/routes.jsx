import { Route } from 'react-router';
import counterRoutes from '../../modules/Counter/client/routes.jsx';


ReactRouterSSR.Run(
	<Route>
		{counterRoutes}
	</Route>
);
