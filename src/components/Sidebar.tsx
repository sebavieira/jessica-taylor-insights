
import React from 'react';
import { Home, Users, Calendar, FileText, Settings, MoreHorizontal } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Overview', active: true },
    { icon: Users, label: 'Patients', active: false },
    { icon: Calendar, label: 'Schedule', active: false },
    { icon: FileText, label: 'Message', active: false },
    { icon: FileText, label: 'Transactions', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-semibold text-gray-900">TestLogo</span>
        </div>
      </div>
      
      <nav className="px-4 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
              item.active 
                ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">Dr. Jose Simmons</p>
              <p className="text-sm text-gray-500">General Practitioner</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Settings size={20} className="text-gray-400 cursor-pointer" />
            <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
