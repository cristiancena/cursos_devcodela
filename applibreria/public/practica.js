//PRACTICA

//Modelos en Backbone

	var primerLibro = new Libro ({
		titulo 		: "La odisea",
		autor 		: "Homero",
		categoria 	: "Literatura"
	});

	primerLibro.toJSON();
	//Object{titulo:"La odisea", autor:"Homero", categoria:"Literatura"}
	//Porque .toJSON() nos devuelve el contenido del modelo

	//GET: Obtener
	primerLibro.get('titulo');
		//"la odisea"
		//Porque el método GET nos devuelve el valor de un atributo

	//SET: Modificar. Hay dos maneras de hacerlo
	primerLibro.set('autor', 'otro autor');
		//Pasamos dos argumentos, el 1ro, el nombre del campo, el 2do el nuevo valor
	primerLibro.set({
		titulo 	: "otro titulo",
		autor 	: "otro autor"
	});
		//pasamos un objeto con los pares key/val que queremos modificar

	var segundoLibro = new Libro ({
		titulo 		: "Ladrillo de Tormes",
	});
	primerLibro.toJSON();
	//Se añade el autor por defecto con defaults
	//Object{titulo:"Ladrillo de Tormes", autor:"Desconocido""}

	//Cuando usamos el método set automáricamente se desencadenan dos eventos:
	//change y change:nombre_atributo. Podemos enlazar estos eventos a una
	//funcion para que se dispare cada vez que se modifique el modelo

	segundoLibro.set('autor', 'otro autor');
	//El modelo ha cambiado
	
	//Sincronización de Modelos
	//Definimos la prop urlRoot como una url que permite solicitudes REST
	var libroUno = new Libro({
		id : '1'
	});
	libroUno.fetch(); //Hace una peticion get con la id del modelo "GET /libros/1"
	libroUno.toJSON();

	var libroDos = new Libro({
		titulo 		: "Demian",
		autor 		: "Herman Hesse",
		categoria 	: "Literatura"
	});
	libroDos.save(); //hara una peticion POST sobre la url "/libros" siempre q no haya una id

	libroUno.set({autor:"Desconocido"});
	libroUno.save(); //ahora save() hace un PUT a la url /libros/{id}, o sea a "/libros/1"

	libroUno.destroy(); //hace un DELETE a la url "/libros/1"

//Cap_4_Vistas
	//las vistas contienen la lógica de como se deben presentar los datos al usuario
	//pero no el html, éste está en los templates

	//la propiedad "el" tiene toda la vista contenida en un elemento dom
	var appView = new Libreria();
	appView.el;
	//si anteponemos $ a la propiedad 'el' ('$el') podemos usar todo el potencial de jquery
	appView.$el.text('hola');
	appView.$el.append('<b>texto en negritas</b>');
	appView.$el.append('<b>texto en negritas</b>');
	
	//el método render() renderiza la vista!!! 
	appView.render();

	//eventos: se registran dentro de un hash
	//su forma es: 'nombre-evento Selector':'Nombre_del_callback'
















