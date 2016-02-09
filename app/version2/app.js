

var app = require('../../lib/subapp.js')(__dirname);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/verify-start', function (req, res) {
  res.render('verify-start');
});


// Post request
// Get a post value from index

app.post('/verify-start', function (req, res) {
  res.redirect('verify-sign-in');
});

app.post('/verify-sign-in', function (req, res) {
  res.redirect('verify-post-office');
});

app.post('/bank-account', function (req, res) {
  var repayAmount = req.body.repayment;
  res.render('bank-account', {repayment: repayAmount} );
});

app.post('/check-details', function (req, res) {

  var accountName = req.body.accountname;
  var accountNumber = req.body.accountnumber;
  var sortcode1 = req.body.sortcode1;
  var sortcode2 = req.body.sortcode2;
  var sortcode3 = req.body.sortcode3;
  var buildingsociety = req.body.buildingsociety;

  res.render('check-details', {
    accountName: accountName,
    accountNumber: accountNumber,
    sortcode1: sortcode1,
    sortcode2: sortcode2,
    sortcode3: sortcode3,
    buildingsociety: buildingsociety}
  );

});

app.post('/refund-and-bank-details', function (req, res) {
  var repayAmount = req.body.repayment;
  res.render('refund-and-bank-details', {repayment: repayAmount} );
});



module.exports = app;