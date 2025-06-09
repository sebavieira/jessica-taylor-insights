
import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface Patient {
  name: string;
  diagnosis_history: Array<{
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number; levels: string };
      diastolic: { value: number; levels: string };
    };
    heart_rate: { value: number; levels: string };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
  }>;
}

interface DiagnosisHistoryProps {
  patient: Patient;
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ patient }) => {
  const latestRecord = patient.diagnosis_history[0];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Diagnosis History</h2>
          <MoreHorizontal size={20} className="text-gray-400" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Blood Pressure */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-pink-100 flex items-center justify-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Blood Pressure</h3>
            <p className="text-sm text-gray-600 mb-2">
              {latestRecord?.blood_pressure.systolic.value}/{latestRecord?.blood_pressure.diastolic.value} mmHg
            </p>
            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
              latestRecord?.blood_pressure.systolic.levels === 'Normal' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {latestRecord?.blood_pressure.systolic.levels}
            </span>
          </div>

          {/* Heart Rate */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Heart Rate</h3>
            <p className="text-sm text-gray-600 mb-2">{latestRecord?.heart_rate.value} bpm</p>
            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
              latestRecord?.heart_rate.levels === 'Normal' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {latestRecord?.heart_rate.levels}
            </span>
          </div>

          {/* Respiratory Rate */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Respiratory Rate</h3>
            <p className="text-sm text-gray-600 mb-2">{latestRecord?.respiratory_rate.value} bpm</p>
            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
              latestRecord?.respiratory_rate.levels === 'Normal' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {latestRecord?.respiratory_rate.levels}
            </span>
          </div>

          {/* Temperature */}
          <div className="text-center col-start-2">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Temperature</h3>
            <p className="text-sm text-gray-600 mb-2">{latestRecord?.temperature.value}°F</p>
            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
              latestRecord?.temperature.levels === 'Normal' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {latestRecord?.temperature.levels}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
