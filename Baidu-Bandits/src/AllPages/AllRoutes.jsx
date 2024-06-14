import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ActivityTracker from './ActivityTracker';
import DoctorAppointment from './DoctorAppointment';
import MentalWellness from './MentalWellness';
import Nutrition from './Nutrition';
import PersonalTraining from './PersonalTraining';
import Home from './Home';
import { Auth } from './Auth';

const AllRoutes = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activitytracker" element={<ActivityTracker />} />
        <Route path="/doctorappointment" element={<DoctorAppointment />} />
        <Route path="/mentalwellness" element={<MentalWellness />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/personaltraining" element={<PersonalTraining />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
