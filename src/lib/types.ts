export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'coach';
  avatar: string;
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
  phone?: string;
}

export interface Reservation {
  id: string;
  court: string;
  date: string;
  time: string;
  duration: number; // en horas
  players: string[];
  status: 'confirmed' | 'pending' | 'cancelled';
  createdBy: string;
  createdAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'important' | 'general' | 'event';
  author: string;
  createdAt: string;
  pinned: boolean;
}

export interface Court {
  id: string;
  name: string;
  type: 'indoor' | 'outdoor';
  capacity: number;
  available: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: string[];
  maxParticipants: number;
  type: 'training' | 'match' | 'tournament' | 'social';
}

export interface Stats {
  totalMembers: number;
  todayReservations: number;
  upcomingEvents: number;
  activeReservations: number;
  monthlyGrowth: number;
  courtUtilization: number;
}

export interface ChartData {
  name: string;
  value: number;
  month?: string;
  reservations?: number;
  members?: number;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}