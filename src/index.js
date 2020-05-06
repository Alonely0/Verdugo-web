const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// middlewears 

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/proyectos-basados', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/proyectos-basados/index.html'));
});


// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening port
app.listen(app.get('port'), () => {
    console.log('Funcionando en el puerto', app.get('port'))
});