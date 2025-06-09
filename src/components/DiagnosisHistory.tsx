
import React from 'react';

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
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Diagnosis History</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Respiratory Rate */}
        <div className="bg-blue-50 rounded-2xl p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-lg">🫁</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Respiratory Rate</h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">{latestRecord?.respiratory_rate.value} bpm</p>
          <span className="inline-flex px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
            {latestRecord?.respiratory_rate.levels}
          </span>
        </div>

        {/* Temperature */}
        <div className="bg-red-50 rounded-2xl p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-white text-lg">🌡️</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Temperature</h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">{latestRecord?.temperature.value}°F</p>
          <span className="inline-flex px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
            {latestRecord?.temperature.levels}
          </span>
        </div>

        {/* Heart Rate */}
        <div className="bg-pink-50 rounded-2xl p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
              <span className="text-white text-lg">💗</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Heart Rate</h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">{latestRecord?.heart_rate.value} bpm</p>
          <span className="inline-flex px-3 py-1 text-sm rounded-full bg-red-100 text-red-800">
            ↓ {latestRecord?.heart_rate.levels}
          </span>
        </div>
      </div>
    </div>
  );
};
