var Libro = Backbone.Model.extend({
	urlRoot:'/libros',
	initialize: function(){
		console.log('se ha creado una nueva instancia');
		this.on('change', function(){
			console.log('el modelo ha cambiado');
		}); 
	},
	defaults: {
		autor: 'Desconocido'
	},
	validate: function(atributos) {
		if(!atributos.titulo) {
			return 'Debe tener un titulo.';
		}
	}
});
//initialize: es llamado cuando creamos una nueva instancia de un modelo
//default: Nos permite añadir atributos por defecto 





