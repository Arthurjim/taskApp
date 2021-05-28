import { useState, useEffect } from "react";
const API = "http://localhost:3001/tasks/";

const useInitialState = () => {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
  return task;
};

export default useInitialState;
