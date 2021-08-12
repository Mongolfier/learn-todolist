import React, {useState} from 'react';

import NewTaskBtn from '../NewTaskBtn/NewTaskBtn'
import TaskList from '../TaskList/TaskList'
// import Task from '../Task/Task'

import './PageMain.scss'


function PageMain() {
  const [tasks, setTasks] = useState([])
  const taskHandler = () => setTasks(prevState => [...prevState, `${prevState.length + 1}`])

  return (
    <main className="page_main">
      <div className="container">
        <TaskList tasks={tasks} />
        <NewTaskBtn
          taskHandler={taskHandler}
        />
      </div>
    </main>
  );
}

export default PageMain;