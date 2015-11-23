const context = require.context('../../modules', true, /\/server\/(.*)\/integration\/(.*)\-fixtures\.jsx?$/);
context.keys().forEach(context);

if (process.env.FRAMEWORK === 'jasmine-server-integration') {
  // Run integration tests on server
  const context = require.context('../../modules', true, /\/server\/(.*)\/integration\/(.*)\-test\.jsx?$/);
  context.keys().forEach(context);
}
