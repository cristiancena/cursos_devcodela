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
	//