import React from 'react';

import NewCardBtn from '../NewCardBtn/NewCardBtn'
import TaskList from '../TaskList/TaskList'

import './PageMain.scss'

const tasks = ["1", "2", "3", "4"]

function PageMain() {
  return (
    <main className="page_main">
      <div className="container">
        <TaskList tasks={tasks} />
        <NewCardBtn />
      </div>
    </main>
  );
}

export default PageMain;