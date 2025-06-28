import React from 'react'
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const AcceptTask = ({data}) => {


   const taskActive = () => {
    const completeBtn= document.querySelector("#completeBtn");
      if(data.active){
        data.active =false;
        data.complete = true;
        completeBtn.textContent = "Task Completed";
      }
    }

    const taskFailed =()=> {
      if(data.active){
        data.active =false;
        data.failed = true;
        <FailedTask/>
      }
    }

  return (
     <div className='task h-full flex-shrink-0 w-[90%] sm:w-[260px] md:w-[300px] lg:w-[400px] bg-red-400 rounded-xl p-4 mx-auto'>
      <div className='tasklist-card flex justify-between mb-2'>
        <h3 className='bg-red-500 px-3 py-1 rounded-xl text-sm'>{data.taskType}</h3>
        <h4 className='text-sm font-semibold'>{data.task_date}</h4>
      </div>
      <h1 className='text-2xl font-semibold mb-2'>{data.task_title}</h1>
      <p>{data.task_description}</p>
      <div className='flex justify-between mt-4'>
        <button
          id='completeBtn'
          onClick={taskActive}
          className='bg-green-500 py-1 px-2 text-sm rounded'
        >
          Mark as Completed
        </button>
        <button
          onClick={taskFailed}
          className='bg-red-500 py-1 px-2 text-sm rounded'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask