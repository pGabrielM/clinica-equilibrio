export interface IService {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface ITeamMember {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

export interface IBookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export interface IContactData {
  name: string;
  email: string;
  message: string;
}