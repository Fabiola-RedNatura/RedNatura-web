const productos = [
  {
    id: 1,
    nombre: "PROBI GO!",
    precio: "$1098",
    presentacion: "Caja con 30 stickpacks de 2g",
    categoria: "Salud Digestiva",
    ingredientes: [
      "Lactobacillus rhamnosus",
      "Lactiplantibacillus plantarum",
      "Bifidobacterium animalis",
      "Inulina",
      "Vitamina D3",
      "Zinc"
    ],
    beneficios: [
      "Mantiene microbiota intestinal equilibrada",
      "Fortalece defensas naturales",
      "Favorece absorción de nutrientes",
      "Protege mucosa intestinal",
      "Aporta antioxidantes"
    ],
    modoUso: "Tomar 1 stickpack al día, directamente o disuelto en 240 ml de agua",
    descripcion: "Suplemento con prebióticos, probióticos y postbióticos para salud digestiva."
  },
  {
    id: 2,
    nombre: "ZENDRA",
    precio: "$807",
    presentacion: "Frasco con 60 cápsulas de 750mg",
    categoria: "Bienestar Mental",
    ingredientes: ["Ashwagandha","Melena de León","Bacopa"],
    beneficios: [
      "Reduce estrés y cortisol",
      "Favorece memoria y concentración",
      "Apoya salud cerebral",
      "Mejora sueño y bienestar emocional"
    ],
    modoUso: "Tomar 2 cápsulas al día (1 mañana, 1 noche)",
    descripcion: "Suplemento con Ashwagandha y Melena de León para estrés y memoria."
  },
  {
    id: 3,
    nombre: "FEMBALAZ",
    precio: "$900",
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Mujeres",
    ingredientes: [
      "Probióticos (Lactobacillus reuteri, fermentum, acidophilus, rhamnosus)",
      "Myo-inositol",
      "Arándano",
      "Nopal",
      "Vitamina C",
      "Inulina de agave",
      "Fruto de plátano"
    ],
    beneficios: [
      "Fortalece defensas",
      "Equilibrio microbiota intestinal, urinaria y vaginal",
      "Favorece equilibrio hormonal femenino",
      "Mantiene pH vaginal saludable",
      "Previene infecciones urinarias",
      "Protección celular antioxidante",
      "Mejora digestión y absorción de nutrientes"
    ],
    modoUso: "Tomar 2 cápsulas al día",
    descripcion: "Suplemento femenino para salud urinaria, intestinal y equilibrio hormonal."
  },
  {
    id: 4,
    nombre: "LEVIUS",
    precio: "$516",
    presentacion: "Frasco con 30 cápsulas de 600mg",
    categoria: "Control de Peso",
    ingredientes: [
      "Café verde","Vinagre de manzana","Propionil-L-carnitina","Nopal",
      "Té verde","Picolinato de cromo","Bifidobacterium longum","Papaína","Vitamina D3"
    ],
    beneficios: [
      "Controla apetito","Apoya pérdida de peso","Disminuye glucosa, colesterol y triglicéridos",
      "Favorece salud digestiva","Aumenta energía","Propiedades antioxidantes","Favorece circulación"
    ],
    modoUso: "Tomar 1 cápsula por la mañana antes del desayuno",
    descripcion: "Suplemento para control de peso y metabolismo."
  },
  {
    id: 5,
    nombre: "LEVIUS NIGHT",
    precio: "$593",
    presentacion: "Frasco con 30 cápsulas de 500mg",
    categoria: "Control de Peso",
    ingredientes: ["Chá de bugre","Jengibre","Cocolmeca","Ciruela","Malva","Naranjo amargo","Papaya","Nopal","Lima","Tila"],
    beneficios: [
      "Disminuye el apetito",
      "Favorece la quema de grasa abdominal",
      "Apoya la pérdida de peso",
      "Contribuye al sistema digestivo",
      "Combate el estreñimiento",
      "Aporta antioxidantes",
      "Efecto diurético natural"
    ],
    modoUso: "Tomar 1 cápsula por la noche antes de dormir",
    descripcion: "Suplemento nocturno para control de peso y digestión."
  },
  {
    id: 6,
    nombre: "Gummys RedNatura",
    precio: "$697",
    presentacion: "Frasco con 60 gomitas de 3g",
    categoria: "Control de Peso",
    ingredientes: ["Vinagre de manzana","Granada","Propionil-L-carnitina glicina","Vitamina B6","Vitamina B12","Ácido fólico","Fruto del monje"],
    beneficios: [
      "Controla el apetito",
      "Favorece reducción de grasa corporal",
      "Apoya digestión y desintoxicación",
      "Efecto diurético",
      "Aumenta energía y desarrollo muscular",
      "Aporta antioxidantes",
      "Favorece salud cardiovascular"
    ],
    modoUso: "Masticar 2 gomitas al día",
    descripcion: "Gomitas funcionales para control de peso y energía."
  },
  {
    id: 7,
    nombre: "DIVANT NF",
    precio: "$656",
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Glucosa y Metabolismo",
    ingredientes: ["Gymnema silvestre","Semilla de uva","Melón amargo","Quercetina","Bifidobacterium longum"],
    beneficios: [
      "Mejora función del páncreas",
      "Contribuye al control de glucosa",
      "Apoya manejo de diabetes",
      "Previene complicaciones por glucosa elevada",
      "Aporta antioxidantes contra oxidación e inflamación"
    ],
    modoUso: "Tomar 1 cápsula cada 12 horas",
    descripcion: "Suplemento para control de glucosa y apoyo metabólico."
  },
  {
    id: 8,
    nombre: "NORANTRIX",
    precio: "$480",
    presentacion: "Caja con 36 sobres de 2g",
    categoria: "Glucosa y Digestión",
    ingredientes: ["Momordica charantia","Nogal"],
    beneficios: [
      "Regula niveles de azúcar en sangre",
      "Apoya función del páncreas",
      "Favorece sistema inmunológico",
      "Aporta antioxidantes",
      "Protege contra estrés oxidativo",
      "Actividad antimicrobiana",
      "Apoya hígado y digestión"
    ],
    modoUso: "Colocar 1 sobre en agua hirviendo, tomar 3 veces al día",
    descripcion: "Té herbolario para glucosa y digestión."
  },
  {
    id: 9,
    nombre: "FLUBI",
    precio: "$458",
    presentacion: "Frasco con 30 cápsulas de 700mg",
    categoria: "Salud Urinaria",
    ingredientes: ["Arándano","Cola de caballo"],
    beneficios: [
      "Favorece función renal y flujo urinario",
      "Previene crecimiento de microorganismos",
      "Apoya en infecciones urinarias",
      "Elimina líquidos retenidos",
      "Apoya salud del sistema urinario"
    ],
    modoUso: "Tomar 1 cápsula por la mañana",
    descripcion: "Suplemento para salud urinaria y renal."
  },
  {
    id: 10,
    nombre: "ANT1-VR",
    precio: "$450",
    presentacion: "Frasco con 30 tabletas",
    categoria: "Sistema Inmunológico",
    ingredientes: ["Sello de oro","Vitamina C","Zinc","Ajo negro","Equinácea","Cordyceps","Elderberry"],
    beneficios: [
      "Fortalece sistema inmunológico",
      "Protección frente a agentes externos",
      "Favorece respuesta natural del organismo",
      "Reduce duración de malestares estacionales",
      "Aporta antioxidantes",
      "Mantiene energía y bienestar general"
    ],
    modoUso: "Tomar 1 tableta al día",
    descripcion: "Suplemento para defensas y bienestar general."
  },
  {
    id: 11,
    nombre: "BLUNNER NF",
    precio: "$625",
    presentacion: "Caja con 20 sobres de 4.3g",
    categoria: "Energía y Rendimiento",
    ingredientes: [
      "L-glutamina","Taurina","Té verde","Guaraná","Stevia","L-arginina",
      "Cafeína anhidra","Glucuronolactona",
      "Vitaminas A, B1, B2, B3, B6, B9, B12, C, D3, E",
      "Minerales: calcio, fósforo, hierro, magnesio, zinc, cobre, yodo, flúor"
    ],
    beneficios: [
      "Proporciona energía diaria",
      "Favorece rendimiento físico y mental",
      "Aporta vitaminas, minerales y aminoácidos",
      "Apoya recuperación tras esfuerzo",
      "Contribuye al bienestar cardiovascular",
      "Acción antioxidante contra estrés oxidativo"
    ],
    modoUso: "Vaciar 1 sobre en 240 ml de agua, mezclar y consumir",
    descripcion: "Bebida energizante en polvo con aminoácidos, vitaminas y minerales."
  },
  {
    id: 12,
    nombre: "CLOORI",
    precio: "$560",
    presentacion: "Frasco con 500 ml, sabor menta-hierbabuena",
    categoria: "Antioxidantes y Bienestar",
    ingredientes: ["Clorofila","Vitaminas","Minerales"],
    beneficios: [
      "Protege células con acción antioxidante",
      "Favorece oxigenación celular",
      "Contribuye al bienestar corporal",
      "Apoya sistema inmunológico",
      "Complementa control de peso y hábitos saludables",
      "Mantiene niveles saludables de colesterol y glucosa"
    ],
    modoUso: "Disolver 5 ml en 240 ml de agua, consumir 2 a 3 veces al día",
    descripcion: "Suplemento líquido a base de clorofila, vitaminas y minerales para energía y bienestar."
  },
  {
    id: 13,
    nombre: "GELTYVIT GUMMYS",
    precio: "$730",
    presentacion: "Frasco con 60 gomitas de 3g",
    categoria: "Multivitamínico Familiar",
    ingredientes: [
      "Vitaminas A, C, E, B1, B2, B5, B6, B12",
      "Ácido fólico","Biotina","Vitamina D3",
      "Minerales: calcio, potasio, yodo, zinc",
      "Omega 3","Flor de jamaica","Fruto del monje"
    ],
    beneficios: [
      "Aporta vitaminas y minerales esenciales",
      "Favorece rendimiento físico y mental",
      "Fortalece sistema inmunológico",
      "Apoya piel, cabello y uñas",
      "Mantiene huesos y visión saludables"
    ],
    modoUso: "Masticar 4 gomitas al día",
    descripcion: "Multivitamínico en gomitas para toda la familia, con omega 3 y antioxidantes."
  },
  {
    id: 14,
    nombre: "OXIALOE NF",
    precio: "$802",
    presentacion: "Frasco con 1 litro",
    categoria: "Salud Digestiva",
    ingredientes: ["Sábila","Fenogreco","Hinojo","Jengibre","Miel de abeja","Guayaba","Mango"],
    beneficios: [
      "Favorece tránsito intestinal suave",
      "Apoya equilibrio digestivo",
      "Cuida mucosa digestiva",
      "Acción prebiótica natural",
      "Aporta vitaminas y antioxidantes"
    ],
    modoUso: "Tomar 2 cucharadas (30 ml) antes del desayuno",
    descripcion: "Suplemento líquido con sábila y extractos naturales para salud digestiva."
  },
  {
    id: 15,
    nombre: "VENTRE TEA",
    precio: "$292",
    presentacion: "Caja con 30 sobres de 2g",
    categoria: "Digestión y Control de Peso",
    ingredientes: ["Té verde","Té rojo","Té blanco","Hoja sen"],
    beneficios: [
      "Favorece tránsito intestinal",
      "Apoya limpieza digestiva",
      "Elimina desechos naturalmente",
      "Complementa control de peso",
      "Disminuye retención de líquidos",
      "Aporta antioxidantes"
    ],
    modoUso: "Colocar 1 sobre en agua hirviendo, reposar 5 minutos, consumir preferentemente de noche",
    descripcion: "Infusión de té verde, rojo, blanco y hoja sen para digestión y control de peso."
  },
 {
    id: 16,
    nombre: "DESMODIM",
    precio: "$752",
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Salud Hepática",
    ingredientes: ["Desmodium adscendens (hoja en polvo)"],
    beneficios: [
      "Apoya salud y funcionamiento del hígado",
      "Favorece procesos naturales de depuración",
      "Apoya función de la vesícula biliar",
      "Contribuye al metabolismo y eliminación de desechos",
      "Favorece equilibrio digestivo"
    ],
    modoUso: "Tomar 1 cápsula antes de cada comida",
    descripcion: "Suplemento para salud hepática y desintoxicación."
  },
  {
    id: 17,
    nombre: "DIALEGRI NF",
    precio: "$555",
    presentacion: "Frasco con 60 cápsulas de 650mg",
    categoria: "Salud Digestiva",
    ingredientes: ["Raíz de angélica","Aloe vera","Boldo","Hinojo","Fenogreco","Lúpulo","Té de limón"],
    beneficios: [
      "Favorece bienestar digestivo",
      "Reduce inflamación abdominal",
      "Alivia gases y pesadez",
      "Promueve digestión ligera",
      "Apoya vesícula biliar",
      "Equilibrio digestivo tras alimentos"
    ],
    modoUso: "Tomar 1 cápsula antes de cada alimento",
    descripcion: "Suplemento para digestión confortable y bienestar gastrointestinal."
  },
  {
    id: 18,
    nombre: "SERENTRA",
    precio: "$619",
    presentacion: "Frasco con 60 cápsulas de 500mg",
    categoria: "Relajación y Sueño",
    ingredientes: [
      "Toronjil (Melissa)","Flor de azahar","Manzanilla","Omega 3",
      "Vitaminas A, B1, B2, B3, B6, D3, E, ácido fólico",
      "Minerales: magnesio, calcio, fósforo, hierro, zinc, cobre, yodo, silicio"
    ],
    beneficios: [
      "Favorece relajación y bienestar emocional",
      "Equilibra estado de ánimo",
      "Ayuda frente al estrés cotidiano",
      "Apoya descanso reparador",
      "Favorece claridad mental y sistema nervioso",
      "Aporta vitaminas, minerales y omega 3"
    ],
    modoUso: "Tomar 1 cápsula por la mañana y 1 por la noche",
    descripcion: "Suplemento para relajación, equilibrio emocional y calidad del sueño."
  },
  {
    id: 19,
    nombre: "PRO SHAKE",
    precio: "$983",
    presentacion: "Bolsa con 500g (vainilla, fresa, capuchino)",
    categoria: "Nutrición y Energía",
    ingredientes: ["Proteína de suero de leche","Leche descremada en polvo","Lecitina de soya","Vitaminas A, C, D3","Minerales: potasio, fósforo, hierro, calcio"],
    beneficios: [
      "Complementa requerimientos nutricionales",
      "Favorece masa muscular",
      "Apoya recuperación tras actividad física",
      "Aumenta energía y resistencia",
      "Fortalece sistema inmunológico"
    ],
    modoUso: "Mezclar 2 cucharadas (17g) en 240 ml de agua",
    descripcion: "Suplemento nutricional con proteína de suero, vitaminas y minerales."
  },
  {
    id: 20,
    nombre: "4 KIDDY’S GUMMYS",
    precio: "$728",
    presentacion: "Frasco con 60 gomitas de 3g",
    categoria: "Nutrición Infantil",
    ingredientes: [
      "Omega 3","Vitaminas A, C, E, B1, B2, B3, B6, B12","Vitamina D3","Ácido fólico",
      "Minerales: calcio, fósforo, magnesio, hierro, cobre, zinc",
      "Flor de jamaica","Zanahoria","Miel de abeja","Fruto del monje","Betabel",
      "Jugos de piña, naranja, manzana, limón, naranjo amargo"
    ],
    beneficios: [
      "Aporta nutrientes esenciales para crecimiento infantil",
      "Favorece huesos y músculos",
      "Fortalece sistema inmunológico",
      "Apoya concentración y aprendizaje",
      "Mantiene energía diaria"
    ],
    modoUso: "Masticar 4 gomitas al día",
    descripcion: "Gomitas multivitamínicas infantiles con omega 3, vitaminas y minerales."
  },
{
    id: 21,
    nombre: "4 KIDDY’S NF",
    precio: "$494",
    presentacion: "Frasco con 500 ml",
    categoria: "Nutrición Infantil",
    ingredientes: [
      "Omega 3","Vitaminas B3, B6, E, ácido fólico",
      "Minerales: calcio, fósforo, potasio, magnesio, hierro, zinc",
      "Miel de abeja","Betabel","Zanahoria",
      "Jugos de piña, naranja, manzana, limón, naranjo amargo"
    ],
    beneficios: [
      "Aporta nutrientes esenciales para crecimiento infantil",
      "Favorece huesos y músculos",
      "Fortalece sistema inmunológico",
      "Apoya aprendizaje, concentración y memoria",
      "Mantiene energía diaria"
    ],
    modoUso: "Tomar 2 cucharadas (10 ml) tres veces al día",
    descripcion: "Suplemento líquido infantil con omega 3, vitaminas y minerales."
  },
  {
    id: 22,
    nombre: "EUCABEE NF",
    precio: "$581",
    presentacion: "Frasco con 500 ml",
    categoria: "Salud Respiratoria",
    ingredientes: ["Propóleo","Drosera","Gordolobo","Noni","Cebolla","Eucalipto","Cuatecomate","Fenogreco","Elderberry"],
    beneficios: [
      "Apoya salud respiratoria",
      "Fortalece sistema inmunológico",
      "Favorece confort de vías respiratorias",
      "Mantiene respiración libre y confortable",
      "Apoya eliminación de secreciones",
      "Bienestar en cambios de clima"
    ],
    modoUso: "Tomar 2 cucharaditas (10 ml) tres veces al día",
    descripcion: "Suplemento líquido con propóleo y eucalipto para defensas y vías respiratorias."
  },
  {
    id: 23,
    nombre: "RESVIV NF",
    precio: "$896.50",
    presentacion: "Frasco con 620 ml",
    categoria: "Antioxidantes y Energía",
    ingredientes: ["Resveratrol","IP6","Mangostán","Noni","Goji","Arándano","Granada","Fresa","Jalea real","Jengibre","Inositol"],
    beneficios: [
      "Aporta antioxidantes contra estrés oxidativo",
      "Favorece bienestar y vitalidad",
      "Mantiene energía física y mental",
      "Apoya sistema inmunológico",
      "Contribuye al equilibrio metabólico"
    ],
    modoUso: "Tomar 30 ml antes del desayuno",
    descripcion: "Suplemento líquido antioxidante con resveratrol y frutas naturales."
  },
  {
    id: 24,
    nombre: "RESVIV STICK PACK",
    precio: "$893",
    presentacion: "Bolsa con 15 sobres de 8g",
    categoria: "Antioxidantes y Energía",
    ingredientes: ["Resveratrol","Jalea real","Uva ursi","Mangostán","Goji","Jengibre","Granada","IP6","Noni","Myo-inositol","Acaí"],
    beneficios: [
      "Protege células del estrés oxidativo",
      "Favorece vitalidad y bienestar",
      "Mantiene energía física y mental",
      "Apoya sistema inmunológico",
      "Favorece depuración natural del organismo"
    ],
    modoUso: "Disolver 1 sobre en 240 ml de agua, no exceder una porción al día",
    descripcion: "Suplemento en polvo antioxidante con resveratrol y superfrutas."
  },
  {
    id: 25,
    nombre: "KRONNOS+",
    precio: "$1459",
    presentacion: "Frasco con 60 cápsulas de 750mg",
    categoria: "Longevidad y Energía Celular",
    ingredientes: [
      "Nicotinamida Ribósido (NR)",
      "Complejo NAC (N-Acetil-L-Cisteína, Cordyceps, Curcumina, Pterostilbeno, Silicio, Magnesio)",
      "L-Glutatión","Quercetina","Cycloastragenol","Alga AFA","Ajo negro","Extracto de brócoli"
    ],
    beneficios: [
      "Apoya producción de energía celular",
      "Protección frente al estrés oxidativo",
      "Favorece regeneración y mantenimiento celular",
      "Contribuye al bienestar integral y vitalidad",
      "Complementa envejecimiento saludable"
    ],
    modoUso: "Tomar 2 cápsulas al día",
    descripcion: "Suplemento avanzado para energía celular y longevidad."
  },
{
    id: 26,
    nombre: "MUSH KAFFI",
    precio: "$805.50",
    presentacion: "Bolsa con 225 g, sabor moka",
    categoria: "Energía y Enfoque",
    ingredientes: ["Melena de León","Cordyceps","Tsugae","Trametes Versicolor","Café"],
    beneficios: [
      "Favorece concentración, memoria y enfoque",
      "Apoya rendimiento físico y mental",
      "Mantiene niveles óptimos de energía",
      "Ayuda frente al desgaste cotidiano",
      "Aporta antioxidantes",
      "Favorece bienestar general"
    ],
    modoUso: "Añadir 2 cucharadas (15 g) en una taza con 240 ml de agua caliente",
    descripcion: "Bebida funcional sabor moka con café y hongos para energía y concentración."
  },
  {
    id: 27,
    nombre: "RED KAFFI",
    precio: "$934",
    presentacion: "Caja con 15 sticks de 4.5 g",
    categoria: "Energía y Control de Peso",
    ingredientes: ["Café soluble","MCT","CLA","L-Carnitina","Polinicotinato de cromo","Té verde","Citrus aurantium"],
    beneficios: [
      "Aumenta energía y rendimiento",
      "Contribuye a saciedad y control del apetito",
      "Apoya metabolismo de grasas",
      "Complementa programas de control de peso",
      "Favorece estilo de vida activo",
      "Apoya bienestar cardiovascular"
    ],
    modoUso: "Disolver 1 stick en 240 ml de agua caliente, máximo 3 al día",
    descripcion: "Bebida funcional en polvo con café, MCT y L-carnitina para energía y control de peso."
  },
  {
    id: 28,
    nombre: "KAVARNA",
    precio: "$717",
    presentacion: "Bolsa con 90 g",
    categoria: "Energía y Antioxidantes",
    ingredientes: ["Café soluble","Ganoderma Tsugae"],
    beneficios: [
      "Aporta antioxidantes contra estrés oxidativo",
      "Favorece energía y vitalidad",
      "Apoya sistema inmunológico",
      "Favorece concentración y desempeño mental",
      "Complementa salud integral"
    ],
    modoUso: "Agregar 1 cucharadita (4.5 g) en 240 ml de agua caliente",
    descripcion: "Bebida funcional con café y Ganoderma para energía y bienestar integral."
  },
  {
    id: 29,
    nombre: "KAFICHAI",
    precio: "$769",
    presentacion: "Bote con 400 g, sabor chai",
    categoria: "Energía y Bienestar",
    ingredientes: ["Café soluble","Ganoderma Tsugae","Hongo Shiitake","Té verde"],
    beneficios: [
      "Aporta antioxidantes protectores",
      "Favorece energía estable",
      "Apoya sistema inmunológico",
      "Favorece concentración y claridad mental",
      "Complementa estilo de vida saludable"
    ],
    modoUso: "Agregar 3 cucharaditas (20 g) en 240 ml de agua caliente",
    descripcion: "Bebida funcional sabor chai con café, té verde y hongos para energía y enfoque."
  },
  {
    id: 30,
    nombre: "LEVENÉ NF",
    precio: "$613",
    presentacion: "Frasco con 30 cápsulas de 750mg",
    categoria: "Circulación y Salud Vascular",
    ingredientes: ["Hoja de bambú","Bioflavonoides cítricos","Semilla de uva"],
    beneficios: [
      "Favorece circulación sanguínea saludable",
      "Fortalece vasos sanguíneos",
      "Apoya bienestar vascular",
      "Disminuye pesadez en piernas",
      "Aporta antioxidantes protectores"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento para circulación y salud vascular con bioflavonoides y semilla de uva."
  },
  {
    id: 31,
    nombre: "SENZADOL CREMA",
    precio: "$433",
    presentacion: "Tubo con crema tópica",
    categoria: "Cuidado Muscular y Articular",
    ingredientes: ["Romero","Salicilato de metilo","MSM (Metilsulfonilmetano)"],
    beneficios: [
      "Alivia músculos y articulaciones",
      "Favorece confort y bienestar",
      "Apoya recuperación tras esfuerzo físico"
    ],
    modoUso: "Aplicar en la zona afectada con masaje suave",
    descripcion: "Crema tópica con romero y MSM para alivio muscular y articular."
  },
  {
    id: 32,
    nombre: "EPAX NF",
    precio: "$720",
    presentacion: "Frasco con cápsulas",
    categoria: "Omega 3 y Circulación",
    ingredientes: ["Aceite de pescado concentrado en EPA y DHA"],
    beneficios: [
      "Favorece salud cardiovascular",
      "Apoya circulación sanguínea",
      "Contribuye al bienestar cerebral",
      "Aporta ácidos grasos esenciales"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento de omega 3 para salud cardiovascular y cerebral."
  },
 {
    id: 33,
    nombre: "RENAISS NF",
    precio: "$870",
    presentacion: "Caja con 15 sobres",
    categoria: "Belleza y Antienvejecimiento",
    ingredientes: ["Colágeno hidrolizado","Vitamina C","Ácido hialurónico","Antioxidantes naturales"],
    beneficios: [
      "Favorece elasticidad y firmeza de la piel",
      "Apoya salud del cabello y uñas",
      "Contribuye a la regeneración celular",
      "Aporta antioxidantes contra envejecimiento"
    ],
    modoUso: "Tomar 2 cápsulas al día",
    descripcion: "Suplemento con colágeno y antioxidantes para belleza integral."
  },
  {
    id: 34,
    nombre: "RENAISS SERUM",
    precio: "$717.50",
    presentacion: "Frasco con gotero",
    categoria: "Cuidado Facial",
    ingredientes: ["Colágeno","Ácido hialurónico","Vitamina C","Extractos naturales"],
    beneficios: [
      "Hidrata profundamente la piel",
      "Favorece luminosidad y firmeza",
      "Reduce líneas de expresión",
      "Protege contra radicales libres"
    ],
    modoUso: "Aplicar en rostro limpio, mañana y noche",
    descripcion: "Suero facial con colágeno y antioxidantes para cuidado de la piel."
  },
  {
    id: 35,
    nombre: "RENAISS CREMA",
    precio: "$661",
    presentacion: "Frasco con crema",
    categoria: "Cuidado Facial",
    ingredientes: ["Colágeno","Ácido Hialurónico.","Cera de abeja"],
    beneficios: [
      "Nutre y suaviza la piel",
      "Favorece elasticidad",
      "Protege contra resequedad",
      "Apoya regeneración celular"
    ],
    modoUso: "Aplicar en rostro y cuello diariamente. Uso de día y noche",
    descripcion: "Crema facial nutritiva con colágeno y antioxidantes."
  },
  {
    id: 36,
    nombre: "PLENNA NF",
    precio: "$651",
    presentacion: "Frasco con cápsulas",
    categoria: "Salud Femenina",
    ingredientes: ["Isoflavonas de soya","Vitamina E","Calcio","Extractos naturales"],
    beneficios: [
      "Favorece equilibrio hormonal",
      "Apoya salud ósea",
      "Reduce síntomas de menopausia",
      "Contribuye al bienestar femenino"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento femenino para equilibrio hormonal y salud ósea."
  },
  {
    id: 37,
    nombre: "DUGRAN-X",
    precio: "$523",
    presentacion: "Frasco con 60 cápsulas",
    categoria: "Hombres",
    ingredientes: ["Extractos naturales","Vitaminas","Minerales"],
    beneficios: [
      "Mayor vigor masculino",
      "Apoyo a la energía y vitalidad",
      "Contribuye al bienestar general"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento masculino diseñado para vigor, energía y salud integral."
  },
  {
    id: 38,
    nombre: "FLUSSORIN NF",
    precio: "$808",
    presentacion: "Frasco con 60 cápsulas",
    categoria: "Hombres",
    ingredientes: ["Extractos vegetales","Vitaminas","Minerales"],
    beneficios: [
      "Salud prostática",
      "Mayor vigor masculino",
      "Apoyo circulatorio"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento masculino para salud prostática y vigor."
  },
  {
    id: 39,
    nombre: "BLEX",
    precio: "$565",
    presentacion: "Frasco con cápsulas",
    categoria: "Circulación y Bienestar",
    ingredientes: ["Extractos naturales para circulación","Vitaminas","Minerales"],
    beneficios: [
      "Favorece la circulación sanguínea",
      "Ayuda a la prevención de enfermedades articulares",
      "Contribuye a energía y vitalidad",
      "Regenera y previene la pérdida de cartílago articular"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento para circulación y energía con extractos naturales."
  },
  {
    id: 40,
    nombre: "UC-II NF",
    precio: "$994.50",
    presentacion: "Frasco con cápsulas",
    categoria: "Articulaciones y Movilidad",
    ingredientes: ["Colágeno tipo II no desnaturalizado","Vitamina C","Minerales"],
    beneficios: [
      "Favorece salud articular",
      "Apoya movilidad y flexibilidad",
      "Contribuye a reducir molestias articulares",
      "Promueve regeneración de cartílago"
    ],
    modoUso: "Tomar 1 cápsula al día",
    descripcion: "Suplemento con colágeno UC-II para articulaciones y movilidad."
  },
];
