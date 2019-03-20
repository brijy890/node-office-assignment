var express = require('express');
var hbs  = require('hbs');

var app = express();

app.set('view engine', 'hbs');

hbs.registerPartial('header');

// Handlebars.registerHelper('getYear', () => {
//   var d = new Date();
//   var year = d.getFullYear();
//   return year;
// });

app.get('/', (req, res) => {
	res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
	res.render('pages/about', {title: 'About'});
});

app.get('/contact', (req, res) => {
	res.render('pages/contact', {title: 'Contact'});
});

app.listen(3000, () => {
	console.log('Server Running on port 3000');
});