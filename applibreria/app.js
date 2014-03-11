var express 	= require('express'),
	path 		= require('path'),
	fs   		= require('fs'),
	uuid   		= require('node-uuid');

var app 		= express(),
	baseDeDatos = fs.readFileSync('./datos.json').toString();

var datos 		= JSON.parse(baseDeDatos);

app.use(express.static(path.join(__dirname, 'public')));

// Add POST, PUT, DELETE methods to the app
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());

// Pagina de Inicio: http:localhost:4000
app.get('/', function (req,res){
	res.sendfile(__dirname + '/index.html');
});

// API REST

// Mostrar todos los libros
app.get('/libros', function(req,res) {
	res.send(datos);
});

// Mostrar el detalle de un libro
app.get('/libros/:id', function(req,res,next) {
	var dato;

	for ( var i=0; i= 0; i--) {
		libro = datos[i];

		if(libro.id === req.params.id){
			datos[i] = req.body;
		}
	}

	res.send(200);
});


app.listen(3000);