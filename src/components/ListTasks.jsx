import React, { useEffect } from "react";
import "../styles/Componets/ListTask.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import useIntialState from '../hooks/useInitialState';
import moment from "moment";
const ListTasks = ({children}) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    if(state.taskSection !=='') {
    return state.taskListSection
    }

    return state.taskList;

  });

  useEffect(() => {
    axios("http://localhost:3001/tasks/")
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: "SET_TASK_LIST",
          payload: data,
        });
      });
  }, [dispatch]);
  return (
    <div className="content_listTask">
      {children}
      <div className="tasks">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>TIME TO DO IT</th>
              <th>ESTIMATED HOUR</th>
              <th>DAY</th>
            </tr>
          </thead>
          {tasks.map((item) => (
            <tbody key={item.task_id}>
              <tr>
                <td>{item.task_id} </td>
                <td>{item.taskname} </td>
                <td>{moment(item.time_task, "HH:mm:ss ").format("LT")} </td>
                <td>
                  {moment(item.estimated_time, "HH:mm").format("HH:mm")}
                  {moment(item.estimated_time, "HH:mm").format("HH:mm") <
                  "01:00"
                    ? " min"
                    : " hrs"}
                </td>
                {

                }
                {
                  console.log(  moment().format("MMM Do YY") >moment(item.date_task).format("MMM Do YY"))


                }
                {
                moment(item.date_task).format("MMM Do YY") <
                moment().format("MMM Do YY") ? (
                  <td className="taskFail">
                    {moment(item.date_task).format('L')}
                  </td>
                ) : (
                  <td className="taskSuccess">
                    {moment(item.date_task).format('L')}
                  </td>
                )}
              </tr>
            </tbody>
          ))}
          {/* </table>
            // <div className="task" key={item.task_id}>
            //   <p className="task_id">{item.task_id} </p>
            //   <p className="task_name"> {item.taskname}</p>
            //   <p className="task_hour">{item.time_task}</p>
            //   <p>{item.estimated_time}</p>
              


            // </div>
         
        ))} */}
        </table>
      </div>
    </div>
  );
};

export default ListTasks;
