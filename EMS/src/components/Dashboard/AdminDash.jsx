// TaskManager.js
import React from 'react';
import Header from './Header';

const AdminDash = ({data}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-10">
      <Header data={data} />

      {/* Task Form */}
      <div className="bg-gray-800 p-4 rounded-lg grid gap-6 sm:grid-cols-2 sm:gap-x-8">
  {/* Left Side - Form Inputs */}
  <div className="space-y-4">
    <div>
      <h3 className="mb-1 text-sm font-medium text-gray-300">Task Title</h3>
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 h-[50px] rounded bg-gray-700 border border-gray-600 focus:outline-none"
      />
    </div>
    <div>
      <h3 className="mb-1 text-sm font-medium text-gray-300">Date</h3>
      <input
        type="date"
        className="w-full p-2 h-[50px] rounded bg-gray-700 border border-gray-600 focus:outline-none"
      />
    </div>
    <div>
      <h3 className="mb-1 text-sm font-medium text-gray-300">Assign to</h3>
      <input
        type="text"
        placeholder="Assign to"
        className="w-full p-2 h-[50px] rounded bg-gray-700 border border-gray-600 focus:outline-none"
      />
    </div>
    <div>
      <h3 className="mb-1 text-sm font-medium text-gray-300">Category</h3>
      <input
        type="text"
        placeholder="Category"
        className="w-full p-2 h-[50px] rounded bg-gray-700 border border-gray-600 focus:outline-none"
      />
    </div>
  </div>

  {/* Right Side - Description & Button */}
  <div className="flex flex-col justify-between space-y-4">
    <div>
      <h3 className="mb-1 text-sm font-medium text-gray-300">Description</h3>
      <textarea
        rows="8"
        placeholder="Description"
        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none resize-none"
      ></textarea>
    </div>
    <button className="bg-green-500 py-4 px-4 rounded text-xl hover:bg-green-600">
      Create Task
    </button>
  </div>
</div>


      {/* Task Cards */}
      <div id='scrollar' className="mt-8 bg-gray-800 px-5 py-4 rounded-lg space-y-4 h-[230px] overflow-x-auto">
        <div className="flex justify-between items-center p-3 bg-red-400 rounded text-black font-semibold">
          <span>Sarthak</span>
          <span>Make a UI Design</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-red-400 rounded text-black font-semibold">
          <span>Sarthak</span>
          <span>Make a UI Design</span>
        </div><div className="flex justify-between items-center p-3 bg-red-400 rounded text-black font-semibold">
          <span>Sarthak</span>
          <span>Make a UI Design</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-green-400 rounded text-black font-semibold">
          <span>Sarthak</span>
          <span>Make a UI Design</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-yellow-400 rounded text-black font-semibold">
          <span>Sarthak</span>
          <span>Make a UI Design</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-blue-400 rounded text-black font-semibold">
          <span>Sarthak</span>
          <span>Make a UI Design</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
