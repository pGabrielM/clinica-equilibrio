import type { IService, ITeamMember, IBlogPost } from "../types/landings";
import { blogPosts } from "./blog-content";

export const services: IService[] = [
  {
    id: 1,
    title: "Psicoterapia Individual",
    desc: "Atendimento psicológico individualizado para ansiedade, depressão, autoestima e desenvolvimento pessoal.",
    icon: "Brain",
  },
  {
    id: 2,
    title: "Terapia de Casal",
    desc: "Acompanhamento terapêutico para casais que buscam melhorar a comunicação e fortalecer relacionamentos.",
    icon: "Heart",
  },
  {
    id: 3,
    title: "Psiquiatria",
    desc: "Avaliação, diagnóstico e tratamento medicamentoso de transtornos mentais por médicos especializados.",
    icon: "Stethoscope",
  },
  {
    id: 4,
    title: "Terapia Infantil",
    desc: "Atendimento especializado para crianças e adolescentes com dificuldades emocionais e comportamentais.",
    icon: "Baby",
  },
  {
    id: 5,
    title: "Terapia em Grupo",
    desc: "Sessões terapêuticas em grupo para compartilhar experiências e desenvolver habilidades sociais.",
    icon: "Users",
  },
  {
    id: 6,
    title: "Orientação Vocacional",
    desc: "Apoio psicológico para escolha de carreira e transições profissionais com autoconhecimento.",
    icon: "Briefcase",
  },
  {
    id: 7,
    title: "Avaliação Psicológica",
    desc: "Avaliação completa com testes psicológicos para diagnóstico e orientação terapêutica adequada.",
    icon: "ClipboardList",
  },
  {
    id: 8,
    title: "Terapia Familiar",
    desc: "Acompanhamento sistêmico para famílias que buscam melhorar dinâmicas e resolver conflitos.",
    icon: "Home",
  },
  {
    id: 9,
    title: "Neuropsicologia",
    desc: "Avaliação e reabilitação de funções cognitivas como memória, atenção e linguagem.",
    icon: "ActivitySquare",
  },
  {
    id: 10,
    title: "Psicoterapia Online",
    desc: "Atendimento psicológico à distância com mesma qualidade e sigilo do presencial.",
    icon: "Video",
  },
];

export const team: ITeamMember[] = [
  {
    id: 1,
    name: "Dra. Ana Carolina Ribeiro",
    specialty: "Psicóloga Clínica - CRP 08/12345",
    image: "/images/team/ana-silva.jpg",
    bio: "Especialista em Terapia Cognitivo-Comportamental com 12 anos de experiência em atendimento de adultos e adolescentes.",
  },
  {
    id: 2,
    name: "Dr. Rafael Mendes",
    specialty: "Psiquiatra - CRM 12345",
    image: "/images/team/carlos-mendes.jpg",
    bio: "Médico psiquiatra com foco em transtornos de ansiedade e depressão, atuação humanizada e baseada em evidências.",
  },
  {
    id: 3,
    name: "Dra. Juliana Costa",
    specialty: "Psicóloga Infantil - CRP 08/23456",
    image: "/images/team/mariana-costa.jpg",
    bio: "Psicóloga especializada em atendimento infantil e familiar, com formação em ludoterapia e desenvolvimento infantil.",
  },
  {
    id: 4,
    name: "Dr. Marcos Almeida",
    specialty: "Psicólogo e Terapeuta de Casal - CRP 08/34567",
    image: "/images/team/pedro-santos.jpg",
    bio: "Especialista em terapia de casal e familiar, com abordagem sistêmica e mais de 10 anos de experiência clínica.",
  },
  {
    id: 5,
    name: "Dra. Fernanda Lima",
    specialty: "Neuropsicóloga - CRP 08/45678",
    image: "/images/team/julia-ferreira.jpg",
    bio: "Neuropsicóloga especializada em avaliação cognitiva e reabilitação de funções cerebrais superiores.",
  },
  {
    id: 6,
    name: "Dr. Carlos Eduardo Santos",
    specialty: "Psicólogo Organizacional - CRP 08/56789",
    image: "/images/team/lucas-rodrigues.jpg",
    bio: "Especialista em orientação vocacional e desenvolvimento de carreira, coach profissional certificado.",
  },
  {
    id: 7,
    name: "Dra. Beatriz Rodrigues",
    specialty: "Psicóloga de Adolescentes - CRP 08/67890",
    image: "/images/team/beatriz-almeida.jpg",
    bio: "Psicóloga focada em adolescentes, especialista em transtornos de humor e ansiedade na adolescência.",
  },
  {
    id: 8,
    name: "Dr. Paulo Henrique Dias",
    specialty: "Psicoterapeuta Familiar - CRP 08/78901",
    image: "/images/team/rafael-oliveira.jpg",
    bio: "Terapeuta familiar sistêmico com especialização em constelação familiar e dinâmicas interpessoais.",
  },
];

export const posts: IBlogPost[] = blogPosts;
