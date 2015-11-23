import './routes';


const context = require.context('../../modules', true, /\/client\/(.*)\-test\.jsx?$/);
context.keys().forEach(context);
