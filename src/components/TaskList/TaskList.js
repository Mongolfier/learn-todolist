import React, { useState } from 'react';
import Task from '../Task/Task'

function TaskList(props) {
  const tasks = props.tasks;
  console.log(tasks)
  const taskList = tasks.map( task => <Task task={task} /> );


  return (
    <section>
      {taskList}
    </section >
  )
}

export default TaskList;