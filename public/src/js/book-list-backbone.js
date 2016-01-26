var Books = Backbone.Collection.extend({
  url: '/api/v0.1/books',
  parse: function(data) {
    return data.data;
  }
});
