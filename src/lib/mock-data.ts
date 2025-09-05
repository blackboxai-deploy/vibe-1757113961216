import { User, Reservation, Announcement, Court, Event, Stats, ChartData } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    email: 'carlos@volleybook.com',
    role: 'admin',
    avatar: 'https://placehold.co/100x100?text=CM',
    status: 'active',
    joinDate: '2023-01-15',
    phone: '+34 612 345 678'
  },
  {
    id: '2',
    name: 'Ana García',
    email: 'ana.garcia@email.com',
    role: 'coach',
    avatar: 'https://placehold.co/100x100?text=AG',
    status: 'active',
    joinDate: '2023-02-20',
    phone: '+34 623 456 789'
  },
  {
    id: '3',
    name: 'Miguel Rodríguez',
    email: 'miguel.r@email.com',
    role: 'member',
    avatar: 'https://placehold.co/100x100?text=MR',
    status: 'active',
    joinDate: '2023-03-10',
    phone: '+34 634 567 890'
  },
  {
    id: '4',
    name: 'Laura Sánchez',
    email: 'laura.sanchez@email.com',
    role: 'member',
    avatar: 'https://placehold.co/100x100?text=LS',
    status: 'active',
    joinDate: '2023-03-15',
    phone: '+34 645 678 901'
  },
  {
    id: '5',
    name: 'David López',
    email: 'david.lopez@email.com',
    role: 'member',
    avatar: 'https://placehold.co/100x100?text=DL',
    status: 'inactive',
    joinDate: '2023-04-01',
    phone: '+34 656 789 012'
  },
  {
    id: '6',
    name: 'Isabel Martín',
    email: 'isabel.martin@email.com',
    role: 'member',
    avatar: 'https://placehold.co/100x100?text=IM',
    status: 'active',
    joinDate: '2023-04-10',
    phone: '+34 667 890 123'
  },
  {
    id: '7',
    name: 'Javier Fernández',
    email: 'javier.f@email.com',
    role: 'member',
    avatar: 'https://placehold.co/100x100?text=JF',
    status: 'active',
    joinDate: '2023-05-05',
    phone: '+34 678 901 234'
  },
  {
    id: '8',
    name: 'Carmen Ruiz',
    email: 'carmen.ruiz@email.com',
    role: 'coach',
    avatar: 'https://placehold.co/100x100?text=CR',
    status: 'active',
    joinDate: '2023-05-15',
    phone: '+34 689 012 345'
  }
];

export const mockReservations: Reservation[] = [
  {
    id: '1',
    court: 'Cancha Principal',
    date: '2024-01-15',
    time: '18:00',
    duration: 2,
    players: ['Carlos Mendoza', 'Ana García', 'Miguel Rodríguez', 'Laura Sánchez'],
    status: 'confirmed',
    createdBy: '1',
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: '2',
    court: 'Cancha Auxiliar',
    date: '2024-01-15',
    time: '19:30',
    duration: 1.5,
    players: ['David López', 'Isabel Martín', 'Javier Fernández', 'Carmen Ruiz'],
    status: 'confirmed',
    createdBy: '2',
    createdAt: '2024-01-10T11:00:00Z'
  },
  {
    id: '3',
    court: 'Cancha Principal',
    date: '2024-01-16',
    time: '17:00',
    duration: 2,
    players: ['Miguel Rodríguez', 'Laura Sánchez', 'Carlos Mendoza'],
    status: 'pending',
    createdBy: '3',
    createdAt: '2024-01-12T09:00:00Z'
  },
  {
    id: '4',
    court: 'Cancha Exterior',
    date: '2024-01-16',
    time: '20:00',
    duration: 1,
    players: ['Ana García', 'Carmen Ruiz', 'Isabel Martín', 'Javier Fernández'],
    status: 'confirmed',
    createdBy: '2',
    createdAt: '2024-01-12T14:00:00Z'
  },
  {
    id: '5',
    court: 'Cancha Principal',
    date: '2024-01-17',
    time: '18:30',
    duration: 2,
    players: ['Carlos Mendoza', 'David López', 'Miguel Rodríguez', 'Laura Sánchez', 'Javier Fernández'],
    status: 'confirmed',
    createdBy: '1',
    createdAt: '2024-01-13T16:00:00Z'
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Torneo de Temporada 2024',
    content: 'Se abre la inscripción para el torneo anual del club. Las inscripciones estarán abiertas hasta el 30 de enero. ¡No te pierdas esta oportunidad!',
    type: 'important',
    author: 'Carlos Mendoza',
    createdAt: '2024-01-10T10:00:00Z',
    pinned: true
  },
  {
    id: '2',
    title: 'Nuevos Horarios de Entrenamiento',
    content: 'A partir de febrero, los entrenamientos se realizarán los martes y jueves de 19:00 a 21:00 horas.',
    type: 'general',
    author: 'Ana García',
    createdAt: '2024-01-12T15:30:00Z',
    pinned: false
  },
  {
    id: '3',
    title: 'Mantenimiento de Canchas',
    content: 'El próximo fin de semana (20-21 enero) se realizará mantenimiento en la cancha principal. Las reservas se trasladarán automáticamente.',
    type: 'important',
    author: 'Carlos Mendoza',
    createdAt: '2024-01-13T09:00:00Z',
    pinned: true
  },
  {
    id: '4',
    title: 'Celebración del Aniversario',
    content: 'El 15 de febrero celebraremos el 5º aniversario del club con una cena de gala. ¡Reserva tu plaza!',
    type: 'event',
    author: 'Isabel Martín',
    createdAt: '2024-01-14T12:00:00Z',
    pinned: false
  }
];

export const mockCourts: Court[] = [
  {
    id: '1',
    name: 'Cancha Principal',
    type: 'indoor',
    capacity: 12,
    available: true
  },
  {
    id: '2',
    name: 'Cancha Auxiliar',
    type: 'indoor',
    capacity: 8,
    available: true
  },
  {
    id: '3',
    name: 'Cancha Exterior',
    type: 'outdoor',
    capacity: 10,
    available: false
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Entrenamiento Avanzado',
    description: 'Sesión de entrenamiento para jugadores avanzados',
    date: '2024-01-16',
    time: '19:00',
    location: 'Cancha Principal',
    participants: ['3', '4', '6', '7'],
    maxParticipants: 12,
    type: 'training'
  },
  {
    id: '2',
    title: 'Partido Amistoso vs Club Atlético',
    description: 'Partido amistoso contra el equipo del Club Atlético',
    date: '2024-01-20',
    time: '17:00',
    location: 'Cancha Principal',
    participants: ['1', '2', '3', '4', '5', '6'],
    maxParticipants: 6,
    type: 'match'
  },
  {
    id: '3',
    title: 'Barbacoa del Club',
    description: 'Evento social para todos los miembros y familiares',
    date: '2024-01-25',
    time: '13:00',
    location: 'Área Recreativa',
    participants: ['1', '2', '3', '4', '5', '6', '7', '8'],
    maxParticipants: 50,
    type: 'social'
  }
];

export const mockStats: Stats = {
  totalMembers: 127,
  todayReservations: 8,
  upcomingEvents: 3,
  activeReservations: 15,
  monthlyGrowth: 12.5,
  courtUtilization: 78.3
};

export const monthlyReservationsData: ChartData[] = [
  { name: 'Ene', reservations: 45, month: 'Enero' },
  { name: 'Feb', reservations: 52, month: 'Febrero' },
  { name: 'Mar', reservations: 48, month: 'Marzo' },
  { name: 'Abr', reservations: 61, month: 'Abril' },
  { name: 'May', reservations: 55, month: 'Mayo' },
  { name: 'Jun', reservations: 67, month: 'Junio' },
  { name: 'Jul', reservations: 73, month: 'Julio' },
  { name: 'Ago', reservations: 69, month: 'Agosto' },
  { name: 'Sep', reservations: 58, month: 'Septiembre' },
  { name: 'Oct', reservations: 64, month: 'Octubre' },
  { name: 'Nov', reservations: 71, month: 'Noviembre' },
  { name: 'Dic', reservations: 76, month: 'Diciembre' }
];

export const memberTypeData: ChartData[] = [
  { name: 'Miembros Regulares', value: 95 },
  { name: 'Entrenadores', value: 8 },
  { name: 'Administradores', value: 3 },
  { name: 'Miembros Junior', value: 21 }
];

export const memberGrowthData: ChartData[] = [
  { name: 'Ene', members: 98 },
  { name: 'Feb', members: 103 },
  { name: 'Mar', members: 107 },
  { name: 'Abr', members: 112 },
  { name: 'May', members: 118 },
  { name: 'Jun', members: 121 },
  { name: 'Jul', members: 125 },
  { name: 'Ago', members: 127 },
  { name: 'Sep', members: 127 },
  { name: 'Oct', members: 127 },
  { name: 'Nov', members: 127 },
  { name: 'Dic', members: 127 }
];