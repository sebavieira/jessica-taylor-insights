
import React from 'react';
import { Header } from '@/components/Header';
import { PatientDashboard } from '@/components/PatientDashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <PatientDashboard />
      </main>
    </div>
  );
};

export default Index;
