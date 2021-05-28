export default function reducer(state, action) {
  switch (action.type) {
    case "SET_TASK_LIST": {
      return { ...state, taskList: action.payload };
    }
    case "SET_TASK_BY_SECTION":{
      const section = action.payload;
      if(''===section){
        return {...state,taskListSection:[], taskSection: '',}
      }
      const taskListSection = state.taskList.filter((task)=> task.section === section)
      return{...state,taskListSection, taskSection:section}
    }
    default: {
      return state;
    }
  }
}
