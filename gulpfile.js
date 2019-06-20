const loadUsers = require('./fixtures/index');

module.exports.default = function defaultTask(cb) {
  // place code for your default task here
  cb();
};

module.exports.loadUsers = async function() {
  console.log('loadUsers...');
  await loadUsers();
};
