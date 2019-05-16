const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../public'));
// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', routes);

app.listen(port, () => console.log(`Nav server listening on port ${port}!`))