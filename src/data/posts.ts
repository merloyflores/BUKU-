// ============================================================
// DATA: Blog BUKUË
// ------------------------------------------------------------
// Cada post tiene un slug ÚNICO (antes había dos posts con el
// mismo slug, lo que hacía inalcanzable al segundo) y un campo
// `content` estructurado en bloques, para que la página de
// detalle pueda renderizar información real y distinta por
// artículo, en vez del texto genérico que se repetía siempre.
// ============================================================

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'callout'; title: string; text: string };

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  videoUrl: string | null;
  image: string;
  images: string[];
  tags: string[];
  content: ContentBlock[];
};

export const categorias = [
  'Normativa',
  'Gestión Hídrica',
  'Casos de Éxito',
  'Innovación',
  'Sostenibilidad',
] as const;

export const blogPosts: BlogPost[] = [
  // ==========================================================
  // 1. SETENA — Formulario D1
  // ==========================================================
  {
    id: 1,
    slug: 'guia-formulario-d1-setena-2026',
    title: 'Formulario D1: la guía completa para obtener su viabilidad ambiental',
    excerpt:
      'Qué instrumento D1 le corresponde a su proyecto, cuánto cuesta y qué documentos técnicos exige la Plataforma Digital de SETENA.',
    category: 'Normativa',
    author: 'Equipo Técnico BUKUË',
    date: '4 Mar, 2026',
    readTime: '9 min',
    videoUrl: 'https://www.youtube.com/watch?v=JjX-aCZOPx0',
    image: '/SETENA-db53db1c.jpeg',
    images: ['/Setena.jpg', '/SETENA-db53db1c.jpeg'],
    tags: ['SETENA', 'Viabilidad Ambiental', 'Decreto 43898', 'D1'],
    content: [
      {
        type: 'paragraph',
        text: 'Toda Actividad, Obra o Proyecto (AOP) que cumpla uno o más de estos criterios necesita viabilidad ambiental antes de operar en Costa Rica: un área igual o superior a 1000 m², un movimiento de tierra igual o superior a 1000 m³, ubicación fuera de un cuadrante urbano, o una Significancia de Impacto Ambiental (SIA) igual o superior a 330. El instrumento que canaliza este trámite es el Formulario D1, y determinar cuál de sus tres variantes aplica es el primer error costoso que cometen muchos desarrolladores.',
      },
      {
        type: 'heading',
        text: 'Tres instrumentos, tres presupuestos distintos',
      },
      {
        type: 'list',
        items: [
          'D1+DJCA (Declaración Jurada de Compromiso Ambiental): $226, para el nivel de exigencia más bajo.',
          'D1+P-PGA (Pronóstico de Plan de Gestión Ambiental): $565, incluye diagnóstico y matriz de impactos.',
          'D1+EsIA (Estudio de Impacto Ambiental): $1,695, el nivel más exigente, para proyectos de mayor significancia.',
        ],
      },
      {
        type: 'callout',
        title: 'No se paga por adelantado',
        text: 'SETENA no cobra tarifa mientras usted presenta los requisitos generales. Es la propia Plataforma Digital (tramites.setena.go.cr) la que, tras validar la Significancia de Impacto Ambiental y el umbral de su AOP, le indica cuál de los tres instrumentos aplica y el monto exacto a depositar. Todos los valores ya incluyen el IVA.',
      },
      {
        type: 'heading',
        text: 'Lo que la plataforma le va a pedir, en orden',
      },
      {
        type: 'paragraph',
        text: 'Independientemente del instrumento, el Cuadro 1 del Decreto Ejecutivo N° 43898 exige información general del proyecto y del propietario, datos del representante legal (con poder especial firmado digitalmente cuando aplique), y los datos de un Consultor Ambiental registrado y vigente en la Lista de Consultores de SETENA. A partir de ahí, la plataforma solicita la caracterización del área del proyecto, un diseño de sitio en PDF firmado digitalmente, y una certificación del monto de inversión emitida por un Contador Público Autorizado o, si hay obra constructiva, por el Colegio Federado de Ingenieros y Arquitectos.',
      },
      {
        type: 'paragraph',
        text: 'La parte que más atrasa expedientes es la información geoespacial: se deben presentar shapefiles georreferenciados en proyección CRTM05, comprimidos en formato .zip, y que coincidan exactamente con los linderos del plano catastrado. Un shapefile mal ubicado en el visor cartográfico es motivo automático de subsane.',
      },
      {
        type: 'heading',
        text: 'Estudios técnicos: solo si el instrumento lo exige',
      },
      {
        type: 'paragraph',
        text: 'Para D1+DJCA basta con completar la Matriz de Significancia de Impacto Ambiental directamente en la plataforma. Si el proyecto escala a D1+P-PGA o D1+EsIA, se suman el Estudio de Percepción Social, el Diagnóstico Ambiental y la Matriz de Importancia de Impactos Ambientales (MIIA). En los tres casos, cuando se omiten estudios de hidrología, hidrogeología, amenazas naturales o arqueología rápida, es obligatorio presentar una justificación técnica de por qué no se presentan, firmada digitalmente por un profesional inscrito en la lista de consultores.',
      },
      {
        type: 'quote',
        text: 'Todos los documentos y estudios presentados deben estar firmados digitalmente por los profesionales responsables, con firma digital configurada de largo plazo.',
        author: 'Decreto Ejecutivo N° 43898',
      },
      {
        type: 'callout',
        title: 'Nuestro rol',
        text: 'En BUKUË coordinamos el expediente completo: definimos qué instrumento le corresponde antes de invertir tiempo en estudios que quizás no necesita, gestionamos la información geoespacial en CRTM05, y damos seguimiento a la Plataforma Digital hasta la resolución.',
      },
    ],
  },

  // ==========================================================
  // 2. SETENA — Formulario D1-C
  // ==========================================================
  {
    id: 2,
    slug: 'formulario-d1c-areas-ambientalmente-fragiles',
    title: 'Formulario D1-C: la vía rápida para proyectos en áreas ambientalmente frágiles',
    excerpt:
      'Cuándo su proyecto categoría C califica para el trámite simplificado de SETENA, y por qué cuesta una fracción del D1 tradicional.',
    category: 'Normativa',
    author: 'Equipo Técnico BUKUË',
    date: '4 Mar, 2026',
    readTime: '6 min',
    videoUrl: null,
    image: '/Setena.jpg',
    images: ['/SETENA-db53db1c.jpeg', '/Setena.jpg'],
    tags: ['SETENA', 'D1-C', 'Áreas Frágiles', 'Decreto 43898'],
    content: [
      {
        type: 'paragraph',
        text: 'No todo proyecto categoría C necesita pasar por la ruta completa del Formulario D1. Cuando el AOP se ubica en un área ambientalmente frágil según el Artículo 98 del Decreto Ejecutivo N° 43898, SETENA ofrece el D1-C: un instrumento con tarifa única de $67.8 (IVA incluido) que cubre tanto el formulario como la Guía de Buenas Prácticas Ambientales.',
      },
      {
        type: 'heading',
        text: '¿Qué hace que un área sea "ambientalmente frágil"?',
      },
      {
        type: 'paragraph',
        text: 'SETENA mantiene material orientativo específico sobre qué zonas del país califican bajo esta figura, disponible en sus videos institucionales. En la práctica, la determinación depende de la ubicación cartográfica exacta del proyecto, por lo que el primer paso siempre es verificar las coordenadas del sitio contra los criterios del Decreto 43898 antes de asumir que el D1-C aplica.',
      },
      {
        type: 'heading',
        text: 'Qué pide la Plataforma Digital',
      },
      {
        type: 'list',
        items: [
          'Datos generales del proyecto y del propietario, con el mismo estándar del D1 tradicional.',
          'Datos del Consultor Ambiental responsable, registrado y vigente en la Lista de Consultores de SETENA.',
          'Ubicación del AOP mediante coordenadas, el mapa digital de la plataforma, o el número de plano catastrado.',
          'Un cuestionario sobre consumo de recursos hídricos, suelo, energía y cobertura vegetal.',
          'Un segundo cuestionario sobre impactos y otros riesgos a los aspectos ambientales relevantes.',
        ],
      },
      {
        type: 'callout',
        title: 'Lo que NO se pide',
        text: 'A diferencia del D1+P-PGA o D1+EsIA, el D1-C no exige estudio de impacto ambiental independiente, ni matriz de importancia de impactos, ni percepción social. Es, por diseño, un instrumento de trámite abreviado.',
      },
      {
        type: 'paragraph',
        text: 'Una vez completados los cuestionarios, se descarga el formulario D1-C ya con los datos suministrados, se firma digitalmente (por el desarrollador o su representado) y se sube nuevamente a la plataforma junto con el comprobante de pago. Los requisitos generales de georreferenciación en CRTM05 y firma digital de largo plazo aplican igual que en el D1 tradicional.',
      },
      {
        type: 'callout',
        title: 'Cuándo conviene revisarlo con un consultor',
        text: 'Confirmar si su proyecto realmente califica para D1-C antes de iniciar el trámite le ahorra semanas: presentar el instrumento equivocado obliga a reiniciar el expediente bajo la vía correcta.',
      },
    ],
  },

  // ==========================================================
  // 3. Aguas residuales industriales
  // ==========================================================
  {
    id: 3,
    slug: 'gestion-aguas-residuales-industriales',
    title: 'Sistemas de Tratamiento: de la obligación legal a la eficiencia operativa',
    excerpt:
      'Cómo convertir el cumplimiento del Reglamento de Vertido y Reuso de Aguas Residuales en una oportunidad de ahorro hídrico.',
    category: 'Gestión Hídrica',
    author: 'Equipo Técnico BUKUË',
    date: '2 Mar, 2026',
    readTime: '7 min',
    videoUrl: null,
    image: '/TRATAMIENTO-BIOLOGICO-1024x572.png',
    images: ['/AGUAS-RESIDUALES-CARNE-1024x576.webp', '/FBR-1024x681.png'],
    tags: ['Aguas Residuales', 'PTAR', 'Dirección de Agua', 'Reuso'],
    content: [
      {
        type: 'paragraph',
        text: 'En Costa Rica, todo ente generador de aguas residuales —industrial, comercial o institucional— está sujeto al Reglamento de Vertido y Reuso de Aguas Residuales (Decreto Ejecutivo N° 33601-MINAE-S). El reglamento fija parámetros máximos permitidos de descarga: demanda bioquímica de oxígeno (DBO5), demanda química de oxígeno (DQO), sólidos suspendidos totales, grasas y aceites, pH y temperatura, entre otros, según el cuerpo receptor.',
      },
      {
        type: 'heading',
        text: 'El permiso no es opcional, y tampoco es automático',
      },
      {
        type: 'paragraph',
        text: 'El Permiso de Vertido se tramita ante la Dirección de Agua del MINAE mediante un formulario con carácter de declaración jurada. Si el sistema de tratamiento tiene un año o más de operación, se debe adjuntar la Certificación de la Calidad de Agua Residual; si tiene menos de un año, se exige un análisis de laboratorio acreditado con los parámetros del reglamento, incluida la DQO soluble. Sin este permiso vigente, cualquier vertido —incluso tratado— es una infracción administrativa.',
      },
      {
        type: 'heading',
        text: 'Elegir la tecnología correcta según el tipo de efluente',
      },
      {
        type: 'list',
        items: [
          'Tratamiento biológico de lodos activados: el estándar para aguas residuales de tipo doméstico e industrial de carga orgánica media.',
          'Filtros biológicos rotativos (FBR): eficientes en espacios reducidos y con menor consumo energético que los sistemas de aireación extendida.',
          'Reactores anaerobios (UASB) y sistemas específicos para cargas altas: la opción técnica para efluentes de alta concentración orgánica, como los de la industria cárnica y láctea, donde la DBO5 puede superar por mucho los límites de un sistema convencional.',
          'Humedales artificiales y biojardineras: una alternativa de bajo costo operativo para caudales pequeños y medianos, con buen desempeño en remoción de nutrientes.',
        ],
      },
      {
        type: 'callout',
        title: 'El reuso cambia la ecuación económica',
        text: 'Un agua residual tratada que cumple los parámetros de reuso puede destinarse a riego de zonas verdes o procesos industriales no potables, reduciendo el consumo de agua potable facturada. Lo que empieza como obligación regulatoria termina siendo una reducción directa en la planilla de servicios.',
      },
      {
        type: 'paragraph',
        text: 'La verificación de morosidad es transversal a todo trámite ante la Dirección de Agua: los funcionarios revisan la situación del solicitante ante el Registro Público, el Ministerio de Hacienda, la CCSS y la propia Dirección, además de confirmar la viabilidad ambiental vigente o en trámite ante SETENA. Un expediente con cualquiera de esos frentes desactualizado se detiene, sin importar qué tan bien diseñado esté el sistema de tratamiento.',
      },
    ],
  },

  // ==========================================================
  // 4. Regencia Ambiental — errores comunes
  // ==========================================================
  {
    id: 4,
    slug: 'regencia-ambiental-errores-que-generan-multas',
    title: 'Regencia Ambiental: los errores en bitácora que sí generan sanciones',
    excerpt:
      'Un análisis basado en el Decreto 43898 sobre los fallos más comunes en la actualización de indicadores y cómo evitarlos.',
    category: 'Casos de Éxito',
    author: 'Equipo Técnico BUKUË',
    date: '28 Feb, 2026',
    readTime: '8 min',
    videoUrl: null,
    image: '/086_gesiton_ambiental-1280x640.jpg',
    images: ['/regencia.png', '/RioArio.jpg'],
    tags: ['Regencia Ambiental', 'Bitácora Digital', 'SETENA', 'Cumplimiento'],
    content: [
      {
        type: 'paragraph',
        text: 'La regencia ambiental no termina cuando SETENA aprueba la viabilidad de un proyecto: es una obligación continua que se documenta en la Bitácora Ambiental Digital (sso.setena.go.cr) durante toda la vida operativa del AOP. La mayoría de las sanciones que hemos visto no vienen de un incidente ambiental grave, sino de fallas administrativas en cómo se lleva esa bitácora.',
      },
      {
        type: 'heading',
        text: 'El error más frecuente: no migrar indicadores Tipo III a Tipo I',
      },
      {
        type: 'paragraph',
        text: 'El Decreto 43898 clasifica los indicadores ambientales en tres tipos. Los Tipo I cuentan con información cuantitativa completa y monitoreo constante. Los Tipo II tienen datos parciales que requieren más análisis. Los Tipo III son conceptuales, cualitativos o predictivos, usados cuando no hay suficiente información disponible en la etapa de diseño.',
      },
      {
        type: 'callout',
        title: 'La regla que casi nadie cumple a tiempo',
        text: 'El reglamento es explícito: al momento de presentar los Informes de Regencia, todos los indicadores Tipo III deben ser presentados en términos de indicadores Tipo I. Si en la etapa de diseño y del Estudio de Impacto Ambiental ya se cuenta con información más detallada, el Cuadro de Medidas Ambientales debe actualizarse en consecuencia. Muchos regentes siguen reportando indicadores Tipo III año tras año, sin actualizar la bitácora conforme el proyecto avanza y genera datos reales.',
      },
      {
        type: 'heading',
        text: 'Otros cuatro fallos que hemos identificado en campo',
      },
      {
        type: 'list',
        items: [
          'Firma digital del regente vencida al momento de subir un informe: el documento queda inválido aunque el contenido esté correcto.',
          'Discrepancias entre lo reportado en bitácora y lo descrito en el Estudio de Impacto Ambiental original, especialmente cuando el proyecto sufrió modificaciones no notificadas.',
          'Presentación de informes fuera del plazo establecido en la resolución administrativa de viabilidad ambiental, sin justificación previa.',
          'Shapefiles del área del proyecto que ya no coinciden con la huella real de operación, tras ampliaciones no registradas.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Ninguno de estos errores requiere un incidente ambiental real para convertirse en un hallazgo de incumplimiento. Son, en esencia, fallas de gestión documental que una regencia bien estructurada previene por completo.',
      },
      {
        type: 'callout',
        title: 'Cómo trabajamos la regencia en BUKUË',
        text: 'Mantenemos un calendario de actualización de indicadores alineado con cada etapa del proyecto, verificamos la vigencia de firmas digitales antes de cada informe, y revisamos consistencia entre bitácora, EIA original y condición real de campo antes de cada presentación ante SETENA.',
      },
    ],
  },

  // ==========================================================
  // 5. Salud Ocupacional
  // ==========================================================
  {
    id: 5,
    slug: 'salud-ocupacional-mas-alla-del-equipo-de-proteccion',
    title: 'Salud Ocupacional: más allá del equipo de protección personal',
    excerpt:
      'La Ley 6727 exige más que cascos y chalecos: cómo la Comisión de Salud Ocupacional y la póliza del INS moldean su estrategia de prevención.',
    category: 'Normativa',
    author: 'Equipo Técnico BUKUË',
    date: '25 Feb, 2026',
    readTime: '7 min',
    videoUrl: null,
    image: '/seguridad-y-salud-ocupacional.webp',
    images: ['/Seguridad2.jpg', '/Seguridad3.jfif'],
    tags: ['Salud Ocupacional', 'Ley 6727', 'INS', 'CSO'],
    content: [
      {
        type: 'paragraph',
        text: 'La Ley N° 6727, que reformó el Título IV del Código de Trabajo, es la columna vertebral de la salud ocupacional en Costa Rica. Establece dos obligaciones que muchas empresas conocen a medias: la póliza de Riesgos del Trabajo, exclusiva del Instituto Nacional de Seguros (INS), y la Comisión de Salud Ocupacional, obligatoria para toda empresa con 10 o más trabajadores.',
      },
      {
        type: 'heading',
        text: 'La Comisión de Salud Ocupacional no es un formalismo',
      },
      {
        type: 'paragraph',
        text: 'La Comisión debe integrarse de forma paritaria entre representantes del patrono y de los trabajadores, y su función va más allá de firmar un acta anual: identifica riesgos en el centro de trabajo, da seguimiento a las acciones correctivas, y sirve de enlace directo con el Consejo de Salud Ocupacional (CSO) y con las inspecciones que pueda realizar el Ministerio de Trabajo.',
      },
      {
        type: 'heading',
        text: 'Lo que el Reglamento General de Seguridad e Higiene en el Trabajo exige en la práctica',
      },
      {
        type: 'list',
        items: [
          'Un Plan de Salud Ocupacional registrado formalmente, no un documento genérico descargado de internet.',
          'Brigadas de emergencia capacitadas: contra incendios, primeros auxilios y evacuación, con simulacros periódicos.',
          'Evaluación de riesgos específicos por puesto de trabajo, incluyendo ergonomía en labores de oficina y manejo de sustancias químicas en producción.',
          'Registro y seguimiento de accidentes laborales ante el INS, no solo como trámite administrativo sino como fuente de datos para prevenir recurrencia.',
        ],
      },
      {
        type: 'callout',
        title: 'El vínculo con el Permiso Sanitario de Funcionamiento',
        text: 'El Ministerio de Salud verifica condiciones de salud ocupacional como parte de las inspecciones físico-sanitarias asociadas al Permiso Sanitario de Funcionamiento (Decreto Ejecutivo N° 39472-S). Un plan de salud ocupacional deficiente puede convertirse en un obstáculo para la renovación del permiso, no solo en una multa aislada.',
      },
      {
        type: 'paragraph',
        text: 'La cultura de prevención real se mide en la siniestralidad reportada al INS y en el ausentismo, no en la cantidad de cascos comprados. Una empresa que invierte en identificar riesgos antes de que se conviertan en incidentes reduce ambos indicadores de forma sostenida, y eso se traduce directamente en menor rotación de personal y menor costo operativo.',
      },
    ],
  },

  // ==========================================================
  // 6. Drones para monitoreo ambiental
  // ==========================================================
  {
    id: 6,
    slug: 'drones-monitoreo-impacto-ambiental-costa-rica',
    title: 'Drones en el monitoreo de impacto ambiental: precisión donde antes había estimación',
    excerpt:
      'Cómo la fotogrametría aérea está acelerando la entrega de información geoespacial exigida por SETENA.',
    category: 'Innovación',
    author: 'Equipo Técnico BUKUË',
    date: '20 Feb, 2026',
    readTime: '5 min',
    videoUrl: 'https://www.youtube.com/watch?v=yypKp-3knQI',
    image: '/DronesAmbientales.jpg',
    images: ['/DronesAmbientales2.webp', '/DronesAmbientales3.jfif'],
    tags: ['Drones', 'SIG', 'CRTM05', 'Innovación'],
    content: [
      {
        type: 'paragraph',
        text: 'Uno de los puntos más exigentes de cualquier trámite D1 ante SETENA es la información geoespacial: shapefiles georreferenciados en proyección CRTM05, que deben coincidir exactamente con los linderos del plano catastrado y con el área real de intervención. Levantar esa información con métodos tradicionales de topografía terrestre puede tomar días; con fotogrametría de drones, se reduce a horas de vuelo y procesamiento.',
      },
      {
        type: 'heading',
        text: 'Qué resuelve realmente la tecnología',
      },
      {
        type: 'list',
        items: [
          'Ortomosaicos de alta resolución para delimitar con precisión el Área del Proyecto (APT) y el Área de Influencia exigida en los estudios de impacto ambiental.',
          'Modelos digitales de elevación que agilizan los cálculos de movimiento de tierra requeridos en el Anexo 3 del Decreto 43898.',
          'Registro fotográfico georreferenciado de las condiciones actuales del sitio, exactamente el tipo de evidencia que exige el trámite de Estudio Diagnóstico Ambiental (EDA) para proyectos existentes.',
          'Monitoreo periódico de cobertura vegetal y avance de obra, útil tanto para el desarrollador como para el regente ambiental que debe actualizar la bitácora.',
        ],
      },
      {
        type: 'callout',
        title: 'La tecnología no reemplaza el criterio técnico',
        text: 'Un shapefile generado por drone sigue necesitando la revisión de un profesional que verifique que cumple con la Normativa Técnica de Información Geográfica del SNIT y que no presenta desplazamiento respecto al área real, tal como exige SETENA antes de aceptar cualquier archivo geoespacial.',
      },
      {
        type: 'paragraph',
        text: 'La operación de drones con fines comerciales en Costa Rica está sujeta a la supervisión de la Dirección General de Aviación Civil (DGAC), por lo que cualquier levantamiento aéreo debe planificarse considerando restricciones de espacio aéreo, especialmente cerca de aeródromos o zonas protegidas.',
      },
      {
        type: 'paragraph',
        text: 'El resultado práctico para nuestros clientes es tiempo: expedientes que antes tomaban semanas en la etapa de recolección de información geoespacial ahora se preparan en días, sin sacrificar la precisión que la Plataforma Digital de SETENA exige en su visor cartográfico.',
      },
    ],
  },

  // ==========================================================
  // 7. Economía circular
  // ==========================================================
  {
    id: 7,
    slug: 'economia-circular-gestion-residuos-costa-rica',
    title: 'Economía circular: la Ley 8839 como punto de partida, no como techo',
    excerpt:
      'La jerarquía de residuos y la Responsabilidad Extendida del Productor están cambiando cómo las industrias costarricenses gestionan sus desechos.',
    category: 'Innovación',
    author: 'Equipo Técnico BUKUË',
    date: '15 Feb, 2026',
    readTime: '8 min',
    videoUrl: null,
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200',
    images: [
      '/economia-circolare_2400x1160.jpg',
      'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9',
    ],
    tags: ['Ley 8839', 'Economía Circular', 'REP', 'Residuos'],
    content: [
      {
        type: 'paragraph',
        text: 'La Ley N° 8839, Ley para la Gestión Integral de Residuos, establece una jerarquía clara que muchas empresas todavía no aplican en ese orden: primero evitar la generación, luego reducir, después reutilizar, valorizar, tratar y, solo como última opción, disponer en relleno sanitario. Cumplir la ley limitándose al último eslabón —contratar un camión recolector— es cumplimiento mínimo, no gestión circular.',
      },
      {
        type: 'heading',
        text: 'Responsabilidad Extendida del Productor: ya no es solo problema del consumidor final',
      },
      {
        type: 'paragraph',
        text: 'Bajo el principio de Responsabilidad Extendida del Productor (REP) que introduce la Ley 8839, los fabricantes e importadores de ciertos productos son corresponsables de su gestión al final de la vida útil, no solo el consumidor que los desecha. Esto ha impulsado la creación de planes de gestión de residuos específicos por sector y de centros de recuperación de materiales valorizables operados por la propia industria o por gestores autorizados.',
      },
      {
        type: 'heading',
        text: 'De dónde sale el ahorro real',
      },
      {
        type: 'list',
        items: [
          'Separación en origen que permite vender materiales valorizables (cartón, plástico, metal) en lugar de pagar por su disposición.',
          'Reducción del volumen que va a relleno sanitario, con el consecuente ahorro en tarifas de recolección municipal.',
          'Trazabilidad documental de residuos peligrosos, que evita sanciones y facilita auditorías de clientes internacionales con estándares de cadena de suministro más estrictos.',
          'Alianzas con gestores autorizados de residuos electrónicos y bioinfecciosos, evitando la acumulación de pasivos ambientales en sitio.',
        ],
      },
      {
        type: 'callout',
        title: 'Un plan de gestión de residuos no es un documento, es un proceso',
        text: 'El Plan Municipal o Institucional de Gestión Integral de Residuos que exige la Ley 8839 debe actualizarse conforme cambia la operación. Un plan que nunca se revisa después de su aprobación inicial deja de reflejar la realidad de la empresa en menos de un año.',
      },
      {
        type: 'paragraph',
        text: 'Las empresas que integran esta jerarquía desde el diseño de sus procesos —y no como un parche al final de la línea de producción— son las que hoy compiten mejor por contratos con clientes que exigen certificaciones ambientales como condición de compra, especialmente en sectores exportadores.',
      },
    ],
  },

  // ==========================================================
  // 8. Carbono Neutralidad (NUEVO)
  // ==========================================================
  {
    id: 8,
    slug: 'carbono-neutralidad-empresas-costa-rica',
    title: 'Carbono neutralidad empresarial: cómo funciona realmente el sistema costarricense',
    excerpt:
      'Del inventario de gases de efecto invernadero a la certificación INTE B5: la ruta que sigue una empresa costarricense hacia la carbono neutralidad.',
    category: 'Sostenibilidad',
    author: 'Equipo Técnico BUKUË',
    date: '10 Feb, 2026',
    readTime: '8 min',
    videoUrl: null,
    image: '/CarbonoNeutralidadCR.jpg',
    images: ['/BosqueCostaRica.jpg', '/InventarioGEI.jpg'],
    tags: ['Carbono Neutralidad', 'INTE B5', 'FONAFIFO', 'Cambio Climático'],
    content: [
      {
        type: 'paragraph',
        text: 'Costa Rica fue uno de los primeros países en anunciar una meta de carbono neutralidad, y ese compromiso país tiene un mecanismo concreto a nivel empresarial: el Programa País de Carbono Neutralidad (PPCN), administrado por la Dirección de Cambio Climático (DCC) del MINAE, alineado con el Plan Nacional de Descarbonización.',
      },
      {
        type: 'heading',
        text: 'Los cuatro pasos que exige el proceso',
      },
      {
        type: 'list',
        items: [
          'Inventario de Gases de Efecto Invernadero (GEI): cuantificar las emisiones directas e indirectas de la organización bajo una metodología reconocida.',
          'Reducción: implementar acciones concretas antes de pensar en compensar, siguiendo el principio de que la mejor tonelada de CO2 es la que nunca se emitió.',
          'Compensación de las emisiones remanentes, típicamente mediante Unidades Costarricenses de Compensación (UCC) u otros mecanismos reconocidos.',
          'Verificación por un ente acreditado, que confirma que el inventario y las acciones reportadas son consistentes con la norma técnica aplicable.',
        ],
      },
      {
        type: 'heading',
        text: 'La norma INTE B5: el estándar detrás de la certificación',
      },
      {
        type: 'paragraph',
        text: 'La certificación de carbono neutralidad organizacional en Costa Rica se otorga bajo la norma técnica INTE B5, que define los requisitos para cuantificar, reducir y compensar emisiones de gases de efecto invernadero a nivel de organización. No es un sello de marketing: exige evidencia verificable en cada una de las cuatro etapas.',
      },
      {
        type: 'callout',
        title: 'FONAFIFO como mecanismo de compensación',
        text: 'El Fondo Nacional de Financiamiento Forestal (FONAFIFO), creado bajo la Ley Forestal N° 7575, administra el Pago por Servicios Ambientales (PSA): propietarios de bosque reciben un pago por conservar, reforestar o manejar sosteniblemente su finca. Para una empresa, apoyar proyectos PSA es una de las rutas de compensación con mayor trazabilidad dentro del sistema nacional.',
      },
      {
        type: 'paragraph',
        text: 'El error más común que vemos en empresas que inician este proceso es saltarse directamente a la compensación sin haber hecho un inventario riguroso ni haber agotado las oportunidades reales de reducción interna: cambios en matriz energética, eficiencia en flotas de transporte, o rediseño de procesos con menor huella. La compensación sin reducción previa no cumple el espíritu de la norma, y un verificador experimentado lo detecta de inmediato.',
      },
      {
        type: 'paragraph',
        text: 'Para una empresa costarricense con clientes de exportación, especialmente hacia mercados europeos, contar con un inventario de GEI documentado —incluso antes de certificarse— empieza a ser un requisito de facto en procesos de debida diligencia de cadena de suministro.',
      },
    ],
  },
];