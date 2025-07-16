import React from 'react';
import Header from './Header';

const colors = [
  'bg-red-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-purple-400',
  'bg-pink-400',
  'bg-indigo-400'
];


const EmpDash = ({ data }) => {

  console.log(data);
  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-12 overflow-hidden">
      <Header data={data} />
      
      {/* Stats (fixed for laptop) */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {Object.entries(data.taskCounts).map(([label, count], i) => (
          <div key={i} className={`${colors[i % colors.length]} rounded-lg p-6 text-white`}>
            <p className="text-3xl font-bold mb-2">{count}</p>
            <p className="text-2xl font-bold capitalize">{label}</p>
          </div>
        ))}
      </div>


      {/* Horizontally Scrollable Tasks Section */}
      <div className="overflow-x-auto scrolls">
        <div className="flex space-x-4 min-w-fit">
          {data.tasks.map((task, i) => (
            <div
              key={i  }
              className={`${colors[i % colors.length]} min-w-[250px] max-w-[300px] h-[250px] p-4 rounded-lg flex-shrink-0`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="bg-red-600 text-xs px-2 py-1 rounded text-white font-bold">
                  {task.category}
                </span>
                <span className="text-sm font-bold text-white">{task.taskDate}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{task.taskTitle}</h3>
              <p className="text-base text-white">{task.taskDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default EmpDash;
