$.ajax({
  type: 'GET',
  url: '/api/v0.1/books',
  dataType: 'json',
  cache: false,
  success: function(data){
    handleData(data);
  }
});

function handleData(data){
  new Vue({
    el: '#book-box',
    data: {
      books: data.data
    }
  })
}
