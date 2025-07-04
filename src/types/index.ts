// Tipos personalizados para o projeto Impactar Cursos

export interface TipoCurso {
  id: number;
  titulo: string;
  descricao: string;
  preco: string;
  precoOriginal: string;
  duracao: string;
  alunos: number;
  avaliacao: number;
  imagem: string;
  categoria: string;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  instrutor: string;
  modulos: number;
}

export interface TipoDepoimento {
  id: number;
  nome: string;
  cargo: string;
  empresa?: string;
  avatar: string;
  texto: string;
  avaliacao: number;
  curso?: string;
}

export interface TipoContato {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
  interesse?: string;
}

export interface TipoInstrutor {
  id: number;
  nome: string;
  especialidade: string;
  bio: string;
  avatar: string;
  experiencia: string;
  linkedin?: string;
  github?: string;
}

export interface TipoModulo {
  id: number;
  titulo: string;
  descricao: string;
  duracao: string;
  videoUrl?: string;
  materiais?: string[];
  concluido?: boolean;
}

export interface TipoProgresso {
  cursoId: number;
  modulosCompletos: number;
  totalModulos: number;
  percentual: number;
  ultimoAcesso: Date;
}

export interface TipoUsuario {
  id: number;
  nome: string;
  email: string;
  avatar?: string;
  cursosInscritos: number[];
  progressos: TipoProgresso[];
  dataCadastro: Date;
}

// Enums para categorias e níveis
export enum CategoriaCurso {
  DESENVOLVIMENTO = 'Desenvolvimento',
  MARKETING = 'Marketing',
  DESIGN = 'Design',
  DATASCIENCE = 'Data Science',
  NEGOCIOS = 'Negócios',
  IDIOMAS = 'Idiomas'
}

export enum NivelCurso {
  INICIANTE = 'Iniciante',
  INTERMEDIARIO = 'Intermediário',
  AVANCADO = 'Avançado'
}

// Tipos para respostas da API
export interface RespostaAPI<T> {
  sucesso: boolean;
  dados?: T;
  mensagem?: string;
  erro?: string;
}

export interface PaginacaoAPI<T> {
  dados: T[];
  total: number;
  pagina: number;
  limite: number;
  totalPaginas: number;
}

// Props para componentes
export interface PropsBotao {
  variante?: 'primario' | 'secundario' | 'outline';
  tamanho?: 'pequeno' | 'medio' | 'grande';
  carregando?: boolean;
  desabilitado?: boolean;
  icone?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PropsCard {
  titulo: string;
  descricao?: string;
  imagem?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface PropsModal {
  aberto: boolean;
  onFechar: () => void;
  titulo?: string;
  children: React.ReactNode;
}

// Tipos para formulários
export interface DadosFormularioContato {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
  interesse?: string;
}

export interface DadosFormularioInscricao {
  nome: string;
  email: string;
  telefone?: string;
  cursoId: number;
  cupomDesconto?: string;
}

// Tipos para validação
export interface ErrosValidacao {
  [campo: string]: string;
}

// Configurações da aplicação
export interface ConfiguracaoApp {
  nomeApp: string;
  versao: string;
  apiUrl: string;
  chavePixel?: string;
  chaveAnalytics?: string;
}
