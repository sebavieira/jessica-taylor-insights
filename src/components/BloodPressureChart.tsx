
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
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
  }>;
}

interface BloodPressureChartProps {
  patient: Patient;
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ patient }) => {
  const chartData = patient.diagnosis_history
    .slice()
    .reverse()
    .map(record => ({
      period: `${record.month.slice(0, 3)} ${record.year}`,
      systolic: record.blood_pressure.systolic.value,
      diastolic: record.blood_pressure.diastolic.value,
    }));

  const latestRecord = patient.diagnosis_history[0];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Blood Pressure</h2>
          <div className="flex items-center space-x-4">
            <select className="text-sm border border-gray-300 rounded px-3 py-1">
              <option>Last 6 months</option>
            </select>
            <MoreHorizontal size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="period" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <YAxis 
                domain={[60, 180]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#E91E63"
                strokeWidth={3}
                dot={{ fill: '#E91E63', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#9C27B0"
                strokeWidth={3}
                dot={{ fill: '#9C27B0', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Systolic</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{latestRecord?.blood_pressure.systolic.value}</p>
            <p className="text-sm text-gray-500">mmHg</p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Diastolic</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{latestRecord?.blood_pressure.diastolic.value}</p>
            <p className="text-sm text-gray-500">mmHg</p>
          </div>
        </div>
      </div>
    </div>
  );
};
