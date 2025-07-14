import React from 'react';

const stats = [
  { count: 0, label: 'New Task', color: 'bg-red-400' },
  { count: 0, label: 'Completed', color: 'bg-blue-400' },
  { count: 0, label: 'Accepted', color: 'bg-green-400' },
  { count: 0, label: 'Failed', color: 'bg-yellow-400' },
];


const tasks = [
  {
    title: 'Make a youtube video',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '20 feb 2024',
    priority: 'High',
    color: 'bg-red-300',
  },
  {
    title: 'Make a youtube video',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '20 feb 2024',
    priority: 'High',
    color: 'bg-green-300',
  },
  {
    title: 'Make a youtube video',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '20 feb 2024',
    priority: 'High',
    color: 'bg-blue-300',
  },
  {
    title: 'Make a youtube video',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '20 feb 2024',
    priority: 'High',
    color: 'bg-yellow-300',
  },
];

const EmpDash = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-14 py-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Hello, <br></br><span className="font-bold text-3xl">Sarthak 👋</span>
        </h1>
        <button className="bg-red-500 px-4 py-2 rounded">Log Out</button>
      </div>

      {/* Desktop Stats */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item, i) => (
          <div key={i} className={`${item.color} rounded-lg p-6 text-white`}>
            <p className="text-2xl font-bold">{item.count}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile Stats */}
      <div className="grid sm:hidden grid-cols-2 gap-4 mb-6">
        {stats.map((item, i) => (
          <div key={i} className={`${item.color} rounded-lg p-4 text-white`}>
            <p className="text-xl font-bold">{item.count}</p>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Tasks Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tasks.map((task, i) => (
          <div key={i} className={`${task.color} rounded-lg p-4`}>
            <div className="flex justify-between items-center mb-2">
              <span className="bg-red-600 text-xs px-2 py-1 rounded text-white font-bold">
                {task.priority}
              </span>
              <span className="text-xs text-white">{task.date}</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{task.title}</h3>
            <p className="text-sm text-white">{task.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpDash;
