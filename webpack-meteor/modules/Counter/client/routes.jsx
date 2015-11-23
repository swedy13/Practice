import { Route, IndexRoute } from 'react-router';

import CounterApp from './CounterApp';
import CounterMain from './CounterMain';


export default (
  <Route path="/" component={CounterApp}>
    <IndexRoute component={CounterMain} />
  </Route>
);
