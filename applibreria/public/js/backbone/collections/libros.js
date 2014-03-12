//Las colecciones son un conjunto ordenado de modelos

var LibrosCollection = Backbone.Collection.extend({
	model: Libro,
	url:'/libros'
});
