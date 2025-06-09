
import React from 'react';

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
    <div className="bg-white rounded-2xl p-6">
      <div className="text-center mb-6">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-900">{patient.name}</h2>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg">📅</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date Of Birth</p>
            <p className="font-semibold text-gray-900">August 23, 1996</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg">👤</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-semibold text-gray-900">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg">📞</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Contact Info.</p>
            <p className="font-semibold text-gray-900">{patient.phone_number}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg">📞</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Emergency Contacts</p>
            <p className="font-semibold text-gray-900">{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg">🏥</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Insurance Provider</p>
            <p className="font-semibold text-gray-900">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      <button className="w-full mt-8 bg-teal-500 text-white py-3 px-4 rounded-full font-semibold hover:bg-teal-600 transition-colors">
        Show All Information
      </button>
    </div>
  );
};
