angular.module('bookStoreApp', [])
.controller('BookListController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = '/api/v0.1/books';

  $scope.fetch = function() {
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      then(function(response) {
        $scope.status = response.status;
        $scope.bookList.books = response.data.data;
      }, function(response) {
        $scope.data = response.data || "Request failed";
        $scope.status = response.status;
    });
  };

  $scope.fetch();
}]);
