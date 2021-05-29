import axios from "axios";
import React, { useState } from "react";
import moment from 'moment'
import "../styles/Componets/Formulario.css";
const CreateForm = () => {
  const [section, setSection] = useState();
  const initialState = {
    taskname: "",
    date_task: "",
    time_task: "",
    estimated_time: "",
    
  };
  const handleSection = (sectionN) => {
    setSection(sectionN)
  };
  const [dropdown, setDropdown] = useState(false);

  const [datas, setData] = useState(initialState);

  const handleClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setData({ ...datas, [name]: value,section });
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(datas)
    axios.post('http://localhost:3001/tasks',datas)
  }
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div
        className={`${dropdown ? "dropdown open" : "dropdown"}`}
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
       SELECT TYPE
        <ul>
          <li
            onClick={() => {
              handleSection("school");
            }}
          >
            School
          </li>
          <li
            onClick={() => {
              handleSection("job");
            }}
          >
            Job
          </li>
          <li
            onClick={() => {
              handleSection("school");
            }}
          >
            Friends
          </li>
          <li
            onClick={() => {
              handleSection("ohters");
            }}
          >
            Others
          </li>
        </ul>
      </div>
      <p>Name</p>
      <input
        type="text"
        name="taskname"
        id="taskname"
        placeholder="Name"
        onChange={handleClick}
      />
      <p>Date</p>

      <input
        type="date"
        name="date_task"
        id="date_task"
        placeholder="Name"
        onChange={handleClick}
      />
      <p>Time</p>

      <input
        type="time"
        name="time_task"
        id="time_task"
        placeholder="Name"
        onChange={handleClick}
      />
      <p>Estimated time</p>

      <input
        type="number"
        name="estimated_time"
        id="estimated_time"
        onChange={handleClick}
        placeholder="1.5 hrs / .20 min "
      />
      <p>Kind</p>

      
      <button>Enviar</button>
    </form>
  );
};

export default CreateForm;
