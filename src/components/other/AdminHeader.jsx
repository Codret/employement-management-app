import React  from 'react'

const AdminHeader = (props) => {
  const logOutUser= ()=> {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload()
    props.changeUser("")
    
  }
  return (
    <div className="px-4">
      <div className="flex flex-col sm:flex-row  sm:items-end justify-between items-start gap-4 header">
        <h1 className="text-xl sm:text-2xl text-white font-medium">
          Hello <br />
          <span className="text-2xl sm:text-3xl font-semibold">Akash(Admin) 👋</span>
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-600 text-white px-4 sm:px-5 py-2 text-base sm:text-lg font-medium rounded"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default AdminHeader