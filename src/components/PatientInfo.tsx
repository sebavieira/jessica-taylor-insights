
import React from 'react';
import { Download } from 'lucide-react';

interface Patient {
  name: string;
  profile_picture: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
}

interface PatientInfoProps {
  patient: Patient;
}

export const PatientInfo: React.FC<PatientInfoProps> = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 text-center">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{patient.name}</h2>
        
        <div className="space-y-4 mt-6">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">📅</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Date Of Birth</p>
              <p className="font-medium text-gray-900">{patient.date_of_birth}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">👤</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium text-gray-900">{patient.gender}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">📞</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Contact Info</p>
              <p className="font-medium text-gray-900">{patient.phone_number}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">🚨</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Emergency Contacts</p>
              <p className="font-medium text-gray-900">{patient.emergency_contact}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 mr-3 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">🏥</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Insurance Provider</p>
              <p className="font-medium text-gray-900">{patient.insurance_type}</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
          <span>Show All Information</span>
        </button>
      </div>
    </div>
  );
};
