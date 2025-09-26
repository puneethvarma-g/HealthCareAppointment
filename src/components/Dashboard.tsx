import React from 'react';
import { Calendar, Clock, User, TrendingUp, Heart, Activity } from 'lucide-react';
import { appointments } from '../data/mockData';

const Dashboard: React.FC = () => {
  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const recentAppointments = appointments.filter(apt => apt.status === 'completed').slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-2">Here's an overview of your health appointments and records.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming Appointments</p>
              <p className="text-3xl font-bold text-blue-600">{upcomingAppointments.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed Visits</p>
              <p className="text-3xl font-bold text-green-600">12</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Prescriptions</p>
              <p className="text-3xl font-bold text-purple-600">3</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Health Score</p>
              <p className="text-3xl font-bold text-teal-600">85%</p>
            </div>
            <div className="p-3 bg-teal-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
            </div>
            <div className="p-6">
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{appointment.doctorName}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{appointment.date}</span>
                          <Clock className="h-3 w-3 ml-3 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {appointment.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No upcoming appointments</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions & Health Tips */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium">Book Appointment</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-red-600 mr-3" />
                  <span className="font-medium">View Health Records</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium">Prescription Refill</span>
                </div>
              </button>
            </div>
          </div>

          {/* Health Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Tip of the Day</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Stay hydrated! Aim for 8 glasses of water daily to maintain optimal health and support your body's natural functions.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Wellness
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;