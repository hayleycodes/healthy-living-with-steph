const express = require('express');

const app = express();
app.use(express.static('templates'));
app.use(express.static('style'));


app.get('/', function (req, res) {
	res.send("Hello World!");
})

app.listen(3000, function() {
	console.log("Example app listening for cats");
});
