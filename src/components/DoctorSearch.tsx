import React, { useState } from 'react';
import { Search, Star, MapPin, Clock, DollarSign, Filter } from 'lucide-react';
import { doctors } from '../data/mockData';
import { Doctor } from '../types';

interface DoctorSearchProps {
  onBookAppointment: (doctor: Doctor) => void;
}

const DoctorSearch: React.FC<DoctorSearchProps> = ({ onBookAppointment }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const specialties = ['All', ...Array.from(new Set(doctors.map(doc => doc.specialty)))];

  const filteredDoctors = doctors
    .filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !selectedSpecialty || selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experience - a.experience;
      if (sortBy === 'fee') return a.consultationFee - b.consultationFee;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find Doctors</h1>
        <p className="text-gray-600 mt-2">Search and book appointments with qualified healthcare professionals.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Specialty Filter */}
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty === 'All' ? '' : specialty}>
                {specialty}
              </option>
            ))}
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="rating">Sort by Rating</option>
            <option value="experience">Sort by Experience</option>
            <option value="fee">Sort by Fee (Low to High)</option>
          </select>

          {/* Filter Button */}
          <button className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{doctor.specialty}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{doctor.rating} ({doctor.experience} years exp.)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {doctor.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2" />
                  ${doctor.consultationFee} consultation fee
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Available today:</p>
                <div className="flex flex-wrap gap-1">
                  {doctor.availableSlots.slice(0, 3).map((slot, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                      <Clock className="h-3 w-3 mr-1" />
                      {slot}
                    </span>
                  ))}
                  {doctor.availableSlots.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                      +{doctor.availableSlots.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => onBookAppointment(doctor)}
                className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No doctors found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;