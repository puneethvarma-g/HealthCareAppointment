import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, Calendar, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './Dashboard';
import DoctorSearch from './DoctorSearch';
import BookingModal from './BookingModal';
import Appointments from './Appointments';
import Profile from './Profile';
import { Doctor } from '../types';

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (bookingDetails: any) => {
    console.log('Booking submitted:', bookingDetails);
    alert('Appointment booked successfully!');
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'doctors':
        return <DoctorSearch onBookAppointment={handleBookAppointment} />;
      case 'appointments':
        return <Appointments />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">HealthCare+</h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeView === 'dashboard'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveView('doctors')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeView === 'doctors'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Find Doctors
              </button>
              <button
                onClick={() => setActiveView('appointments')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeView === 'appointments'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                My Appointments
              </button>
              <button
                onClick={() => setActiveView('profile')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeView === 'profile'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Profile
              </button>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <div className="relative group">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:block">
                    {user?.name || 'User'}
                  </span>
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => setActiveView('profile')}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <User className="h-4 w-4 mr-3" />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-gray-50 px-4 py-3">
          <div className="flex space-x-4 overflow-x-auto">
            {['dashboard', 'doctors', 'appointments', 'profile'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  activeView === view
                    ? 'text-blue-600 bg-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>
      
      {/* Booking Modal */}
      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedDoctor(null);
          }}
          onBook={handleBookingSubmit}
        />
      )}
    </div>
  );
};

export default DashboardLayout;