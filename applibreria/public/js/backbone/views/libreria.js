/*
//podemos crear desde cero el elemento dom para la vista
var Libreria = Backbone.View.extend({
	tagName 	: 'span',
	className 	: 'nombreClase',
	id 			: 'nombreId'
});
*/

//o tomar un elemento existente
var Libreria = Backbone.View.extend({
	el: '.vista',
	render: function(){
		this.$el.append('<p>Método render en acción<p/>');
	},
	//si queremos llamar al método render cada vez que se cree una vista
	//lo debemos incluir dentro de initialize
	initialize: function(){
		this.render();
	},
	events: {
		'click .cambiarColor' : 'cambiarColor'
	},

	cambiarColor : function(){
		this.$el.css('color', 'red');
	}
});

