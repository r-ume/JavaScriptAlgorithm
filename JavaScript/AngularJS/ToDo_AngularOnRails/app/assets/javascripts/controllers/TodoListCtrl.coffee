angular.module('ToDoApp').controller "TodoListCtrl", ($scope, TodoList, Todo) ->
  $scope.init = ->
    @todoListService = new TodoList(serverErrorHandler)
    $scope.list = @todoListService.find(1)
    @todoService = new Todo(1, serverErrorHandler)
    serverErrorHandler = ->
      alert("An error occurred in the server. Reload the page again")

  $scope.addTodo = (todoDescription) ->
    todo = @todoService.create(description: todoDescription, completed: false)
    $scope.init.todos.unshift(todo)
    $scope.todoDescription = ""

  $scope.deleteTodo = (todo) ->
    @todoService.delete(todo)
    $scope.list.todos.splice($scope.list.todos.indexOf(todo), 1)

  $scope.toggleTodo = (todo) ->
    @todoService.update(todo, completed: todo.completed)