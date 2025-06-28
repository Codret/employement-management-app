import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData, SetUserData] =  useContext(AuthContext);
  return (
    <div className="all-task p-4 sm:p-5 bg-[#1c1c1c] mt-5 rounded">
      {/* Header */}
      <div className="hidden md:flex bg-red-400 py-2 px-4 justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      {/* Data */}
      <div className="space-y-3 mt-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="all-task-data bg-[#1c1c1c] py-3 px-4 border-2 border-emerald-300 rounded text-white flex flex-col md:flex-row md:justify-between md:items-center gap-2"
          >
            {/* Small screen stacked view */}
            <div className="md:w-1/5">
              <span className="block md:hidden text-gray-400 text-sm">Employee</span>
              <h2 className="text-base md:text-lg font-medium">{elem.firstName}</h2>
            </div>
            <div className="md:w-1/5">
              <span className="block md:hidden text-gray-400 text-sm">New Task</span>
              <h3 className="text-base md:text-lg font-medium text-blue-500">{elem.taskcount.new_task}</h3>
            </div>
            <div className="md:w-1/5">
              <span className="block md:hidden text-gray-400 text-sm">Active</span>
              <h1 className="text-base md:text-lg font-medium text-yellow-400">{elem.taskcount.active}</h1>
            </div>
            <div className="md:w-1/5">
              <span className="block md:hidden text-gray-400 text-sm">Completed</span>
              <h6 className="text-base md:text-lg font-medium">{elem.taskcount.completed}</h6>
            </div>
            <div className="md:w-1/5">
              <span className="block md:hidden text-gray-400 text-sm">Failed</span>
              <h4 className="text-base md:text-lg font-medium text-red-500">{elem.taskcount.failed}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask