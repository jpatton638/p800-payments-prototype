var app = require('../../lib/subapp.js')(__dirname);

require('./lib/new-iteration.js')(app);
require('./lib/edit-iteration.js')(app);

app.use(express.basicAuth('team9', 't34m9-hmrc'));

module.exports = app;