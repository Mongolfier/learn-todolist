import React, { useState, useEffect } from 'react';

import './PageHeader.scss';


function PageHeader() {
  const [pageTitle, setTitle] = useState("Мой TODO лист")

  useEffect( () => {
    document.title = pageTitle;
  });

  return (
    <header className="page_header">
      <div className="container">
        <h1 className="page_title">{pageTitle}</h1>
        <input
          type="text"
          className="page_title__edit"
          value={pageTitle}
          onChange={e => setTitle(e.target.value)}
        >
        </input>
      </div>
    </header>
  )
}

export default PageHeader;