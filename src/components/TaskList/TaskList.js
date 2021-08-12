import React from 'react';
import Task from '../Task/Task'
import './TaskList.scss'

function TaskList(props) {
  const tasks = props.tasks;
  const taskList = tasks.map( task => <Task task={task} /> );

  return (
    <section className="task_list">
      {taskList}
    </section >
  )
}

export default TaskList;