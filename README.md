#Curso de Backbone de [devcode.la](http://www.devcode.la/)

####MODELOS

    var primerLibro = new Libro ({
        titulo      : "La odisea",
        autor       : "Homero",
        categoria   : "Literatura"
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
        titulo  : "otro titulo",
        autor   : "otro autor"
    });
        //pasamos un objeto con los pares key/val que queremos modificar

    var segundoLibro = new Libro ({
        titulo      : "Ladrillo de Tormes",
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
        titulo      : "Demian",
        autor       : "Herman Hesse",
        categoria   : "Literatura"
    });
    libroDos.save(); //hara una peticion POST sobre la url "/libros" siempre q no haya una id

    libroUno.set({autor:"Desconocido"});
    libroUno.save(); //ahora save() hace un PUT a la url /libros/{id}, o sea a "/libros/1"

    libroUno.destroy(); //hace un DELETE a la url "/libros/1"

####VISTAS

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

####COLECCIONES

    //La ppal funcionalidad de una coleccion es agregar y eliminar modelos
    //para lo cual existen dos métodos: add() remove()
    var a = new Libro({ titulo: 'title 1', autor : 'au 1'});
    var b = new Libro({ titulo: 'title 2', autor : 'au 2'});
    var c = new Libro({ titulo: 'title 3', autor : 'au 3'});
    var libros = new LibrosCollection([a,b]);
    libros.toJSON();
    libros.add(c);
    libros.toJSON();
    libros.remove(a); //o mas de uno con una lista: libros.remove([a,b]);
    libros.toJSON();

    //Vemos como devolver modelos de una coleccion
    var d = new Libro({ titulo: 'dia D', autor : 'lanata', id:6});
    var libros = new LibrosCollection(d);
    modeloDevuelto = libros.get(6);
    modeloDevuelto.toJSON();
    
    var e = new Libro({ titulo: 'otro puto libro', autor : 'fuckencio', id:6});
    var modelCid = libros.add(e);
    //e.cid="c5";
    modelCid = libros.get("c5");
    modelCid.toJSON();

    //Podemos escuchar eventos cuando se agrega o elimina un modelo de la coleccion
    var libros = new LibrosCollection();
    libros.on('add', function(){
        console.log('Se agrego un nuevo modelo a la coleccion');
    });
    libros.on('change', function(model){
        console.log('el modelo con titulo ' + model.titulo + ' ha cambiado');
    });
    libros.add([a,b]);

    //el método set() genera una actualizacion inteligente de la coleccion
    var libros = new LibrosCollection();
    libros.add([a,b]);
    libros.set([
        {id: 4, titulo: 'asd', autor: 'chicha'},
        {id: 5, titulo: 'dfg', autor: 'rrone'}
    ]);
    libros.toJSON();

    //El método reset() reemplaza una coleccion con una nueva lista de modelos
    libros.reset({id: 7, titulo: 'eqeqeqeq', autor: 'asdasdasd'});
    libros.toJSON();
    //si no pasamos ningun valor a reset() podemos usar este metodo para limpiar una coleccion.
    libros.reset();

    //Sincronizar los datos del servidor con nuestras colecciones.
    //para esto se usa el método fetch()
    //con fetch() traemos los datos del server y los agregamos como modelos a nuestra coleccion
    //para que fetch() funcione hay que agregar la propiedad url a la coleccion
    var libros = new LibrosCollection();
    libros.fetch();
    libros.toJSON(); //Efectivamente, ha traido los datos del servidor FUCK YEAH BABY!!

