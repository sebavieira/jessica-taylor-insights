
import React from 'react';
import { Download } from 'lucide-react';

interface Patient {
  lab_results: Array<{
    name: string;
    value: number;
    unit: string;
  }>;
}

interface LabResultsProps {
  patient: Patient;
}

export const LabResults: React.FC<LabResultsProps> = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Lab Results</h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {patient.lab_results.map((result, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium text-gray-900">{result.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{result.value} {result.unit}</span>
                <Download size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
