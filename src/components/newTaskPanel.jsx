import React from "react";
import {useHistory} from 'react-router';
import "../styles/Componets/Sections.css";
const NewTaskPanel = () => {
  const history = useHistory()

  const redirectForn=()=>{
    console.log('click')
    history.push('/create')
  }
 
  return (
    <div className="content_section">
      <button onClick={redirectForn}>
        Create task
      </button>
    </div>
  );
};

export default NewTaskPanel;
