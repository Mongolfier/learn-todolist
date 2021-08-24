import React, {useState} from 'react';

import NewTaskBtn from '../NewTaskBtn/NewTaskBtn'
import TaskList from '../TaskList/TaskList'
// import Task from '../Task/Task'
import NewTaskForm from '../NewTaskForm/NewTaskForm';

import './PageMain.scss'


function PageMain() {
  const [tasks, setTasks] = useState([])
  const taskHandler = () => setTasks(prevState => [...prevState, `${prevState.length + 1}`])
  
  const [isNewTask, setNewTask] = useState(false)
  const newTaskHandker = () => setNewTask(!isNewTask)
  console.log(isNewTask)

  return (
    <main className="page_main">
      <div className="container">
        <TaskList tasks={tasks} />
        <NewTaskBtn
          taskHandler={taskHandler}
          newTaskHandker={newTaskHandker}
        />
        {isNewTask && <NewTaskForm />}
      </div>
    </main>
  );
}

export default PageMain;