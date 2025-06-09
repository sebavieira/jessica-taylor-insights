
import React from 'react';
import { Search, Settings, MoreHorizontal } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Tech.Care</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900">
              <span>🏠</span>
              <span>Overview</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 bg-teal-500 text-white rounded-full">
              <span>👥</span>
              <span>Patients</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900">
              <span>📅</span>
              <span>Schedule</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900">
              <span>💬</span>
              <span>Message</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900">
              <span>💳</span>
              <span>Transactions</span>
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://fedskillstest.ct.digital/4.png"
              alt="Dr. Jose Simmons"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-right">
              <p className="font-medium text-gray-900">Dr. Jose Simmons</p>
              <p className="text-sm text-gray-500">General Practitioner</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Settings size={20} className="text-gray-400 cursor-pointer" />
            <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};
