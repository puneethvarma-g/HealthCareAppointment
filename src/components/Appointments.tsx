import React, { useState } from 'react';
import { Calendar, Clock, User, MoreHorizontal, Edit3, Trash2, CheckCircle } from 'lucide-react';
import { appointments as initialAppointments } from '../data/mockData';
import { Appointment } from '../types';

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  const filteredAppointments = appointments.filter(apt => apt.status === activeTab);

  const handleReschedule = (appointmentId: string) => {
    // In a real app, this would open a reschedule modal
    console.log('Reschedule appointment:', appointmentId);
  };

  const handleCancel = (appointmentId: string) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === appointmentId
          ? { ...apt, status: 'cancelled' as const }
          : apt
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { key: 'upcoming' as const, label: 'Upcoming', count: appointments.filter(a => a.status === 'upcoming').length },
    { key: 'completed' as const, label: 'Completed', count: appointments.filter(a => a.status === 'completed').length },
    { key: 'cancelled' as const, label: 'Cancelled', count: appointments.filter(a => a.status === 'cancelled').length },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
        <p className="text-gray-600 mt-2">Manage your healthcare appointments and view appointment history.</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {filteredAppointments.length > 0 ? (
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{appointment.doctorName}</h3>
                        <p className="text-sm text-blue-600">{appointment.specialty}</p>
                        <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(appointment.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {appointment.time}
                          </div>
                        </div>
                        {appointment.notes && (
                          <p className="text-sm text-gray-600 mt-2">{appointment.notes}</p>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800`}>
                          {appointment.type}
                        </span>
                        
                        {appointment.status === 'upcoming' && (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleReschedule(appointment.id)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                              title="Reschedule"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleCancel(appointment.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                              title="Cancel"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                        
                        {appointment.status === 'completed' && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No {activeTab} appointments found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;