import './NewTaskForm.scss'

function NewTaskForm(props) {
  const task = props.task;

  return (
    <div className="task">
      <input type="text"></input>
    </div>
  )
}

export default NewTaskForm;