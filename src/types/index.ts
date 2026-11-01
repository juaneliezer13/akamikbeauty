export interface Product {
  id: number;
  brand: string;
  title: string;
  category: string;
  skinTypes: string[];
  compatibility: string;
  price: number;
  image: string;
  gallery: string[];
  attributes: string[];
  ingredients: string;
  benefits: string;
  use: string;
  inStock?: boolean;
}

export interface BannerInfo {
  kicker: string;
  title: string;
  subtitle: string;
  desktop: string;
  mobile: string;
}

export type Category = 
  | 'Todos'
  | 'Limpiadores'
  | 'Tónicos & Esencias'
  | 'Sérums'
  | 'Hidratantes'
  | 'Protector Solar'
  | 'Mascarillas'
  | 'Ojos & Labios'
  | 'Dispositivos & Sets';

export type SkinType = 
  | 'Todos'
  | 'Piel Grasa/Mixta'
  | 'Piel Seca'
  | 'Piel Sensible/Rojeces'
  | 'Tendencia al Acné'
  | 'Antimanchas'
  | 'Todo Tipo de Piel';
