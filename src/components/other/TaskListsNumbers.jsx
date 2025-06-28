import React from 'react'

const TaskListsNumbers = ({data}) => {
  return (
    <div className='task-lists-numbers flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible gap-5 mt-10 px-2'>
      <div className="rounded-xl flex flex-col items-center justify-center flex-shrink-0 w-[70%] sm:w-[40%] md:w-full p-5 bg-yellow-400">
        <h2 className='text-2xl font-semibold'>{data.taskcount.new_task}</h2>
        <h3 className='text-sm font-medium'>New Task</h3>
      </div>

      <div className="rounded-xl flex flex-col items-center justify-center flex-shrink-0 w-[70%] sm:w-[40%] md:w-full p-5 bg-green-400">
        <h2 className='text-2xl font-semibold'>{data.taskcount.completed}</h2>
        <h3 className='text-sm font-medium'>Completed</h3>
      </div>

      <div className="rounded-xl flex flex-col items-center justify-center flex-shrink-0 w-[70%] sm:w-[40%] md:w-full p-5 bg-blue-400">
        <h2 className='text-2xl font-semibold'>{data.taskcount.active}</h2>
        <h3 className='text-sm font-medium'>Accepted</h3>
      </div>

      <div className="rounded-xl flex flex-col items-center justify-center flex-shrink-0 w-[70%] sm:w-[40%] md:w-full p-5 bg-red-400">
        <h2 className='text-2xl font-semibold'>{data.taskcount.failed}</h2>
        <h3 className='text-sm font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListsNumbers