modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    render: function() {
      return (
        React.createElement("p", {task_id:  this.props.id},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
