import type { Product } from '../types';

export const CATEGORIES = [
  'Todos',
  'Limpiadores',
  'Tónicos & Esencias',
  'Sérums',
  'Hidratantes',
  'Protector Solar',
  'Mascarillas',
  'Ojos & Labios',
  'Dispositivos & Sets'
] as const;

export const SKIN_TYPES = [
  'Todos',
  'Piel Grasa/Mixta',
  'Piel Seca',
  'Piel Sensible/Rojeces',
  'Tendencia al Acné',
  'Antimanchas'
] as const;

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "brand": "CELIMAX",
    "title": "The Real Noni Energy Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces",
      "Antimanchas"
    ],
    "compatibility": "Piel fatigada / Vitalidad",
    "price": 38.19,
    "image": "./images/products/celimax-ampolla-noni.webp",
    "gallery": [
      "./images/products/celimax-ampolla-noni.webp"
    ],
    "attributes": [
      "Noni 71.77%",
      "Superalimento",
      "Revitalizante"
    ],
    "ingredients": "Extracto de fruto de Noni al 71.77%, aceite de semilla de Noni, ceramidas y adenosina.",
    "benefits": "Concentrado con más de 200 nutrientes botánicos y antioxidantes que restauran la energía, elasticidad y luminosidad de la piel opaca y deshidratada.",
    "use": "Aplica de 2 a 3 gotas sobre rostro y cuello con suaves presiones después del tónico."
  },
  {
    "id": 2,
    "brand": "CELIMAX",
    "title": "Oil Control Light Cream (80ml)",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Control de brillo / Piel Grasa",
    "price": 34.3,
    "image": "./images/products/celimax-oil-control-cream.webp",
    "gallery": [
      "./images/products/celimax-oil-control-cream.webp"
    ],
    "attributes": [
      "Sin Aceites",
      "Fórmula Ligera",
      "Control Sebo"
    ],
    "ingredients": "Extracto de corteza de sauce blanco, agua de bambú y complejo sebo-regulador patentado.",
    "benefits": "Crema en gel refrescante que hidrata profundamente sin aportar pesadez ni brillos, regulando la sobreproducción sebácea durante todo el día.",
    "use": "Aplica sobre el rostro limpio como paso de hidratación mañana y noche."
  },
  {
    "id": 3,
    "brand": "CELIMAX",
    "title": "Control Light Sunscreen SPF 50+ (40ml)",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Piel Grasa / Acabado Ligero",
    "price": 29.61,
    "image": "./images/products/celimax-control-light-sunscreen.webp",
    "gallery": [
      "./images/products/celimax-control-light-sunscreen.webp"
    ],
    "attributes": [
      "SPF 50+ PA++++",
      "Sin efecto blanco",
      "Acabado Mate"
    ],
    "ingredients": "Filtros UV orgánicos fotoestables, niacinamida y complejo botánico matificante.",
    "benefits": "Protector solar químico ultraligero de rápida absorción que protege contra rayos UVA/UVB mientras matifica la zona T.",
    "use": "Aplica generosamente en rostro y cuello 15 minutos antes de la exposición solar."
  },
  {
    "id": 4,
    "brand": "CELIMAX",
    "title": "Mattifying Sun Stick SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Reaplicable / Mate suave",
    "price": 30.13,
    "image": "./images/products/celimax-mattifying-sun-stick.webp",
    "gallery": [
      "./images/products/celimax-mattifying-sun-stick.webp"
    ],
    "attributes": [
      "Formato Barra",
      "Fácil reaplicación",
      "Control brillos"
    ],
    "ingredients": "Micro polvos de sílice absorbentes de sebo, centella asiática y extracto de té verde.",
    "benefits": "Protector solar en barra diseñado para reaplicar cómodamente sobre el maquillaje o piel limpia sin dejar textura pegajosa.",
    "use": "Desliza directamente por el rostro y cuello cada 2 a 3 horas."
  },
  {
    "id": 5,
    "brand": "CELIMAX",
    "title": "Retinol Booster Shot Tightening",
    "category": "Sérums",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Antimanchas"
    ],
    "compatibility": "Poros y Firmeza",
    "price": 34.78,
    "image": "./images/products/celimax-retinol-booster.webp",
    "gallery": [
      "./images/products/celimax-retinol-booster.webp"
    ],
    "attributes": [
      "Retinol puro",
      "Tensado de poros",
      "Antiedad"
    ],
    "ingredients": "Retinol estabilizado, péptidos tensores y extracto de té negro.",
    "benefits": "Suero intensivo que acelera la renovación celular, afina la textura cutánea y reduce la apariencia de poros dilatados y líneas finas.",
    "use": "Usa de noche. Comienza aplicando 2 veces por semana y aumenta progresivamente."
  },
  {
    "id": 6,
    "brand": "DR. ALTHEA",
    "title": "345 Relief Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Calmante de Acné y Marcas",
    "price": 44.24,
    "image": "./images/products/dr-althea-345-cream.webp",
    "gallery": [
      "./images/products/dr-althea-345-cream.webp"
    ],
    "attributes": [
      "Fórmula 345",
      "Textura Gel Crema",
      "Anti-inflamatorio"
    ],
    "ingredients": "Resveratrol, centella asiática, pantenol, extracto de hibisco y ceramida NP.",
    "benefits": "Tratamiento viral multifuncional que alivia brotes de acné, atenúa cicatrices rojizas y nutre la barrera cutánea sin sensación grasa.",
    "use": "Aplica una capa delgada tras el sérum, mañana y noche."
  },
  {
    "id": 7,
    "brand": "DR. ALTHEA",
    "title": "Vitamin C Boosting Serum",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Luminosidad / Tono uniforme",
    "price": 31.8,
    "image": "./images/products/dr-althea-vitamin-c-serum.webp",
    "gallery": [
      "./images/products/dr-althea-vitamin-c-serum.webp"
    ],
    "attributes": [
      "Vitamina C pura",
      "Antioxidante",
      "Antimanchas"
    ],
    "ingredients": "Derivado estable de vitamina C, ácido ferúlico y extracto de espino amarillo.",
    "benefits": "Ilumina la piel apagada, unifica el tono y difumina manchas solares o post-acné protegiendo de radicales libres.",
    "use": "Aplica unas gotas por la mañana antes de la crema hidratante y el protector solar."
  },
  {
    "id": 8,
    "brand": "DR. ALTHEA",
    "title": "345 Calming Facial Mist",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Calmante exprés en bruma",
    "price": 34.1,
    "image": "./images/products/dr-althea-345-mist.webp",
    "gallery": [
      "./images/products/dr-althea-345-mist.webp"
    ],
    "attributes": [
      "Bruma calmante",
      "Fórmula 345",
      "Anti-rojeces"
    ],
    "ingredients": "Centella asiática, resveratrol, agua de árbol de té y pantenol.",
    "benefits": "Calma rojeces e irritaciones repentinas a lo largo del día, restituyendo la humedad perdida por el calor o aire acondicionado.",
    "use": "Rocía a 20 cm del rostro en cualquier momento del día."
  },
  {
    "id": 9,
    "brand": "DR. ALTHEA",
    "title": "Aqua Hydration Mist",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Hidratación instantánea",
    "price": 32.1,
    "image": "./images/products/dr-althea-aqua-mist.webp",
    "gallery": [
      "./images/products/dr-althea-aqua-mist.webp"
    ],
    "attributes": [
      "Ácido Hialurónico",
      "Refrescante",
      "Sin alcohol"
    ],
    "ingredients": "Ácido hialurónico multimolecular y minerales oceánicos.",
    "benefits": "Aporta un golpe de hidratación acuosa profunda dejando la piel flexible y jugosa al instante.",
    "use": "Vaporiza sobre rostro y cuello tras la limpieza o sobre el maquillaje."
  },
  {
    "id": 10,
    "brand": "DR. ALTHEA",
    "title": "345 Relief Intensive Serum",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné"
    ],
    "compatibility": "Reparación intensiva",
    "price": 29.97,
    "image": "./images/products/dr-althea-345-relief-serum.webp",
    "gallery": [
      "./images/products/dr-althea-345-relief-serum.webp"
    ],
    "attributes": [
      "Concentrado 345",
      "Rojeces y Marcas",
      "Ligero"
    ],
    "ingredients": "Complejo Relief 345, madecassoside y extracto de cúrcuma.",
    "benefits": "Suero concentrado que combate rojeces crónicas y calma la barrera sensibilizada por tratamientos abrasivos.",
    "use": "Aplica 1 a 2 goteros sobre las zonas más irritadas o en todo el rostro."
  },
  {
    "id": 11,
    "brand": "DR. ALTHEA",
    "title": "Salicylic Acid Clarifying Pad",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Exfoliante suave BHA",
    "price": 38.51,
    "image": "./images/products/dr-althea-salicylic-acid-pad.webp",
    "gallery": [
      "./images/products/dr-althea-salicylic-acid-pad.webp"
    ],
    "attributes": [
      "BHA 2%",
      "Algodón doble textura",
      "Poros limpios"
    ],
    "ingredients": "Ácido salicílico al 2%, extracto de té verde y alantoína.",
    "benefits": "Discos pre-impregnados con ácido salicílico que eliminan impurezas acumuladas en los poros y suavizan la textura áspera.",
    "use": "Pasa un disco suavemente por el rostro limpio de 2 a 3 noches por semana."
  },
  {
    "id": 12,
    "brand": "DR. ALTHEA",
    "title": "Retinol Eye Roller Care",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Contorno con aplicador frío",
    "price": 38.87,
    "image": "./images/products/dr-althea-retinol-eye-roller.webp",
    "gallery": [
      "./images/products/dr-althea-retinol-eye-roller.webp"
    ],
    "attributes": [
      "Aplicador metálico frío",
      "Retinol suave",
      "Descongestivo"
    ],
    "ingredients": "Retinol microencapsulado, cafeína y péptidos.",
    "benefits": "Tratamiento para ojeras y líneas de expresión con cabezal metálico roll-on que desinflama y activa la microcirculación.",
    "use": "Masajea suavemente el contorno de ojos en movimientos circulares de noche."
  },
  {
    "id": 13,
    "brand": "HARUHARU WONDER",
    "title": "Black Rice Pure Mineral Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Filtro 100% Mineral",
    "price": 36.53,
    "image": "./images/products/haruharu-black-mineral-sun.webp",
    "gallery": [
      "./images/products/haruharu-black-mineral-sun.webp"
    ],
    "attributes": [
      "Mineral / Físico",
      "Óxido de Zinc",
      "Arroz Negro"
    ],
    "ingredients": "Óxido de zinc no nano, extracto de arroz negro fermentado y ceramidas.",
    "benefits": "Protección solar 100% mineral que no irrita los ojos ni la piel reactiva, con acabado mate aterciopelado.",
    "use": "Aplica de manera uniforme sobre rostro y cuello por las mañanas."
  },
  {
    "id": 14,
    "brand": "HARUHARU WONDER",
    "title": "Black Bamboo Facial Mist",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Antioxidante / Calmante Bambú",
    "price": 33.39,
    "image": "./images/products/haruharu-black-bamboo-mist.webp",
    "gallery": [
      "./images/products/haruharu-black-bamboo-mist.webp"
    ],
    "attributes": [
      "Bambú Negro Fermentado",
      "Sin alcohol",
      "Bruma ultrafina"
    ],
    "ingredients": "Extracto de corteza y brote de bambú negro fermentado, beta-glucano y ácido hialurónico.",
    "benefits": "Protege contra el estrés oxidativo ambiental y restaura la frescura e hidratación celular con agua botánica pura de bambú.",
    "use": "Rocía sobre la piel limpia antes del sérum o durante el día para un boost revitalizante."
  },
  {
    "id": 15,
    "brand": "HARUHARU WONDER",
    "title": "Black Rice Moisture Airyfit Daily Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Acabado invisible sedoso",
    "price": 36.53,
    "image": "./images/products/haruharu-black-rice-moisture-sun.webp",
    "gallery": [
      "./images/products/haruharu-black-rice-moisture-sun.webp"
    ],
    "attributes": [
      "Químico",
      "Zero White Cast",
      "Textura crema ligera"
    ],
    "ingredients": "Extracto de arroz negro fermentado, ceramida NP y filtros solares de última generación.",
    "benefits": "Fórmula de rápida absorción sin residuo graso ni blanco, enriquecida con nutrientes de arroz negro para una piel jugosa.",
    "use": "Aplica como paso final matutino antes de maquillarte o salir."
  },
  {
    "id": 16,
    "brand": "HEIMISH",
    "title": "All Clean Lip Mask Care",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca"
    ],
    "compatibility": "Labios secos / Agrietados",
    "price": 19.35,
    "image": "./images/products/heimish-lip-mask.webp",
    "gallery": [
      "./images/products/heimish-lip-mask.webp"
    ],
    "attributes": [
      "Manteca de Karité",
      "Uso Nocturno",
      "Ultra Nutritivo"
    ],
    "ingredients": "Manteca de karité, aceite de moringa, cera de abejas y vitamina E.",
    "benefits": "Mascarilla nutritiva de noche que derrite las células muertas de los labios mientras duermes, dejándolos suaves y voluminosos.",
    "use": "Aplica una capa generosa antes de dormir o usa una pequeña cantidad durante el día como bálsamo."
  },
  {
    "id": 17,
    "brand": "MEDICUBE",
    "title": "Zero Pore Pad 2.0 (70 Discos)",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Reducción de poros / Sebo",
    "price": 38.5,
    "image": "./images/products/medicube-zero-pore-pad.webp",
    "gallery": [
      "./images/products/medicube-zero-pore-pad.webp"
    ],
    "attributes": [
      "AHA + BHA",
      "70 Discos",
      "Pore Minimizer"
    ],
    "ingredients": "Extracto de flor de prímula, complejo botánico patentado Anti-Sebum P y ácido láctico.",
    "benefits": "El disco exfoliante número uno en Corea para reducir el tamaño visible de los poros y eliminar sebo acumulado.",
    "use": "Usa el lado rugoso para exfoliar y el lado liso para calmar e hidratar."
  },
  {
    "id": 18,
    "brand": "MEDICUBE",
    "title": "Collagen Night Wrapping Mask (75ml)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Efecto Peel-off Firmeza",
    "price": 40.26,
    "image": "./images/products/medicube-collagen-mask.webp",
    "gallery": [
      "./images/products/medicube-collagen-mask.webp"
    ],
    "attributes": [
      "Colágeno hidrolizado",
      "Wrapping Mask",
      "Efecto Glow"
    ],
    "ingredients": "Triple colágeno soluble, elastina y ceramidas bioidénticas.",
    "benefits": "Crea una película protectora transpirable que sella todos los nutrientes de tu rutina nocturna, revelando una piel firme y luminosa por la mañana.",
    "use": "Aplica con brocha como último paso de noche, déjala secar 15 min y retírala desprendiéndola a la mañana siguiente."
  },
  {
    "id": 19,
    "brand": "MEDICUBE",
    "title": "Deep Vita C Capsule Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Antimanchas",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Despigmentante / Luminosidad",
    "price": 48.61,
    "image": "./images/products/medicube-vitamin-c-cream.webp",
    "gallery": [
      "./images/products/medicube-vitamin-c-cream.webp"
    ],
    "attributes": [
      "Vitamina C pura",
      "Cápsulas frescas",
      "Antimanchas"
    ],
    "ingredients": "Agua de espino amarillo al 50%, ácido ascórbico puro en cápsulas y niacinamida 5%.",
    "benefits": "Crema en gel con cápsulas de vitamina C fresca que se rompen al contacto para disolver melasma, pecas y marcas oscuras.",
    "use": "Mezcla la cápsula y el gel en la palma de tu mano y distribuye de manera homogénea."
  },
  {
    "id": 20,
    "brand": "MEDICUBE",
    "title": "PDRN Pink Peptide Serum",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Regeneración celular / Glow",
    "price": 34.9,
    "image": "./images/products/medicube-pdrn-pink-serum.webp",
    "gallery": [
      "./images/products/medicube-pdrn-pink-serum.webp"
    ],
    "attributes": [
      "PDRN Salmón",
      "Péptidos Tensores",
      "Rosa Natural"
    ],
    "ingredients": "PDRN (ADN de salmón) al 1%, niacinamida, pantenol y extracto de cianocobalamina (vitamina B12).",
    "benefits": "Fórmula de dermatología estética que repara microlesiones de la barrera cutánea, redensifica la piel y brinda un resplandor rosa saludable.",
    "use": "Aplica 2 a 3 gotas dando toques suaves sobre el rostro limpio."
  },
  {
    "id": 21,
    "brand": "MEDICUBE",
    "title": "PDRN Pink Collagen Volume Multi Balm",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Nutrición localizada / Antiedad",
    "price": 45,
    "image": "./images/products/medicube-pdrn-pink-multi-balm.webp",
    "gallery": [
      "./images/products/medicube-pdrn-pink-multi-balm.webp"
    ],
    "attributes": [
      "PDRN + Colágeno",
      "Formato Stick",
      "Voluminizador"
    ],
    "ingredients": "PDRN concentrado, colágeno hidrolizado de bajo peso molecular, manteca de karité y péptidos.",
    "benefits": "Bálsamo multiuso en barra que aporta hidratación instantánea, atenúa líneas de expresión en cuello, frente, contorno de ojos y labios agrietados.",
    "use": "Desliza en cualquier momento del día en las zonas con resequedad o líneas finas."
  },
  {
    "id": 22,
    "brand": "MEDICUBE",
    "title": "TXA Niacinamide Capsule Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Antimanchas",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Hiperpigmentación rebelde",
    "price": 45.55,
    "image": "./images/products/medicube-txa-niacinamide-cream.webp",
    "gallery": [
      "./images/products/medicube-txa-niacinamide-cream.webp"
    ],
    "attributes": [
      "Ácido Tranexámico",
      "Niacinamida",
      "Cápsulas duales"
    ],
    "ingredients": "Ácido tranexámico grado farmacéutico, niacinamida al 5% y arbutina.",
    "benefits": "Frena la síntesis descontrolada de melanina tratando manchas profundas causadas por acné y radiación solar.",
    "use": "Aplica sobre manchas focalizadas o en todo el rostro en la rutina de noche."
  },
  {
    "id": 23,
    "brand": "MEDICUBE",
    "title": "Acid Hipocloroso Calming Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Tendencia al Acné",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Calmante bactericida / Acné",
    "price": 37.07,
    "image": "./images/products/medicube-acid-hipocloroso-cream.webp",
    "gallery": [
      "./images/products/medicube-acid-hipocloroso-cream.webp"
    ],
    "attributes": [
      "Ácido Hipocloroso",
      "Antibacteriano",
      "Anti-irritaciones"
    ],
    "ingredients": "Ácido hipocloroso puro estabilizado, centella y alantoína.",
    "benefits": "Neutraliza las bacterias causantes del acné y calma brotes activos reduciendo la inflamación sin resecar.",
    "use": "Aplica como hidratante diario sobre piel propensa a brotes o irritaciones."
  },
  {
    "id": 24,
    "brand": "MEDICUBE",
    "title": "No Cast Just Glow Sunscreen SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Acabado radiante natural",
    "price": 35.79,
    "image": "./images/products/medicube-no-cast-glow-sun.webp",
    "gallery": [
      "./images/products/medicube-no-cast-glow-sun.webp"
    ],
    "attributes": [
      "Collagen Glow",
      "SPF 50+ PA++++",
      "Zero Blanco"
    ],
    "ingredients": "Colágeno hidrolizado, ácido hialurónico y filtros solares orgánicos.",
    "benefits": "Protector solar hidratante con infusión de colágeno que proporciona un acabado luminoso tipo cristal sin residuos grasos.",
    "use": "Aplica generosamente en rostro y cuello 15 minutos antes de la exposición solar."
  },
  {
    "id": 25,
    "brand": "MEDICUBE",
    "title": "AGE-R Booster Pro X2 (Dispositivo)",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Dermatología en Casa 6 en 1",
    "price": 608.4,
    "image": "./images/products/medicube-age-r-booster-pro-x2.webp",
    "gallery": [
      "./images/products/medicube-age-r-booster-pro-x2.webp"
    ],
    "attributes": [
      "Electroporación",
      "Microcorriente",
      "EMS & LED"
    ],
    "ingredients": "Dispositivo médico-estético de titanio y cabezal ergonómico con conexión Bluetooth inteligente.",
    "benefits": "Multiplica por 8 la absorción de los principios activos en la piel mediante electroporación, reafirma con microcorriente y activa el colágeno.",
    "use": "Usa de 1 a 3 minutos diarios combinándolo con tus sérums y cremas favoritas."
  },
  {
    "id": 26,
    "brand": "MEDICUBE",
    "title": "AGE-R Booster Pro Mini",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Absorción ultra rápida portátil",
    "price": 267.15,
    "image": "./images/products/medicube-age-r-booster-pro-mini.webp",
    "gallery": [
      "./images/products/medicube-age-r-booster-pro-mini.webp"
    ],
    "attributes": [
      "Compacto",
      "Glow Instantáneo",
      "Uso diario"
    ],
    "ingredients": "Dispositivo portátil de electroporación con electrodos de precisión.",
    "benefits": "Versión compacta del Booster Pro que lleva tus sérums a las capas profundas de la epidermis en segundos para un brillo instantáneo.",
    "use": "Desliza en movimientos circulares ascendentes sobre la piel con sérum."
  },
  {
    "id": 27,
    "brand": "MEDICUBE",
    "title": "Body Wash Kojic Acid Clarifying",
    "category": "Limpiadores",
    "skinTypes": [
      "Antimanchas",
      "Tendencia al Acné"
    ],
    "compatibility": "Cuerpo y Espalda (Bacné)",
    "price": 35.1,
    "image": "./images/products/medicube-body-wash-kojic.webp",
    "gallery": [
      "./images/products/medicube-body-wash-kojic.webp"
    ],
    "attributes": [
      "Ácido Kójico",
      "Cúrcuma",
      "Niacinamida 2%"
    ],
    "ingredients": "Ácido kójico puro, cúrcuma, niacinamida al 2% y vitamina C.",
    "benefits": "Gel de ducha dermatológico que aclara manchas corporales, unifica codos/axilas y elimina brotes de acné en espalda y pecho.",
    "use": "Aplica en la ducha con una esponja suave, masajea 1 minuto y enjuaga con agua tibia."
  },
  {
    "id": 28,
    "brand": "MIXSOON",
    "title": "Bean Daily Suncream SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Nutrición con Extracto de Soya",
    "price": 24.97,
    "image": "./images/products/mixsoon-bean-suncream.webp",
    "gallery": [
      "./images/products/mixsoon-bean-suncream.webp"
    ],
    "attributes": [
      "Extracto de Soja",
      "SPF 50+ PA++++",
      "Sin fragancia"
    ],
    "ingredients": "Extracto fermentado de soja coreana, lactobacillus y filtros UVA/UVB fotoestables.",
    "benefits": "Protector solar hidratante que fortalece la barrera gracias a las proteínas fermentadas de la soja, dejando la piel tersa y sedosa.",
    "use": "Extiende generosamente tras tu crema hidratante habitual."
  },
  {
    "id": 29,
    "brand": "MIXSOON",
    "title": "Double Step Cleansing Duo Set",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Doble Limpieza Coreana Completa",
    "price": 48,
    "image": "./images/products/mixsoon-doble-limpieza-kit.webp",
    "gallery": [
      "./images/products/mixsoon-doble-limpieza-kit.webp"
    ],
    "attributes": [
      "Aceite Soya 195ml",
      "Espuma Centella 150ml",
      "Doble Limpieza"
    ],
    "ingredients": "Aceite limpiador de soja fermentada y espuma limpiadora suave de centella asiática.",
    "benefits": "Paso 1 disuelve maquillaje, protector solar y grasa de poros; Paso 2 purifica suavemente con espuma calmante sin alterar el pH.",
    "use": "Masajea el aceite en rostro seco, emulsiona con agua y enjuaga. Prosigue con la espuma."
  },
  {
    "id": 30,
    "brand": "MIXSOON",
    "title": "Pure Glow Essentials Glass Skin Set",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Rutina Glass Skin Fermentada",
    "price": 38.9,
    "image": "./images/products/mixsoon-pure-glow-set.webp",
    "gallery": [
      "./images/products/mixsoon-pure-glow-set.webp"
    ],
    "attributes": [
      "Rutina Esencial",
      "Soja Fermentada",
      "Glass Skin"
    ],
    "ingredients": "Bean Essence, Bean Cream y limpiador en formato especial de viaje.",
    "benefits": "El set icónico para lograr el efecto piel de porcelana (Glass Skin) exfoliando gentilmente e hidratando con mucílago vegetal de soja.",
    "use": "Usa a diario en el orden de limpiador, esencia y crema."
  },
  {
    "id": 31,
    "brand": "NUMBUZIN",
    "title": "No.1 PDRN Hydra Glow Toner",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Tónico regenerador PDRN",
    "price": 31.56,
    "image": "./images/products/numbuzin-no1-pdrn-toner.webp",
    "gallery": [
      "./images/products/numbuzin-no1-pdrn-toner.webp"
    ],
    "attributes": [
      "PDRN Botánico",
      "Ácido Hialurónico",
      "Textura Esencia"
    ],
    "ingredients": "PDRN vegetal de bajo peso molecular, agua termal y pantenol.",
    "benefits": "Tónico con textura de esencia espesa que rellena la piel deshidratada, mejorando la retención de agua y la elasticidad inmediata.",
    "use": "Aplica en las palmas y presiona suavemente sobre el rostro limpio hasta su absorción."
  },
  {
    "id": 32,
    "brand": "NUMBUZIN",
    "title": "No.1 Retinal Youth Boosting Serum",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Antiedad / Retinal Estable",
    "price": 27.5,
    "image": "./images/products/numbuzin-no1-retinal-serum.webp",
    "gallery": [
      "./images/products/numbuzin-no1-retinal-serum.webp"
    ],
    "attributes": [
      "Retinal 0.05%",
      "Liposomado",
      "Baja irritación"
    ],
    "ingredients": "Retinal encapsulado en liposomas, niacinamida y ceramidas.",
    "benefits": "El retinal actúa 11 veces más rápido que el retinol tradicional para suavizar arrugas y manchas con mínimo riesgo de irritación.",
    "use": "Aplica de noche tras el tónico, comenzando 2 a 3 veces por semana."
  },
  {
    "id": 33,
    "brand": "NUMBUZIN",
    "title": "No.9 NAD+ Collagen Under Eye Patches (Caja)",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Parches antiojeras y firmeza",
    "price": 23.53,
    "image": "./images/products/numbuzin-patches-nad-collagen-caja.webp",
    "gallery": [
      "./images/products/numbuzin-patches-nad-collagen-caja.webp"
    ],
    "attributes": [
      "NAD+ Coenzima",
      "Colágeno Marino",
      "Caja con pares"
    ],
    "ingredients": "Coenzima celular NAD+, colágeno hidrolizado puro, cafeína y niacinamida.",
    "benefits": "Parches de hidrogel refrescante que reactivan la energía celular del contorno de ojos, desinflamando bolsas y alisando arrugas.",
    "use": "Coloca bajo los ojos limpios durante 20 a 30 minutos y retira con toques suaves."
  },
  {
    "id": 34,
    "brand": "NUMBUZIN",
    "title": "No.9 NAD+ Collagen Under Eye Patches (Individual)",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Tratamiento intensivo individual",
    "price": 5,
    "image": "./images/products/numbuzin-patches-nad-collagen-individual.webp",
    "gallery": [
      "./images/products/numbuzin-patches-nad-collagen-individual.webp"
    ],
    "attributes": [
      "1 Sobre individual",
      "Efecto flash",
      "Fácil de llevar"
    ],
    "ingredients": "Fórmula de colágeno marino concentrado y NAD+ rejuvenecedor.",
    "benefits": "Ideal para eventos especiales, vuelos o días de poco descanso. Efecto lifting y descongestión inmediata en la mirada.",
    "use": "Abre el sobre y aplica directamente sobre el contorno de ojos limpio."
  },
  {
    "id": 35,
    "brand": "PURITO",
    "title": "Oat-In Calming Gel Cream",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Calmante refrescante de avena",
    "price": 29.53,
    "image": "./images/products/purito-oat-in-calming-gel.webp",
    "gallery": [
      "./images/products/purito-oat-in-calming-gel.webp"
    ],
    "attributes": [
      "Agua de Avena 77%",
      "Gel Fresco",
      "Sin aceites"
    ],
    "ingredients": "Agua de semilla de avena (77%), pantenol y escualano vegetal.",
    "benefits": "Gel ultraligero que alivia quemaduras solares, rojeces y reactividad cutánea sin dejar rastro grasoso ni ocluir los poros.",
    "use": "Aplica generosamente sobre rostro y cuello mañana y noche."
  },
  {
    "id": 36,
    "brand": "PURITO",
    "title": "Wonder Re-Leaf Centella Serum (60ml)",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné"
    ],
    "compatibility": "Centella calmante sin perfume",
    "price": 40.18,
    "image": "./images/products/purito-wonder-centella-serum.webp",
    "gallery": [
      "./images/products/purito-wonder-centella-serum.webp"
    ],
    "attributes": [
      "Centella 49%",
      "Niacinamida",
      "Sin fragancia"
    ],
    "ingredients": "Extracto de centella asiática al 49%, madecassoside, péptidos y ceramidas.",
    "benefits": "Suero restaurador de barrera diseñado específicamente para pieles ultra sensibles propensas a la irritación y dermatitis.",
    "use": "Aplica de 1 a 2 pulsaciones tras la limpieza y tónico."
  },
  {
    "id": 37,
    "brand": "PURITO",
    "title": "Retinal TXA Niacinamide 10 Facial Serum",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Triple acción manchas y arrugas",
    "price": 38.51,
    "image": "./images/products/purito-retinal-txa-serum.webp",
    "gallery": [
      "./images/products/purito-retinal-txa-serum.webp"
    ],
    "attributes": [
      "Retinal puro",
      "Ácido Tranexámico",
      "Niacinamida 10%"
    ],
    "ingredients": "Retinal encapsulado, ácido tranexámico, niacinamida al 10% y alantoína.",
    "benefits": "Combina los 3 ingredientes más potentes de la dermatología para regenerar la piel, desvanecer manchas y suavizar líneas finas.",
    "use": "Usa de noche. Aplica 2 o 3 gotas tras el tónico y finaliza con crema hidratante."
  },
  {
    "id": 38,
    "brand": "PURITO",
    "title": "Daily Soft Touch Sun Stick Barrier SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Barrera protectora en barra",
    "price": 33.39,
    "image": "./images/products/purito-sun-stick-barrier.webp",
    "gallery": [
      "./images/products/purito-sun-stick-barrier.webp"
    ],
    "attributes": [
      "SPF 50+ PA++++",
      "Ceramidas",
      "Tacto Sedoso"
    ],
    "ingredients": "Cinco tipos de ceramidas esenciales, centella y filtros fotoestables de amplio espectro.",
    "benefits": "Protección solar física y química que refuerza la barrera cutánea a la vez que sella la hidratación con acabado mate satinado.",
    "use": "Reaplica cada 2 horas deslizándolo uniformemente por el rostro."
  },
  {
    "id": 39,
    "brand": "PURITO",
    "title": "Mighty Bamboo Panthenol Cream (100ml)",
    "category": "Hidratantes",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Reparación intensiva de barrera",
    "price": 40.18,
    "image": "./images/products/purito-bamboo-panthenol-cream.webp",
    "gallery": [
      "./images/products/purito-bamboo-panthenol-cream.webp"
    ],
    "attributes": [
      "Bambú coreano",
      "Pantenol 10%",
      "Barrera dañada"
    ],
    "ingredients": "Extracto de bambú de Damyang, pantenol al 10%, escualano y ectoína.",
    "benefits": "Crema de barrera rica pero de absorción rápida que repara pieles agrietadas o dañadas por retinoides y ácidos fuertes.",
    "use": "Aplica mañana y noche como último paso de nutrición de tu rutina."
  },
  {
    "id": 40,
    "brand": "PURITO",
    "title": "No.1 Centella Recovery Serum",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Tendencia al Acné"
    ],
    "compatibility": "Cicatrización y confort",
    "price": 43.8,
    "image": "./images/products/purito-no1-serum.webp",
    "gallery": [
      "./images/products/purito-no1-serum.webp"
    ],
    "attributes": [
      "Alta concentración",
      "Centella coreana",
      "Hipoalergénico"
    ],
    "ingredients": "Centella fermentada, asiaticoside y ácido hialurónico.",
    "benefits": "Fórmula maestra de Purito para calmar brotes de inflamación aguda y restaurar el manto hidrolipídico.",
    "use": "Distribuye suavemente sobre las áreas afectadas o en todo el rostro."
  },
  {
    "id": 41,
    "brand": "ROUND LAB",
    "title": "Birch Juice Moisturizing Sunscreen Cream SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "El protector más vendido de Corea",
    "price": 27.6,
    "image": "./images/products/round-lab-sunscreen-cream.webp",
    "gallery": [
      "./images/products/round-lab-sunscreen-cream.webp"
    ],
    "attributes": [
      "Savia de Abedul",
      "SPF 50+ PA++++",
      "Top 1 en Corea"
    ],
    "ingredients": "Savia de abedul de Inje, ácido hialurónico y filtros solares orgánicos.",
    "benefits": "Hidrata como una crema ligera mientras brinda la máxima protección solar aprobada sin dejar rastro blanco ni sensación grasosa.",
    "use": "Aplica en el rostro antes de salir de casa como último paso de tu rutina matutina."
  },
  {
    "id": 42,
    "brand": "ROUND LAB",
    "title": "Birch Juice Moisturizing Sun UV Serum SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Piel Seca"
    ],
    "compatibility": "Formato Sérum Solar Ultraligero",
    "price": 27.47,
    "image": "./images/products/round-lab-sun-uv-serum.webp",
    "gallery": [
      "./images/products/round-lab-sun-uv-serum.webp"
    ],
    "attributes": [
      "Textura Serum Acuoso",
      "Absorción Instantánea",
      "SPF 50+"
    ],
    "ingredients": "Savia de abedul de alta pureza, vita-ácido hialurónico y niacinamida.",
    "benefits": "Para quienes odian la textura pesada del protector solar: absorción inmediata como un suero hidratante refrescante.",
    "use": "Aplica 2 a 3 goteros distribuyéndolos de forma uniforme."
  },
  {
    "id": 43,
    "brand": "SKIN1004",
    "title": "Madagascar Centella Asiatica 100 Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Sensible/Rojeces",
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "100% Extracto Botánico Puro",
    "price": 36.9,
    "image": "./images/products/skin1004-madagascar-centella.webp",
    "gallery": [
      "./images/products/skin1004-madagascar-centella.webp"
    ],
    "attributes": [
      "Centella 100%",
      "Madagascar",
      "Equilibrante"
    ],
    "ingredients": "Extracto puro al 100% de centella asiática cosechada en Madagascar.",
    "benefits": "Un solo ingrediente de máxima pureza para aliviar rojeces, acelerar cicatrización y reparar la barrera sin saturar la piel.",
    "use": "Aplica 2 a 3 gotas dando suaves toques sobre el rostro limpio."
  },
  {
    "id": 44,
    "brand": "SKIN1004",
    "title": "Centella Poremizing Fresh Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Poros dilatados y exceso de sebo",
    "price": 32.95,
    "image": "./images/products/skin1004-ampoule-poremizing.webp",
    "gallery": [
      "./images/products/skin1004-ampoule-poremizing.webp"
    ],
    "attributes": [
      "Sal Rosa del Himalaya",
      "Péptidos 9",
      "Minimizador"
    ],
    "ingredients": "Sal rosa del Himalaya, extracto de centella y complejo de 9 péptidos tensores.",
    "benefits": "Limpia y purifica los poros a profundidad a la vez que recupera la elasticidad del poro para evitar que se dilate.",
    "use": "Aplica mañana y noche antes de tu crema hidratante."
  },
  {
    "id": 45,
    "brand": "SKIN1004",
    "title": "Centella Tone Brightening Capsule Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Antimanchas",
      "Piel Seca"
    ],
    "compatibility": "Luminosidad y Tono Parejo",
    "price": 34.95,
    "image": "./images/products/skin1004-ampoule-tone-brightening.webp",
    "gallery": [
      "./images/products/skin1004-ampoule-tone-brightening.webp"
    ],
    "attributes": [
      "MadeWhite™",
      "Niacinamida 4%",
      "Ácido Tranexámico"
    ],
    "ingredients": "MadeWhite patentado (centella microencapsulada), niacinamida al 4% y ácido tranexámico al 2%.",
    "benefits": "Microcápsulas que se funden al contacto para aclarar manchas oscuras, pecas y marcas rebeldes sin provocar fotosensibilidad.",
    "use": "Aplica mañana y noche para potenciar la luminosidad natural."
  },
  {
    "id": 46,
    "brand": "SKIN1004",
    "title": "Centella Hyalu-Cica Water-Fit Sun Serum SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Textura Suero Ligero Invisible",
    "price": 28.7,
    "image": "./images/products/skin1004-sun-serum-uv.webp",
    "gallery": [
      "./images/products/skin1004-sun-serum-uv.webp"
    ],
    "attributes": [
      "Hyalu-Cica",
      "Sin efecto blanco",
      "Calmante"
    ],
    "ingredients": "Fórmula patentada Hyalu-Cica (ácido hialurónico + centella asiática) y extracto de té verde.",
    "benefits": "Uno de los protectores más amados del mundo: sensación de crema hidratante ligera con cero pegajosidad y cero brillo excesivo.",
    "use": "Aplica generosamente sobre rostro y cuello tras la crema o directamente tras el sérum."
  },
  {
    "id": 47,
    "brand": "SKIN1004",
    "title": "Probio-Cica Intensive Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Microbioma y Barrera Muy Dañada",
    "price": 46.34,
    "image": "./images/products/skin1004-probio-cica-intensive.webp",
    "gallery": [
      "./images/products/skin1004-probio-cica-intensive.webp"
    ],
    "attributes": [
      "Centella Fermentada",
      "Probióticos",
      "Textura Rica"
    ],
    "ingredients": "Centella fermentada con lactobacilos de la isla de Madagascar, ceramidas y cica.",
    "benefits": "Nutre el microbioma cutáneo y sella microfisuras en pieles extremadamente reactivas, secas o descamadas.",
    "use": "Aplica de noche con un suave masaje en rostro y cuello."
  },
  {
    "id": 48,
    "brand": "SKIN1004",
    "title": "Travel Kit Madagascar Centella (5 Pasos)",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Rutina completa de viaje",
    "price": 50.7,
    "image": "./images/products/skin1004-travel-kit-estandar.webp",
    "gallery": [
      "./images/products/skin1004-travel-kit-estandar.webp"
    ],
    "attributes": [
      "5 Productos",
      "Aceite + Espuma + Tónico + Ampolla + Crema",
      "Aprobado Cabina"
    ],
    "ingredients": "Rutina completa de la línea clásica Madagascar Centella en envases miniatura oficiales.",
    "benefits": "Todo lo que necesitas para cuidar tu piel mientras viajas sin romper tu rutina de skincare coreano.",
    "use": "Sigue los pasos secuenciales: Desmaquillado > Limpieza > Tónico > Ampolla > Hidratación."
  },
  {
    "id": 49,
    "brand": "SKIN1004",
    "title": "Travel Kit Centella Poremizing (4 Pasos)",
    "category": "Dispositivos & Sets",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Rutina específica control poros",
    "price": 40.23,
    "image": "./images/products/skin1004-travel-kit-poremizing.webp",
    "gallery": [
      "./images/products/skin1004-travel-kit-poremizing.webp"
    ],
    "attributes": [
      "Línea Poremizing",
      "Sal Rosa Himalaya",
      "Control Grasa"
    ],
    "ingredients": "Limpiador profundo, tónico astringente suave, ampolla concentrada y gel crema ligero.",
    "benefits": "El kit de rescate para mantener los poros limpios y el brillo controlado en climas cálidos y viajes.",
    "use": "Rutina completa mañana y noche para equilibrar la zona T."
  },
  {
    "id": 50,
    "brand": "STAGE",
    "title": "Cica-Tree Water Jelly Sun SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Tendencia al Acné",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Protector Solar en Gel Acuoso Refrescante",
    "price": 23.33,
    "image": "./images/products/stage-cica-tree-water-jelly.webp",
    "gallery": [
      "./images/products/stage-cica-tree-water-jelly.webp"
    ],
    "attributes": [
      "Tea Tree + Cica",
      "Gel Acuoso",
      "Efecto Refrescante"
    ],
    "ingredients": "Agua de árbol de té australiano, centella asiática y filtros UV ultraligeros.",
    "benefits": "Textura acuosa tipo jalea que calma al instante los brotes activos de acné mientras protege del sol con sensación cero peso.",
    "use": "Aplica de manera uniforme en rostro y cuello."
  },
  {
    "id": 51,
    "brand": "TOCOBO",
    "title": "Cotton Soft Sun Stick SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Acabado Mate Sedoso Polvo de Algodón",
    "price": 24.55,
    "image": "./images/products/tocobo-cotton-sun-stick.webp",
    "gallery": [
      "./images/products/tocobo-cotton-sun-stick.webp"
    ],
    "attributes": [
      "Extracto de Algodón",
      "Micro Sílice",
      "Mate Real"
    ],
    "ingredients": "Extracto de algodón, complejo AC Herb calmante y polvo de sílice absorbente de sebo.",
    "benefits": "El protector en barra más famoso por su acabado suave como terciopelo: no deja brillo, matifica la piel y se reaplica sobre el maquillaje con facilidad.",
    "use": "Desliza en rostro y cuello cada 2 a 3 horas."
  },
  {
    "id": 52,
    "brand": "TOCOBO",
    "title": "Bio Watery Sun Cream SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta"
    ],
    "compatibility": "Protector hidratante ligero",
    "price": 25.8,
    "image": "./images/products/tocobo-bio-sun-watery.webp",
    "gallery": [
      "./images/products/tocobo-bio-sun-watery.webp"
    ],
    "attributes": [
      "Ácido Bio-Hialurónico",
      "Beta-Glucano",
      "Cero residuo"
    ],
    "ingredients": "Ácido bio-hialurónico natural, beta-glucano de hongos y extracto de flor de algodón.",
    "benefits": "Sensación fresca y ligera como agua que calma e hidrata la piel mientras brinda alta protección UVB y UVA.",
    "use": "Aplica en rostro y cuello antes del maquillaje o exposición solar."
  },
  {
    "id": 53,
    "brand": "VT COSMETICS",
    "title": "VT Reedle Shot 100 PDRN Essence",
    "category": "Sérums",
    "skinTypes": [
      "Todos"
    ],
    "compatibility": "Micro-Espículas de Cica y PDRN",
    "price": 45.39,
    "image": "./images/products/vt-reedle-shot-pdrn.webp",
    "gallery": [
      "./images/products/vt-reedle-shot-pdrn.webp"
    ],
    "attributes": [
      "Cica Reedle™",
      "PDRN Ginseng",
      "Penetración Celular"
    ],
    "ingredients": "Microespículas minerales de cica purificada, PDRN botánico de panax ginseng y centella.",
    "benefits": "Tecnología coreana viral de microestimulación que abre canales microscópicos temporales en la piel para multiplicar la absorción y renovación celular.",
    "use": "Aplica de noche sobre la piel limpia dando presiones suaves (sentirás un cosquilleo natural)."
  },
  {
    "id": 54,
    "brand": "VT COSMETICS",
    "title": "VT PDRN Cápsulas Rejuvenecedoras",
    "category": "Sérums",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Dosis monodosis concentrada",
    "price": 40.53,
    "image": "./images/products/vt-pdrn-capsulas.webp",
    "gallery": [
      "./images/products/vt-pdrn-capsulas.webp"
    ],
    "attributes": [
      "Phyto-PDRN Panax",
      "Monodosis Frescas",
      "Lifting Intenso"
    ],
    "ingredients": "Phyto-PDRN extraído de ginseng silvestre coreano, ceramidas y péptidos.",
    "benefits": "Cápsulas selladas que mantienen la pureza de los activos bioidénticos para devolver la densidad, firmeza y tersura a la piel madura o apagada.",
    "use": "Gira la punta de la cápsula y aplica todo su contenido por la noche en rostro y cuello."
  },
  {
    "id": 55,
    "brand": "COSRX",
    "title": "Master Patch Acne Pimple Clear (24 Parches)",
    "category": "Limpiadores",
    "skinTypes": [
      "Tendencia al Acné"
    ],
    "compatibility": "Parches hidrocoloides para brotes",
    "price": 6,
    "image": "./images/products/cosrx-acne-pimple-patch.webp",
    "gallery": [
      "./images/products/cosrx-acne-pimple-patch.webp"
    ],
    "attributes": [
      "Hidrocoloide puro",
      "24 Parches en 3 tamaños",
      "Invisible"
    ],
    "ingredients": "Material hidrocoloide médico adhesivo hipoalergénico.",
    "benefits": "Absorbe el pus y las bacterias del grano mientras duermes, evitando la inflamación y previniendo la formación de marcas o cicatrices.",
    "use": "Coloca sobre la piel limpia y seca justo encima de la imperfección."
  },
  {
    "id": 56,
    "brand": "DR. MELAXIN",
    "title": "Dr. Melaxin BP Pore & Blemish Ampoule",
    "category": "Sérums",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Antimanchas"
    ],
    "compatibility": "Poros dilatados y manchas post-inflamatorias",
    "price": 34.68,
    "image": "./images/products/dr-melaxin-ampoule.webp",
    "gallery": [
      "./images/products/dr-melaxin-ampoule.webp"
    ],
    "attributes": [
      "Bio-Peeling",
      "Retracción de Poros",
      "Tono Uniforme"
    ],
    "ingredients": "Complejo BP patentado, niacinamida, ácido succínico y extracto de manzana verde.",
    "benefits": "Fórmula de cosmecéutica coreana que regula la proliferación sebácea, afina poros abiertos y desvanece manchas de acné rebeldes.",
    "use": "Aplica de 2 a 3 gotas mañana y noche."
  },
  {
    "id": 57,
    "brand": "ANUA",
    "title": "Heartleaf 77% Soothing Toner",
    "category": "Tónicos & Esencias",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Piel Sensible/Rojeces",
      "Tendencia al Acné"
    ],
    "compatibility": "Tónico viral N°1 calmante para rojeces y acné",
    "price": 41.18,
    "image": "./images/products/anua-heartleaf-77-toner.webp",
    "gallery": [
      "./images/products/anua-heartleaf-77-toner.webp"
    ],
    "attributes": [
      "Heartleaf 77%",
      "Calmante",
      "Anti-rojeces"
    ],
    "ingredients": "Extracto de Houttuynia Cordata (77%), centella asiática, pantenol y extracto de manzanilla.",
    "benefits": "El tónico más premiado de Corea: calma brotes agudos de acné, reduce la temperatura de la piel, elimina rojeces y balancea el pH sin irritar.",
    "use": "Aplica con un disco de algodón o directamente con las manos con suaves toques tras la limpieza."
  },
  {
    "id": 58,
    "brand": "ANUA",
    "title": "Heartleaf Pore Control Cleansing Oil",
    "category": "Limpiadores",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné",
      "Todos"
    ],
    "compatibility": "Primer paso doble limpieza / Desincrustante de puntos negros",
    "price": 39.7,
    "image": "./images/products/anua-heartleaf-cleansing-oil.webp",
    "gallery": [
      "./images/products/anua-heartleaf-cleansing-oil.webp"
    ],
    "attributes": [
      "No Comedogénico",
      "Heartleaf",
      "Elimina Puntos Negros"
    ],
    "ingredients": "Extracto de Heartleaf, aceite de jojoba, aceite de oliva y aceite de semilla de macadamia.",
    "benefits": "Aceite limpiador no comedogénico que derrite el sebo oxidado de los poros, puntos negros y maquillaje a prueba de agua sin taponar.",
    "use": "Masajea suavemente sobre el rostro seco durante 1 minuto, añade agua tibia para emulsionar en leche blanca y enjuaga."
  },
  {
    "id": 59,
    "brand": "BEAUTY OF JOSEON",
    "title": "Relief Sun: Rice + Probiotics SPF 50+ PA++++",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Seca",
      "Piel Grasa/Mixta",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Protector solar químico bestseller mundial hidratante",
    "price": 31.76,
    "image": "./images/products/boj-relief-sun-rice.webp",
    "gallery": [
      "./images/products/boj-relief-sun-rice.webp"
    ],
    "attributes": [
      "Extracto de Arroz 30%",
      "Probióticos",
      "Acabado Glow Natural"
    ],
    "ingredients": "Extracto de salvado de arroz al 30%, complejo fermentado de probióticos y niacinamida.",
    "benefits": "Protector solar orgánico cremoso y ligero que nutre la piel como una crema hidratante iluminadora sin residuo blanco ni olor químico.",
    "use": "Aplica uniformemente en rostro, cuello y orejas como último paso de tu rutina matutina."
  },
  {
    "id": 60,
    "brand": "BEAUTY OF JOSEON",
    "title": "Matte Sun Stick: Mugwort + Camelia SPF 50+",
    "category": "Protector Solar",
    "skinTypes": [
      "Piel Grasa/Mixta",
      "Tendencia al Acné"
    ],
    "compatibility": "Reaplicación mate sin grasa sobre maquillaje",
    "price": 32.83,
    "image": "./images/products/boj-matte-sun-stick.webp",
    "gallery": [
      "./images/products/boj-matte-sun-stick.webp"
    ],
    "attributes": [
      "Mugwort Calmante",
      "Polvo de Sílice",
      "Cero Brillos"
    ],
    "ingredients": "Extracto de artemisa (mugwort), extracto de té verde de camelia y polvo matificante de sílice.",
    "benefits": "Protector solar en barra diseñado junto a dermatólogos para controlar el sebo y reaplicar en segundos dejando un tacto aterciopelado mate.",
    "use": "Desliza en rostro y cuello cada 2 a 3 horas sin arrastrar el maquillaje."
  },
  {
    "id": 61,
    "brand": "BEAUTY OF JOSEON",
    "title": "Revive Eye Serum: Ginseng + Retinal",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Todos",
      "Piel Seca",
      "Antimanchas"
    ],
    "compatibility": "Contorno antiedad para arrugas, ojeras y firmeza",
    "price": 31,
    "image": "./images/products/boj-revive-eye-serum.webp",
    "gallery": [
      "./images/products/boj-revive-eye-serum.webp"
    ],
    "attributes": [
      "Ginseng 10%",
      "Retinal Liposomado 2%",
      "Antiarrugas"
    ],
    "ingredients": "Extracto de raíz de ginseng al 10%, retinal liposomado al 2%, niacinamida y ceramidas.",
    "benefits": "Suero de contorno con retinal altamente bioasimilable que combate arrugas profundas y estimula el colágeno con suavidad.",
    "use": "Aplica de noche de 1 a 2 toques suaves con el dedo anular alrededor del hueso orbital."
  },
  {
    "id": 62,
    "brand": "AXIS-Y",
    "title": "Vegan Collagen Eye Serum",
    "category": "Ojos & Labios",
    "skinTypes": [
      "Todos",
      "Piel Sensible/Rojeces",
      "Piel Seca"
    ],
    "compatibility": "Colágeno vegano y aplicador frío descongestivo",
    "price": 41.18,
    "image": "./images/products/axis-y-collagen-eye-serum.webp",
    "gallery": [
      "./images/products/axis-y-collagen-eye-serum.webp"
    ],
    "attributes": [
      "Colágeno Vegano",
      "Aplicador Cool-Touch",
      "Anti-Hinchazón"
    ],
    "ingredients": "Colágeno vegano fermentado de bajo peso molecular, extracto de flor de caléndula, cafeína y péptidos.",
    "benefits": "Desinflama párpados y ojeras cansadas al instante con su aplicador metálico ergonómico mientras rellena líneas finas.",
    "use": "Presiona suavemente el tubo y desliza el aplicador frío en movimientos circulares de adentro hacia afuera."
  },
  {
    "id": 63,
    "brand": "BIODANCE",
    "title": "Bio-Collagen Real Deep Mask (Caja 4 Unidades)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Mascarilla hidrogel nocturna de colágeno puro ultra viral",
    "price": 33.56,
    "image": "./images/products/biodance-collagen-mask-box.webp",
    "gallery": [
      "./images/products/biodance-collagen-mask-box.webp"
    ],
    "attributes": [
      "Caja de 4 Mascarillas",
      "Hidrogel Transparente",
      "Ultra Glow"
    ],
    "ingredients": "Colágeno oligo-peptídico de 243 Daltons, ácido oligohialurónico y probióticos galactomyces.",
    "benefits": "Se vuelve totalmente transparente a medida que la piel absorbe todos los nutrientes durante la noche; poros invisibles y firmeza de cristal.",
    "use": "Aplica tras tu rutina de noche y déjala actuar de 3 a 4 horas o durante toda la noche."
  },
  {
    "id": 64,
    "brand": "BIODANCE",
    "title": "Bio-Collagen Real Deep Mask (Individual 1 Unidad)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Antimanchas",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Sobre individual para probar el efecto de porcelana",
    "price": 9.12,
    "image": "./images/products/biodance-collagen-mask-individual.webp",
    "gallery": [
      "./images/products/biodance-collagen-mask-individual.webp"
    ],
    "attributes": [
      "1 Sobre Individual",
      "243Da Oligo Colágeno",
      "Efecto Flash"
    ],
    "ingredients": "Colágeno oligo-peptídico de 243 Daltons, ácido oligohialurónico y probióticos galactomyces.",
    "benefits": "Formato individual ideal para probar la mascarilla viral de Corea o para lucir una piel luminosa antes de un evento importante.",
    "use": "Aplica después del sérum y retira una vez que se vuelva completamente transparente."
  },
  {
    "id": 65,
    "brand": "BIODANCE",
    "title": "Hydro Cera-Nol Real Deep Mask Caviar (Caja 4 Unidades)",
    "category": "Mascarillas",
    "skinTypes": [
      "Piel Seca",
      "Piel Sensible/Rojeces"
    ],
    "compatibility": "Reparación intensiva de barrera y ceramidas",
    "price": 33.56,
    "image": "./images/products/biodance-caviar-mask-box.webp",
    "gallery": [
      "./images/products/biodance-caviar-mask-box.webp"
    ],
    "attributes": [
      "Cera-Nol 50,000ppm",
      "Ceramidas + Pantenol",
      "Calmante Profundo"
    ],
    "ingredients": "Complejo Cera-Nol (ceramida NP, pantenol y ácido hialurónico) con agua glaciar de alta pureza.",
    "benefits": "La variante reparadora para pieles deshidratadas y rojeces: alivia la irritación, reconstruye la barrera celular y retiene la humedad.",
    "use": "Coloca sobre la piel limpia de 3 a 5 horas o duerme con ella puesta para despertar con piel descansada."
  }
];

export function generateWhatsAppLink(product: Product): string {
  const phone = '584128956976';
  const text = encodeURIComponent(
    `¡Hola Akami! ✨ Me interesa información y disponibilidad de: ${product.title} (${product.brand}) - $${product.price.toFixed(2)} USD.`
  );
  return `https://wa.me/${phone}?text=${text}`;
}
