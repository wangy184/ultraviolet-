const express = require('express');
var app = express()
var bodyParser = require('body-parser')

const fs = require('fs')

app.use(express.static(__dirname + '/public'))
//app.use(bodyParser.urlencoded({extended: false}))
//app.use(bodyParser.json())
app.use(express.json())
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })
app.post('/submit', function (req, res) {
	
	console.log(req.body);
	fs.appendFile('./userresponses.dat', JSON.stringify(req.body) + '\n', (err) => {
		if (err) console.log(err);
	});
	return res.end('done');
})

app.get('/nate', function (req, res) {
	const file = './userresponses.dat';
  res.download(file)
})

app.listen(process.env.PORT || 3000)