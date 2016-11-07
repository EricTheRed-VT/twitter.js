const express = require( 'express' );
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {
	nocache: true
});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

const port = 3000;
app.listen(port, (request, response) => {
	console.log('I am emphatically waiting on port: ', port);
});

app.use(morgan('combined'));

app.get('/', (req,res,next) => {
	res.render('index.html', { 
		title: 'Hall of Fame',
		people: [
			{name: 'Gandalf'},
			{name: 'Frodo'},
			{name: 'Hermoine'}
		]
	});
});

