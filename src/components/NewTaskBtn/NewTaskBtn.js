import './NewTaskBtn.scss'

function NewTaskBtn({taskHandler}) {
  return (
    <button
      className="new_card__wrapper"
      onClick={taskHandler}
    >
      <p className="new_card__title">Создать новую задачу</p>
    </button>
  )
}

export default NewTaskBtn;