import React from 'react'

const Header = ({ data }) => {
  console.log(data);
  function logout() {
    localStorage.removeItem("logedInUser")
    window.location.reload()
  }
  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-semibold">
        Hello, <br />
        <span className="font-bold text-3xl">{data.firstName} 👋</span>
      </h1>
      <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Log Out</button>
    </div>
  )
}

export default Header
