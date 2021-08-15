import './NewTask.scss'

function NewTask(props) {
  const task = props.task;

  return (
    <div className="task">
      <input type="text"></input>
    </div>
  )
}

export default NewTask;