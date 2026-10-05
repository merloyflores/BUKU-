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
  documentUrl?: string;
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
  // 9. Circular 33-2023 — NIIF de Sostenibilidad
  // Fuente: Colegio de Contadores Públicos de Costa Rica
  // Transcripción fiel del documento oficial suministrado.
  // ==========================================================
  {
    id: 9,
    slug: 'circular-33-2023-niif-sostenibilidad-costa-rica',
    title: 'Circular N.° 33-2023: Adopción de las Normas NIIF de Información a Revelar sobre Sostenibilidad',
    excerpt:
      'Texto íntegro de la Circular N.° 33-2023 del Colegio de Contadores Públicos de Costa Rica sobre la adopción de las Normas NIIF S1 y NIIF S2 de información a revelar sobre sostenibilidad.',
    category: 'Normativa',
    author: 'Colegio de Contadores Públicos de Costa Rica',
    date: '4 Oct, 2026',
    readTime: '18 min',
    videoUrl: null,
    image: '/co2Neutral.jpg',
    images: [],
    tags: ['NIIF S1', 'NIIF S2', 'Sostenibilidad', 'ISSB', 'Circular 33-2023', 'Costa Rica'],
    documentUrl: '/documentos/Circular-33-2023-NIIF-Sostenibilidad.pdf',
    content: [
      {
        type: 'callout',
        title: 'Documento oficial',
        text: 'Circular N.° 33-2023, aprobada por la Junta Directiva del Colegio de Contadores Públicos de Costa Rica en la sesión SO-12-2023, acuerdo 447-12-2023, con fecha 08/12/2023. El contenido que sigue corresponde a una transcripción del documento suministrado.',
      },
      {
        type: 'heading',
        text: 'COLEGIO DE CONTADORES PÚBLICOS DE COSTA RICA — INFORMA',
      },
      {
        type: 'paragraph',
        text: 'La Junta Directiva del Colegio de Contadores Públicos de Costa Rica, de conformidad con las facultades que le confiere la Ley de Regulación de la Profesión de Contadores Públicos y Creación del Colegio de Contadores Públicos de Costa Rica N.° 1038, del 19 de agosto de 1947 para promover la profesión de la contaduría pública, acordó emitir la siguiente circular.',
      },
      {
        type: 'heading',
        text: 'CONSIDERANDO',
      },
      {
        type: 'paragraph',
        text: 'PRIMERO: Que es responsabilidad del Colegio de Contadores Públicos de Costa Rica, según lo establece el artículo 14 de la Ley N.° 1038 del 19 de agosto de 1947 y sus reformas, promover el progreso de la ciencia contable y cuidar del adelanto de la profesión en todos sus aspectos.',
      },
      {
        type: 'paragraph',
        text: 'SEGUNDO: Que la Fundación del IFRS en respuesta a las necesidades de los inversionistas y usuarios de la información financiera en la exigencia de que los informes sean de alta calidad, transparentes, confiables y comparables que puedan mantener un alto valor agregado e integrados junto con los estados financieros, estableció en noviembre de 2021 la Junta de Normas Internacionales de Sostenibilidad (ISSB, por sus siglas en inglés), que es responsable de la emisión de estándares de divulgación sobre los riesgos y oportunidades relacionados con la sostenibilidad que razonablemente podría esperarse que afecten las perspectivas de la entidad a corto, mediano o largo plazo. La ISSB para garantizar esta divulgación estandarizada con carácter global cuenta con el respaldo la Organización Internacional de Comisiones de Valores (IOSCO, por sus siglas en inglés), la Junta de Estabilidad Financiera, los ministros de finanzas africanos y los representantes de los Bancos Centrales de más de 40 jurisdicciones y con la participación del G7 y el G20, así como las recomendaciones de FSB Task Force on Climate-related Financial Disclosures (TCFD, por sus siglas en inglés), los estándares de Sustainability Accounting Standards Board (SASB, por sus siglas en inglés), el marco de la Junta de Normas de Divulgación Climática (CDSB, por sus siglas en inglés), el marco de informes integrado de la Fundación de Informes de Valor y las métricas del Foro Económico Mundial y de la Federación Internacional de Contadores (IFAC, por sus siglas en inglés).',
      },
      {
        type: 'paragraph',
        text: 'TERCERO: Que desde 1980, el Colegio es miembro de IFAC, cuya misión es servir al interés público mediante la contribución al desarrollo, la adopción e implementación de normas internacionales y guías internacionales de alta calidad, por lo que el Colegio ha convenido en participar en el plan de acción de las Declaraciones sobre las Obligaciones de los Miembros o DOM (Statements of Membership Obligations, conocidas como SMO, por sus siglas en inglés), que son marcos de referencia para ayudar a los organismos miembros de la IFAC —actuales y potenciales— a asegurar un desempeño de alta calidad por parte de las personas contadoras públicas autorizadas. Las DOM cubren las obligaciones que tienen los organismos miembros de apoyar las actividades de IFAC y las relacionadas con la seguridad sobre la calidad, la formación, la ética, la investigación y la disciplina de la profesión. Fundamentalmente, esta circular concuerda con el llamado que ha realizado IFAC a nivel mundial para adoptar e implementar los estándares de sostenibilidad emitidos por el ISSB que complementan el objetivo de la DOM N.º 7: Normas Internacionales de Información Financiera y otros Pronunciamientos Emitidos por las juntas de la Fundación IFRS.',
      },
      {
        type: 'paragraph',
        text: 'CUARTO: Que las Normas NIIF de Información a Revelar sobre Sostenibilidad, preparadas y publicadas por la ISSB, cuyo objetivo es desarrollar —buscando el interés público— un conjunto de estándares globales, con un lenguaje coherente, debidamente articulada en los informes financieros de propósito general para revelar información financiera relacionada con la sostenibilidad de forma más uniforme, completa, comparable y verificable, permitiendo evaluar la exposición de una entidad y la gestión de los riesgos y oportunidades relacionados con la sostenibilidad que razonablemente podría esperarse que afecten las perspectivas de la entidad a corto, mediano o largo plazo, e informar sus decisiones relacionadas con el suministro de recursos a la entidad, siendo que esta información suplementa y complementa la información de los estados financieros de propósito general que emite una entidad como parte de los informes financieros. Para aprobar dichas normas, la ISSB sigue un procedimiento a escala internacional, similar al IASB, participando organismos globales, los países de G20, reguladores, comunidad empresarial, bolsas de valores y otros individuos interesados. El ISSB está compuesto por 14 miembros de todo el mundo con una combinación de perspectivas profesionales, incluidos inversores y preparadores de información financiera.',
      },
      {
        type: 'paragraph',
        text: 'QUINTO: Que es necesario mantener el enfoque integral, coherente y lógico en materia de la normativa contable y financiera, incluyendo las Normas NIIF de Información a Revelar sobre Sostenibilidad que emite el ISSB, ya que para sus usuarios, los estados financieros de empresas industriales, comerciales o de negocios en general —en los sectores público o privado—, son su principal fuente de información financiera integral para la adecuada toma de decisiones así como la medición del riesgo y que pueda lograrse la comparabilidad de manera global para los diferentes usuarios, por lo que al Colegio de Contadores Públicos de Costa Rica, por ley, le corresponde dictar este tipo de pautas.',
      },
      {
        type: 'paragraph',
        text: 'SEXTO: Que la Comisión de Normas de Información Financiera del Colegio de Contadores Públicos de Costa Rica le ha recomendado a la Junta Directiva adoptar las Normas NIIF de Información a Revelar sobre Sostenibilidad por la ISSB para proporcionar información financiera integral diseñada para reportar riesgos y oportunidades relacionados con la sostenibilidad que razonablemente podría esperarse que afecten las perspectivas de la entidad a corto, mediano o largo plazo que forman parte de los estados financieros de una entidad, siendo, que las Normas NIIF de Información a Revelar sobre Sostenibilidad de la ISSB se basan en los conceptos que sustentan las Normas NIIF de Contabilidad y el Marco Conceptual emitido por la IASB, adoptadas por el Colegio de Contadores Públicos, según se ratificó en la circular 06-2022-R, teniendo en consideración que la ISSB pretende que dicho enfoque no limite, de ninguna manera, la idoneidad de las Normas NIIF de Información a Revelar sobre Sostenibilidad para las entidades que aplican otros principios de contabilidad de aceptación general.',
      },
      {
        type: 'paragraph',
        text: 'SÉTIMO: Que el país completó su adhesión como miembro de la Organización para la Cooperación y el Desarrollo Económico (OCDE), conllevando tanto el compromiso de la rendición de cuentas, como su eje fundamental de priorizar la transparencia oportuna de la información financiera de las transacciones y manifestaciones de una empresa, en sus estados financieros de manera integral incluyendo los asuntos de sostenibilidad. Parte de esos compromisos ante la OCDE es que esa información financiera debe estar preparada para su divulgación con normas de alta calidad en materia de contabilización que las juntas de la Fundación IFRS emiten, organismo que vela por esos altos estándares fundamentalmente en cuatro ejes: la transparencia, la oportunidad, la comparabilidad general y la aceptación general para los usuarios a los que va dirigida.',
      },
      {
        type: 'paragraph',
        text: 'OCTAVO: Se hace indispensable que el Consejo Nacional de Enseñanza Superior Universitaria Privada (CONESUP) y el Consejo Nacional de Rectores (CONARE) exijan a todas las universidades que sus programas de estudio se encuentren alineados con las Normas NIIF de contabilidad y se adicionen las Normas NIIF de Información a Revelar sobre Sostenibilidad, manteniendo como materia obligatoria de la carrera de Contaduría Pública, para que de esta manera contribuyan con la adecuada formación de un profesional de calidad en esta disciplina.',
      },
      {
        type: 'paragraph',
        text: 'Por tanto,',
      },
      {
        type: 'heading',
        text: 'RESUELVE — CIRCULAR N.° 33-2023',
      },
      {
        type: 'paragraph',
        text: 'PRIMERO: Que el Colegio de Contadores Públicos de Costa Rica ha adoptado de forma plena, el conjunto de Normas NIIF de Información a Revelar sobre Sostenibilidad y publicadas por la Junta de Normas Internacionales de Sostenibilidad (ISSB, por sus siglas en inglés), como normas de divulgación efectivas y eficientes de información financiera, para integrarse en el conjunto de los estados financieros emitidos con las Normas NIIF de Contabilidad. Los estándares emitidos por el ISSB están diseñados para proporcionar información de sostenibilidad con calidad, rigurosa, confiable, comparable y transparente que permita respaldar la toma de decisiones de los inversionistas y otros usuarios, promoviendo el buen funcionamiento de los negocios en armonía con el ambiente.',
      },
      {
        type: 'paragraph',
        text: 'SEGUNDO: Que las Normas NIIF de Información a Revelar sobre Sostenibilidad preparadas y publicadas por la ISSB, utilizan terminología y conceptos que son apropiados para divulgar en forma integrada en los estados financieros de toda empresa o entidad que tenga como objetivo la generación de utilidades o ánimo de lucro, incluidas las entidades con actividad comercial en el sector público, según lo señala la NIIF S1. Estos estándares de la ISSB responden al interés público con un lenguaje coherente, debidamente articulado en los informes financieros de propósito general para revelar información financiera relacionada con la sostenibilidad de forma más uniforme, completa, comparable y verificable, permitiendo evaluar la exposición de una entidad y la gestión de los riesgos y oportunidades relacionados con sostenibilidad a corto, mediano y largo plazo, e informar sus decisiones relacionadas con el suministro de recursos a la entidad, siendo que esta información suplementa y complementa la información como parte de los informes financieros con propósito general.',
      },
      {
        type: 'paragraph',
        text: 'TERCERO: Que toda modificación a las Normas NIIF de Información a Revelar sobre Sostenibilidad en vigor, las nuevas Normas emitidas y publicadas por la Junta de Normas Internacionales de Sostenibilidad, se considerarán automáticamente incorporadas a la normativa de aplicación en Costa Rica, sin perjuicio de que el Colegio de Contadores Públicos de Costa Rica pueda hacer una evaluación y recomendación de forma total o parcial para su aplicación concreta en el país.',
      },
      {
        type: 'paragraph',
        text: 'CUARTO: Que los responsables de la preparación de información financiera en las empresas podrán consultar los estándares emitidos, en idioma inglés o español de las Normas NIIF de Información a Revelar sobre Sostenibilidad, que emite la Junta de Normas Internacionales de Sostenibilidad, publicada en el enlace https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ que se encuentra en el sitio www.iasb.org, y en la página web del Colegio de Contadores Públicos de Costa Rica en el siguiente enlace www.ccpa.or.cr. No obstante, se advierte que de preferencia el texto de referencia debe ser el que ofrece el ISSB en su versión original en inglés o español.',
      },
      {
        type: 'paragraph',
        text: 'QUINTO: Recomendar al Consejo Nacional de Enseñanza Superior Universitaria Privada (CONESUP) y al Consejo Nacional de Rectores (CONARE), acoger el Plan Curricular de Contenidos Mínimos para la Carrera de Bachillerato y Licenciatura en Contaduría Pública Circular 20-2022-R, para la aprobación, modificación o actualización de la carrera en Contaduría Pública, adicionando el contenido de las Normas NIIF de Información a Revelar sobre Sostenibilidad, con el fin de que los nuevos profesionales se preparen adecuadamente con las actuales exigencias de los mercados; es importante establecer que los planes de estudio por carrera y grado, sean actualizados al menos cada 4 años después de la emisión de la circular revisada por el Colegio.',
      },
      {
        type: 'heading',
        text: 'Transitorios',
      },
      {
        type: 'paragraph',
        text: 'Transitorio 1: La adopción de las Normas NIIF de Información a Revelar sobre Sostenibilidad emitidas por la Junta de Normas Internacionales de Sostenibilidad vigentes en este acuerdo corresponde a la NIIF S1: “Requerimientos Generales para la Información Financiera relacionada con la Sostenibilidad”, que requiere que las empresas comuniquen los riesgos y oportunidades de sostenibilidad que enfrentan a corto, mediano y largo plazo, los que están diseñados para garantizar que se proporcione información relevante para la toma de decisiones; y el otro estándar es la NIIF S2: “Información a revelar relacionada con el Clima” que establece las revelaciones específicas sobre el clima, siendo que debe usarse con el estándar de la NIIF S1; revelando información que le permita a un inversor evaluar y comprender en forma adecuada, el efecto de los riesgos y oportunidades físicas y de transición así como el método para medir los gases de efecto invernadero, las cuales entrarán en vigencia para los periodos que se inicien a partir del 1 de enero de 2024 y considerando el transitorio 2.',
      },
      {
        type: 'paragraph',
        text: 'Las Normas NIIF S1 y S2 se adoptan por el Colegio de Contadores Públicos de Costa Rica a partir del 1 de enero de 2024. Su aplicación será voluntaria a partir del 1 de enero de 2024, y obligatoria en la escala siguiente:',
      },
      {
        type: 'list',
        items: [
          'a) Las entidades con obligación pública de rendir cuentas, que apliquen las Normas NIIF de Contabilidad, incluidas aquellas que tienen plena supervisión por las Superintendencias que conforman el Consejo Nacional de Supervisión del Sistema Financiero (CONASSIF), así como las entidades catalogadas como grandes contribuyentes por la Administración Tributaria que, de conformidad con sus características y el marco de información financiera que les resulte aplicable, deban utilizar las Normas NIIF de Contabilidad, reportarán en el año 2028 la información financiera relacionada con sostenibilidad correspondiente al periodo anual finalizado el 31 de diciembre de 2027, de conformidad con las NIIF S1 y NIIF S2.',
          'b) Las entidades catalogadas como grandes contribuyentes por la Administración Tributaria que, de conformidad con los criterios establecidos en la normativa contable aplicable, estén facultadas para utilizar la Norma de Contabilidad NIIF para las PYMES, no estarán obligadas a aplicar las NIIF S1 y NIIF S2 por su sola condición de grandes contribuyentes, mientras dichas normas o las disposiciones emitidas por el Colegio de Contadores Públicos de Costa Rica no establezcan expresamente su aplicación para este tipo de entidades.',
          'c) Para las demás entidades que apliquen las Normas NIIF de Contabilidad y que no se encuentren comprendidas en el inciso a) podrán adoptar voluntariamente las Normas NIIF de Información a Revelar sobre Sostenibilidad NIIF S1 y S2 en el periodo que la administración de la entidad considere conveniente.',
          'd) Para las demás entidades que apliquen la Norma de Contabilidad NIIF para las PYMES, y que no se encuentran comprendidas en el inciso b) la aplicación de las NIIF S1 y NIIF S2 no será obligatoria hasta que la normativa correspondiente o las disposiciones adoptadas por el Colegio de Contadores Públicos de Costa Rica así lo establezcan.',
          'e) En el caso de los entes públicos regulados por la Contabilidad Nacional, se atenderán las disposiciones que emita la Contabilidad Nacional en su condición de ente rector.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Transitorio 2: No se requiere que una empresa proporcione la información a revelar especificada en las NIIF S1 y NIIF S2 para ningún período anterior a la fecha de aplicación inicial. Por consiguiente, no se requiere que una entidad revele información comparativa en el primer periodo anual sobre el que se informa, en el que aplique dichos estándares.',
      },
      {
        type: 'paragraph',
        text: 'Transitorio 3: En el primer período anual sobre el que informa, se permitirá de acuerdo con la NIIF S1, presentar las revelaciones financieras relacionadas con la sostenibilidad después de publicar sus estados financieros relacionados, teniendo en consideración los apartados E4 puntos a, b, c de la NIIF S1, y el apartado E5, para efectos de divulgación sobre riesgos y oportunidades con el clima. Para efectos de la NIIF S2 para el primer periodo anual sobre el que se informa, se deben acatar los apartados C4 a, b y el apartado C5. En general, las empresas que implementen los dos estándares NIIF S1 y NIIF S2 deben revisar las disposiciones de los transitorios indicadas en las propias normas.',
      },
      {
        type: 'paragraph',
        text: 'Publicado en el Diario Oficial La Gaceta N.° 3 del miércoles 10 de enero del 2024, la Gaceta N.° 24 del jueves 8 de febrero del 2024, la Gaceta N.° 8 del miércoles 15 de enero del 2025, la Gaceta N.° 17 del martes 28 de enero del 2025 y la Gaceta N.° 174 del miércoles 16 de setiembre del 2026 / Lic. Mauricio Artavia Mora, Director Ejecutivo.— 1 vez.—(IN2023833873), (IN2024840814), (IN2024917066), (IN2025920843) y (IN202601126731).',
      },
      {
        type: 'paragraph',
        text: 'Lic. Francisco Ovares Moscoa — Presidente de la Junta Directiva. Licda. Raquel Contreras Otárola — Secretaria de la Junta Directiva.',
      },
      {
        type: 'callout',
        title: 'Consulte el documento original',
        text: 'El PDF oficial suministrado está disponible en esta misma publicación para consulta y verificación del texto completo.',
      },
    ],
  },


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
