import './Task.scss'

function Task(props) {
  const task = props.task;

  return (
    <div className="task">
      <p className="task__number_task">
        {`#${task}`}
      </p>
    </div>
  )
}

export default Task;