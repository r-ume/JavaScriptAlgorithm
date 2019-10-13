angular.module('TodoApp').controller "DashboardCtrl", ($scope, TodoList) ->
  $scope.init = ->
    @listsService = new TodoList(serverErrorHandler)
    $scope.lists = @listsService.all()

  $scope.createList = (listName) ->
    list = @listsService.create(name: listName)
    $scope.lists.push(list)
    $scope.listName = ""

  $scope.deleteList = (list, index) ->
    if confirm "Are you sure that you would like to delete the list?"
      @listsService.delete(list)
      $scope.lists.splice(index, 1)

  serverErrorHandler = ->
    alert("Error Happened. Reload the page again")