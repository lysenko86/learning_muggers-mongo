const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/muggers-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use('/api', require('./api'));

app.listen(4000, () => {
	console.log('Server started on port 4000...');
});
