
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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
      period: `${record.month.slice(0, 3)}, ${record.year}`,
      systolic: record.blood_pressure.systolic.value,
      diastolic: record.blood_pressure.diastolic.value,
    }));

  const latestRecord = patient.diagnosis_history[0];

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blood Pressure</h2>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
                  stroke="#C026D3"
                  strokeWidth={3}
                  dot={{ fill: '#C026D3', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#C026D3' }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#7C3AED"
                  strokeWidth={3}
                  dot={{ fill: '#7C3AED', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#7C3AED' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Systolic</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{latestRecord?.blood_pressure.systolic.value}</p>
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-sm text-gray-500">mmHg</span>
              <span className="text-sm text-gray-500">↑</span>
              <span className="text-sm text-gray-600">{latestRecord?.blood_pressure.systolic.levels}</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Diastolic</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{latestRecord?.blood_pressure.diastolic.value}</p>
            <div className="flex items-center space-x-1 mt-1">
              <span className="text-sm text-gray-500">mmHg</span>
              <span className="text-sm text-gray-500">↓</span>
              <span className="text-sm text-gray-600">{latestRecord?.blood_pressure.diastolic.levels}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
