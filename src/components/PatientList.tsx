
import React from 'react';
import { MoreHorizontal, Search } from 'lucide-react';

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

interface PatientListProps {
  patients: Patient[];
  selectedPatient: Patient;
}

export const PatientList: React.FC<PatientListProps> = ({ patients, selectedPatient }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Patients</h2>
          <Search size={20} className="text-gray-400" />
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
              patient.name === selectedPatient.name ? 'bg-blue-50' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{patient.name}</p>
                  <p className="text-sm text-gray-500">{patient.gender}, {patient.age}</p>
                </div>
              </div>
              <MoreHorizontal size={16} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
