React.render(
	<TodoApp />,
	document.getElementById('myApp')
);

var TodoApp = React.createClass({
	render: function(){
		return (
			<div className = "TodoApp">
				<TodoCreator/>
				<TodoList todos = {this.statue.todos} />
			</div>
		)
	}
})