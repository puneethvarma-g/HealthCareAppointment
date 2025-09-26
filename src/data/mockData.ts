import { Doctor, Appointment, Patient, MedicalRecord } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    experience: 12,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Downtown Medical Center',
    availableSlots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'],
    consultationFee: 150
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Dermatology',
    experience: 8,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Skin Care Clinic',
    availableSlots: ['11:00 AM', '1:00 PM', '4:00 PM'],
    consultationFee: 120
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    experience: 15,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Children\'s Hospital',
    availableSlots: ['8:30 AM', '10:00 AM', '1:30 PM', '3:00 PM'],
    consultationFee: 100
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    experience: 20,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Bone & Joint Center',
    availableSlots: ['9:30 AM', '11:30 AM', '2:30 PM'],
    consultationFee: 180
  }
];

export const appointments: Appointment[] = [
  {
    id: '1',
    doctorId: '1',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    date: '2025-01-25',
    time: '10:30 AM',
    status: 'upcoming',
    type: 'consultation',
    notes: 'Regular checkup for heart condition'
  },
  {
    id: '2',
    doctorId: '3',
    doctorName: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    date: '2025-01-20',
    time: '2:00 PM',
    status: 'completed',
    type: 'follow-up'
  }
];

export const patient: Patient = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@email.com',
  phone: '+1 (555) 123-4567',
  dateOfBirth: '1990-05-15',
  gender: 'male',
  bloodGroup: 'A+',
  allergies: ['Penicillin', 'Shellfish'],
  emergencyContact: {
    name: 'Jane Smith',
    phone: '+1 (555) 987-6543',
    relation: 'Spouse'
  }
};

export const medicalRecords: MedicalRecord[] = [
  {
    id: '1',
    date: '2025-01-15',
    doctorName: 'Dr. Sarah Johnson',
    diagnosis: 'Hypertension',
    prescription: ['Lisinopril 10mg', 'Hydrochlorothiazide 25mg'],
    notes: 'Blood pressure well controlled. Continue current medication.'
  },
  {
    id: '2',
    date: '2024-12-10',
    doctorName: 'Dr. Michael Chen',
    diagnosis: 'Eczema',
    prescription: ['Hydrocortisone cream 1%', 'Cetaphil moisturizer'],
    notes: 'Skin condition improving. Use moisturizer daily.'
  }
];