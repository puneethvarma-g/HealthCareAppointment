export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  image: string;
  location: string;
  availableSlots: string[];
  consultationFee: number;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  type: 'consultation' | 'follow-up' | 'emergency';
  notes?: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup: string;
  allergies: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
}

export interface MedicalRecord {
  id: string;
  date: string;
  doctorName: string;
  diagnosis: string;
  prescription: string[];
  notes: string;
}