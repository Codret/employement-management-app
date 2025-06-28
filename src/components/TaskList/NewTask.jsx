import React from 'react'
import AcceptTask from './AcceptTask';

const NewTask = ({data}) => {
  const taskAccept =()=> {
    const btn= document.querySelector("#acpt-task")
    if(data.new_task){
      data.new_task =false;
      data.active = true;
      data.new_task = data.new_task -1;
      btn.textContent = "Task Accepted";
      btn.style.backgroundColor = "green";
      
      
      <AcceptTask/>
    }
  }
  
  return (
    <div className='task h-full flex-shrink-0 w-[90%] sm:w-[260px] md:w-[300px] bg-yellow-400 rounded-xl p-4 mx-auto'>
      <div className='tasklist-card flex justify-between mb-2'>
        <h3 className='bg-red-500 px-3 py-1 rounded-xl text-sm'>{data.taskType}</h3>
        <h4 className='text-sm font-semibold'>{data.task_date}</h4>
      </div>
      <h1 className='text-2xl font-semibold mb-2'>{data.task_title}</h1>
      <p>{data.task_description}</p>
      <div className='mt-4'>
        <button
          id='acpt-task'
          onClick={taskAccept}
          className='bg-blue-400 py-2 px-3 rounded text-white w-full'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask