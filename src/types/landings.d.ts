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
  date: string;
  author: string;
  category: string;
  slug: string;
  content: {
    introduction: string;
    sections: IBlogSection[];
    conclusion: string;
  };
  readTime: number;
  tags: string[];
}

export interface IBlogSection {
  title: string;
  paragraphs: string[];
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
