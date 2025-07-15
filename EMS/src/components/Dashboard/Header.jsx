import React from 'react'

const Header = () => {
  return (
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-semibold">
          Hello, <br />
          <span className="font-bold text-3xl">Sarthak 👋</span>
        </h1>
        <button className="bg-red-500 px-4 py-2 rounded">Log Out</button>
      </div>
  )
}

export default Header