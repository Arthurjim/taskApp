import React from 'react';
import {useDispatch} from 'react-redux';
import '../styles/Componets/SelectTasks.css'
const SelectTasks = () => {
  const dispatch = useDispatch();

  const handleSection = (section) => {
    dispatch({
      type: "SET_TASK_BY_SECTION",
      payload: section,
    });
  };
  return (
    <div className="select-kind">
        <div>
          <label>
            SELECT <i className="fas fa-chevron-circle-down"></i>
          </label>
          <ul>
            <li onClick={()=>{handleSection('school')}}>SCHOOL</li>
            <li onClick={()=>{handleSection('job')}}>JOB</li>
            <li onClick={()=>{handleSection('friend')}}>FRIENDS</li>
            <li onClick={()=>{handleSection('others')}}>OTHER</li>
          </ul>
        </div>
      </div>
  )
}

export default SelectTasks
