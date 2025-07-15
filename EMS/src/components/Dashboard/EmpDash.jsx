import React from 'react';
import Header from './Header';

const stats = [
  { count: 0, label: 'New Task', color: 'bg-yellow-400' },
  { count: 0, label: 'Completed', color: 'bg-blue-400' },
  { count: 0, label: 'Accepted', color: 'bg-green-400' },
  { count: 0, label: 'Failed', color: 'bg-red-400' },
];

const tasks = [
  {
    title: 'Make a youtube video',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    date: '20 Feb 2024',
    priority: 'High',
    color: 'bg-red-300',
  },
  {
    title: 'Design a UI',
    desc: 'A responsive UI design for dashboard view...',
    date: '21 Feb 2024',
    priority: 'Medium',
    color: 'bg-green-300',
  },
  {
    title: 'Fix login bug',
    desc: 'Issue in token validation needs urgent fix...',
    date: '22 Feb 2024',
    priority: 'High',
    color: 'bg-blue-300',
  },
  {
    title: 'Write documentation',
    desc: 'Prepare system usage guide and readme...',
    date: '23 Feb 2024',
    priority: 'Low',
    color: 'bg-yellow-300',
  },
  {
    title: 'Backend API cleanup',
    desc: 'Refactor and remove unused API endpoints...',
    date: '24 Feb 2024',
    priority: 'Medium',
    color: 'bg-purple-300',
  },
];

const EmpDash = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-12 overflow-hidden">
     <Header/>

      {/* Stats (fixed for laptop) */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {stats.map((item, i) => (
          <div key={i} className={`${item.color} rounded-lg p-6  text-white`}>
            <p className="text-3xl font-bold mb-2">{item.count}</p>
            <p className="text-2xl font-bold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Horizontally Scrollable Tasks Section */}
      <div className="overflow-x-auto scrolls">
        <div className="flex space-x-4 min-w-fit">
          {tasks.map((task, i) => (
            <div
              key={i}
              className={`${task.color} min-w-[250px] max-w-[300px] h-[250px] p-4 rounded-lg flex-shrink-0`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="bg-red-600 text-xs px-2 py-1 rounded text-white font-bold">
                  {task.priority}
                </span>
                <span className="text-sm font-bold text-white">{task.date}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{task.title}</h3>
              <p className="text-base text-white">{task.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpDash;
