import React from 'react';
import Header from '../components/Header';
import ListTasks from '../components/ListTasks';
import NewTaskPanel from '../components/newTaskPanel';
import SelectTasks from '../components/SelectTasks';
import '../styles/App.css'
const Home = () => {
   return ( 
      <div className="container__home">
         <Header/>
         <div className="content__task">
            <NewTaskPanel/>
            <ListTasks>
             <SelectTasks/>
            </ListTasks>
         </div>
      </div>
    );
}
 
export default Home;
