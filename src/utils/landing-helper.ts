import { IService, ITeamMember, IBlogPost } from '@/types/landing';

export const services: IService[] = [
  {
    id: 1,
    title: 'Consulta Geral',
    desc: 'Atendimento médico completo para diagnóstico, tratamento e prevenção de doenças.',
    icon: 'Stethoscope',
  },
  {
    id: 2,
    title: 'Cardiologia',
    desc: 'Cuidados especializados para saúde cardiovascular e prevenção de doenças do coração.',
    icon: 'Heart',
  },
  {
    id: 3,
    title: 'Pediatria',
    desc: 'Atendimento dedicado à saúde infantil, desde recém-nascidos até adolescentes.',
    icon: 'Baby',
  },
  {
    id: 4,
    title: 'Ortopedia',
    desc: 'Tratamento de lesões e doenças ósseas, musculares e articulares.',
    icon: 'Bone',
  },
];

export const team: ITeamMember[] = [
  {
    id: 1,
    name: 'Dr. João Silva',
    specialty: 'Clínico Geral',
    image: 'https://picsum.photos/300/300?random=doctor1',
    bio: 'Médico com 15 anos de experiência em clínica geral, focado em atendimento preventivo e humanizado.',
  },
  {
    id: 2,
    name: 'Dra. Maria Santos',
    specialty: 'Cardiologia',
    image: 'https://picsum.photos/300/300?random=doctor2',
    bio: 'Especialista em cardiologia, dedicada ao cuidado do coração e prevenção de doenças cardiovasculares.',
  },
  {
    id: 3,
    name: 'Dr. Pedro Oliveira',
    specialty: 'Pediatria',
    image: 'https://picsum.photos/300/300?random=doctor3',
    bio: 'Pediatra apaixonado por cuidar da saúde das crianças, com abordagem lúdica e acolhedora.',
  },
];

export const posts: IBlogPost[] = [
  {
    id: 1,
    title: 'Importância da Prevenção em Saúde',
    excerpt: 'Descubra como exames preventivos podem salvar vidas e manter sua saúde em dia.',
    image: 'https://picsum.photos/400/250?random=health1',
  },
  {
    id: 2,
    title: 'Alimentação Saudável para Famílias',
    excerpt: 'Dicas práticas para uma dieta equilibrada e nutritiva para toda a família.',
    image: 'https://picsum.photos/400/250?random=health2',
  },
  {
    id: 3,
    title: 'Tecnologia em Diagnósticos Médicos',
    excerpt: 'Como inovações tecnológicas estão revolucionando o cuidado à saúde.',
    image: 'https://picsum.photos/400/250?random=health3',
  },
];