export interface Service {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}
