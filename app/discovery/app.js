var app = require('../../lib/subapp.js')(__dirname);

app.get('/', function (req, res) {
  res.render('index');
});

// Post request
// Get a post value from index

app.post('/bank-account', function (req, res) {
  var repayAmount = req.body.repayment;
  //console.log( "The repayment amount is " + repayment)
  res.render('bank-account', {repayment: repayAmount} );
});


app.post('/check-details', function (req, res) {

  //console.log(req.body)
  var accountNumber = req.body.accountnumber;
  var sortcode1 = req.body.sortcode1;
  var sortcode2 = req.body.sortcode2;
  var sortcode3 = req.body.sortcode3;
  //console.log( "The repayment amount is " + repayment)
  res.render('check-details', {
    accountNumber: accountNumber,
    sortcode1: sortcode1,
    sortcode2: sortcode2,
    sortcode3: sortcode3}
  );
  //res.render('check-details', {sortcode1: sortcode1});
});


module.exports = app;