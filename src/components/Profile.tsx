import React, { useState } from 'react';
import { User, Edit3, Heart, Phone, Mail, Calendar, Droplets, AlertTriangle, FileText } from 'lucide-react';
import { patient, medicalRecords } from '../data/mockData';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'medical'>('profile');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600 mt-2">Manage your personal information and medical records.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{patient.name}</h2>
              <p className="text-gray-600">{patient.email}</p>
              
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {patient.phone}
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Born {new Date(patient.dateOfBirth).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-red-600">{patient.bloodGroup}</p>
                  <p className="text-xs text-gray-600">Blood Group</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                  <p className="text-xs text-gray-600">Total Visits</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full mt-6 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex px-6">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-4 px-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'profile'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Personal Information
                </button>
                <button
                  onClick={() => setActiveTab('medical')}
                  className={`py-4 px-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'medical'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Medical Records
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={patient.name}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={patient.email}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={patient.phone}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={patient.dateOfBirth}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        value={patient.gender}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                      <input
                        type="text"
                        value={patient.bloodGroup}
                        disabled={!isEditing}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Allergies */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <AlertTriangle className="h-4 w-4 inline mr-2 text-orange-500" />
                      Known Allergies
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {patient.allergies.map((allergy, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-3">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-red-700 mb-1">Name</label>
                        <input
                          type="text"
                          value={patient.emergencyContact.name}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-red-200 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-red-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-red-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          value={patient.emergencyContact.phone}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-red-200 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-red-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-red-700 mb-1">Relation</label>
                        <input
                          type="text"
                          value={patient.emergencyContact.relation}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-red-200 rounded focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:bg-red-100"
                        />
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'medical' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Medical History</h3>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Request Records
                    </button>
                  </div>

                  <div className="space-y-4">
                    {medicalRecords.map((record) => (
                      <div key={record.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <FileText className="h-4 w-4 text-blue-600" />
                              <span className="font-medium text-gray-900">{record.diagnosis}</span>
                              <span className="text-sm text-gray-500">by {record.doctorName}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{record.notes}</p>
                            
                            {record.prescription.length > 0 && (
                              <div className="mb-3">
                                <p className="text-sm font-medium text-gray-700 mb-1">Prescriptions:</p>
                                <div className="flex flex-wrap gap-2">
                                  {record.prescription.map((med, index) => (
                                    <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                      {med}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(record.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;