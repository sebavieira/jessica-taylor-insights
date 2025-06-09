
import React, { useState, useEffect } from 'react';
import { PatientInfo } from './PatientInfo';
import { DiagnosisHistory } from './DiagnosisHistory';
import { BloodPressureChart } from './BloodPressureChart';
import { PatientList } from './PatientList';
import { LabResults } from './LabResults';

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
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
  diagnostic_list: Array<{
    name: string;
    description: string;
    status: string;
  }>;
  lab_results: Array<{
    name: string;
    value: number;
    unit: string;
  }>;
}

export const PatientDashboard = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch patient data');
        }
        
        const data = await response.json();
        setPatients(data);
        
        // Find Jessica Taylor
        const jessica = data.find((patient: Patient) => patient.name === 'Jessica Taylor');
        if (jessica) {
          setSelectedPatient(jessica);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading patient data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!selectedPatient) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Jessica Taylor not found</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      {/* Patients List */}
      <div className="col-span-3">
        <PatientList patients={patients} selectedPatient={selectedPatient} />
      </div>

      {/* Main Content */}
      <div className="col-span-6 space-y-6">
        <DiagnosisHistory patient={selectedPatient} />
        <BloodPressureChart patient={selectedPatient} />
      </div>

      {/* Patient Info Sidebar */}
      <div className="col-span-3 space-y-6">
        <PatientInfo patient={selectedPatient} />
        <LabResults patient={selectedPatient} />
      </div>
    </div>
  );
};
