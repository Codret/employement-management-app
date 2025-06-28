import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'
import NewTask from '../TaskList/NewTask'



const CreateTask = () => {

  const [userData, setUserData]= useContext(AuthContext)
  
  
  const [task_title, setTask_title] = useState("")
  const [task_description, setTask_description] = useState("")
  const [task_date, setTask_date] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [taskType, setTaskType] = useState("")

  const [newTask, setNewTask] = useState("")

  const submitHandler =(e) => {
    e.preventDefault()
    setNewTask({active:false, new_task:true, complete:false , failed:false,task_title, task_description, task_date,taskType})

    const data = userData;
    
    data.forEach((elem) =>{
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
    
        elem.taskcount.new_task= elem.taskcount.new_task +1;
        localStorage.setItem("employees",JSON.stringify(data))
      } 
      setUserData(data)
    });
    
    setTask_title("")
    setTask_description("")
    setTask_date("")
    setAssignTo("")
    setTaskType("")
  }

  return (
    <div className="admin-box bg-[#1c1c1c] mt-7 rounded p-4 sm:p-5">
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row md:flex-wrap w-full gap-5 justify-between"
      >
        {/* Left Section */}
        <div className="create-task w-full md:w-[55%] flex flex-col gap-3">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={task_title}
              onChange={(e) => setTask_title(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 placeholder:text-gray-400"
              type="text"
              placeholder="Make A UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={task_date}
              onChange={(e) => setTask_date(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 placeholder:text-gray-400"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 placeholder:text-gray-400"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-600 placeholder:text-gray-400"
              type="text"
              placeholder="design, dev, etc."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="create-task w-full md:w-[40%] flex flex-col gap-3">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              value={task_description}
              onChange={(e) => setTask_description(e.target.value)}
              className="w-full h-40 text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-600 placeholder:text-gray-400"
              placeholder="Describe the task..."
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded text-sm w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask