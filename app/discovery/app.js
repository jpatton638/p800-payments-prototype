var app = require('../../lib/subapp.js')(__dirname);

app.get('/', function (req, res) {
  res.render('index');
});

// Post request
// Get a post value from index

app.post('/check-details', function (req, res) {
  var repayAmount = req.body.repayment;
  //console.log( "The repayment amount is " + repayment)
  res.render('check-details', {repayment: repayAmount} );
  //res.redirect('check-details', {title: 'Home page'});
});


module.exports = app;