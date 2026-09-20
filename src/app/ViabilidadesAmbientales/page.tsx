"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  FileCheck,
  FileText,
  FileSearch,
  ClipboardList,
  Waves,
  Droplets,
  FlaskConical,
  Construction,
  Download,
  Clock,
  DollarSign,
  Landmark,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

/**
 * CENTRO DE TRÁMITES INSTITUCIONALES
 * ------------------------------------------------------------------
 * Página única (sin modales/ventanas emergentes) que reemplaza los dos
 * componentes separados de "SETENA" y "Dirección de Aguas". Sigue el
 * flujo que pidió el cliente: Categoría -> Trámite -> Requisitos, todo
 * visible en la misma pantalla mediante navegación por pestañas.
 *
 * Los párrafos de la sección "Dirección de Aguas" son el texto oficial
 * que el cliente entregó (Reglamento de la Dirección de Agua / SIPECO)
 * y NO fueron reescritos ni resumidos. La sección "SETENA" usa el
 * contenido de las guías oficiales ST-LRA-Guía-08, 09 y 02.
 */

// ============================================================
// TIPOS
// ============================================================
type Requisito = {
  titulo: string;
  detalle: string[];
};

type Tramite = {
  id: string;
  nombre: string;
  resumen: string;
  icon: any;
  objetivo: string;
  tarifa: string;
  viaEntrada: string;
  requisitos: Requisito[];
  pdf?: { url: string; label: string };
};

type Categoria = {
  id: string;
  nombre: string;
  institucion: string;
  descripcion: string;
  tramites: Tramite[];
};

// ============================================================
// TEXTOS COMPARTIDOS (Dirección de Agua) — copiados literalmente
// ============================================================
const obligacionesEstado =
  "De la verificación del Obligaciones con el Estado. Para todos los trámites que se regulan en el presente Reglamento los funcionarios de la DA deberán verificar la información y situación de morosidad con las instituciones del Estado; en el Registro Público lo correspondiente al Impuesto de Personas Jurídicas, el Ministerio de Hacienda, la CCSS y DA. Así como la viabilidad ambiental o en trámite ante la SETENA y el Catastro Nacional.";

const obligacionesEstadoVertido =
  "De la verificación de Obligaciones con el Estado. Para todos los trámites que se regulan en el presente Reglamento los funcionarios de la DA deberán verificar la información y situación de morosidad con las instituciones del Estado; en el Registro Público lo correspondiente al Impuesto de Personas Jurídicas, el Ministerio de Hacienda, la CCSS y DA.";

// ============================================================
// DATA: SETENA
// ============================================================
const categoriaSetena: Categoria = {
  id: 'setena',
  nombre: 'SETENA',
  institucion: 'Secretaría Técnica Nacional Ambiental · MINAE',
  descripcion:
    'Gestionamos el instrumento de evaluación de impacto ambiental correcto para su proyecto, con seguimiento técnico ante la Plataforma Digital de SETENA.',
  tramites: [
    {
      id: 'd1',
      nombre: 'Formulario D1',
      resumen: 'DJCA · P-PGA · EsIA',
      icon: FileCheck,
      objetivo:
        'Obtener viabilidad de licencia ambiental para Actividades, Obras y Proyectos (AOP) que cumplan uno o más de los siguientes criterios: área ≥ 1000 m², movimiento de tierra ≥ 1000 m³, ubicación fuera de cuadrante urbano, o Significancia de Impacto Ambiental (SIA) ≥ 330.',
      tarifa:
        'Varía según el instrumento D1 aplicable: D1+DJCA ₡226, D1+P-PGA $565, D1+EsIA $1,695 (montos con IVA incluido). No se paga por anticipado: la Plataforma Digital indica el instrumento y monto una vez presentados los requisitos generales.',
      viaEntrada: 'Plataforma Digital de SETENA: tramites.setena.go.cr',
      requisitos: [
        {
          titulo: 'Datos generales y del representante legal',
          detalle: [
            'Nombre, ubicación (provincia/cantón/distrito) y datos del propietario del proyecto.',
            'Datos del representante legal y, cuando aplique, poder especial firmado digitalmente.',
            'Datos del Consultor Ambiental registrado y vigente ante SETENA.'
          ]
        },
        {
          titulo: 'Caracterización del proyecto',
          detalle: [
            'Descripción del proyecto, uso de suelo, área de propiedad y del proyecto (APT).',
            'Diseño de sitio en PDF y certificación del monto de inversión firmada digitalmente.',
            'Para proyectos constructivos: huella constructiva, áreas verdes, cobertura y movimiento de tierra.'
          ]
        },
        {
          titulo: 'Información geoespacial y planos',
          detalle: [
            'Shapefiles georreferenciados en CRTM05 (polígono, puntos, líneas del proyecto) en formato .zip.',
            'Número de finca y de plano catastrado.'
          ]
        },
        {
          titulo: 'Estudios técnicos (según instrumento)',
          detalle: [
            'Matriz de Significancia de Impacto Ambiental (SIA), completada en la Plataforma Digital.',
            'Datos geotécnicos, protocolo de hidrología e hidrogeología, o su justificación de no presentación.',
            'Reporte arqueológico rápido y estudio biológico, cuando el instrumento lo requiera.',
            'Para D1+P-PGA y D1+EsIA: Estudio de Percepción Social, Diagnóstico Ambiental y Matriz de Importancia de Impactos.'
          ]
        }
      ],
      pdf: {
        url: '/documentos/guias-setena/ST-LRA-Guia-08-Requisitos-D1.pdf',
        label: 'Guía oficial D1 (DJCA, P-PGA, EsIA)'
      }
    },
    {
      id: 'd1c',
      nombre: 'Formulario D1-C',
      resumen: 'Categoría C · áreas ambientalmente frágiles',
      icon: FileText,
      objetivo:
        'Obtener viabilidad de licencia ambiental para AOP de categoría C ubicadas en un área ambientalmente frágil, conforme al Artículo 98 del Decreto Ejecutivo N° 43898.',
      tarifa: '$67.8 (IVA incluido) — cubre el formulario y la Guía de Buenas Prácticas Ambientales.',
      viaEntrada: 'Plataforma Digital de SETENA: tramites.setena.go.cr',
      requisitos: [
        {
          titulo: 'Datos generales y consultor ambiental',
          detalle: [
            'Nombre, ubicación y datos del propietario del proyecto; datos del representante legal.',
            'Datos del Consultor Ambiental responsable, registrado y vigente ante SETENA.'
          ]
        },
        {
          titulo: 'Ubicación y planos',
          detalle: [
            'Número de finca y de plano catastrado (o justificación si no existe).',
            'Ubicación del AOP mediante coordenadas, mapa digital o número de plano.'
          ]
        },
        {
          titulo: 'Cuestionarios ambientales',
          detalle: [
            'Consumo de componentes ambientales relevantes: recurso hídrico, suelo, energía y cobertura vegetal.',
            'Impactos y otros riesgos sobre aspectos ambientales relevantes.'
          ]
        },
        {
          titulo: 'Formulario y declaración jurada',
          detalle: [
            'Descarga y firma digital del formulario D1-C generado por la Plataforma.',
            'Comprobante de pago en formato PDF.'
          ]
        }
      ],
      pdf: {
        url: '/documentos/guias-setena/ST-LRA-Guia-09-Requisitos-D1-C.pdf',
        label: 'Guía oficial D1-C'
      }
    },
    {
      id: 'eda',
      nombre: 'Estudio Diagnóstico Ambiental (EDA)',
      resumen: 'Trámite voluntario · sin costo',
      icon: FileSearch,
      objetivo:
        'Obtener viabilidad ambiental para proyectos existentes: iniciados antes del 17 de enero de 1997, entre el 12 de febrero y el 24 de junio de 2004, o que voluntariamente (o por proceso sancionatorio) requieran regularizar su situación ambiental.',
      tarifa: 'No hay costos ni tarifas para esta gestión.',
      viaEntrada: 'Plataforma Digital de SETENA: tramites.setena.go.cr',
      requisitos: [
        {
          titulo: 'Documento probatorio',
          detalle: [
            'Documento en PDF que compruebe la fecha de inicio del proyecto o la condición que motiva el trámite.'
          ]
        },
        {
          titulo: 'Datos generales y consultor ambiental',
          detalle: [
            'Nombre, descripción, ubicación y datos del propietario del proyecto.',
            'Datos del Consultor Ambiental responsable, registrado ante SETENA.'
          ]
        },
        {
          titulo: 'Información geoespacial y registro fotográfico',
          detalle: [
            'Shapefiles del área del proyecto (polígono, línea y punto) georreferenciados en CRTM05.',
            'Fotografías actuales del sitio con fecha, coordenadas y detalle de lo observado.'
          ]
        },
        {
          titulo: 'Diagnóstico y plan de cumplimiento',
          detalle: [
            'Lista de Verificación de Normativa Ambiental (LIVENA).',
            'Plan de Cumplimiento Ambiental: hallazgo, acción correctiva, plazo, responsable e indicador.',
            'Cronograma de cumplimiento y formulario EDA firmado digitalmente.'
          ]
        }
      ],
      pdf: {
        url: '/documentos/guias-setena/ST-LRA-Guia-02-Requisitos-EDA.pdf',
        label: 'Guía oficial EDA'
      }
    },
    {
      id: 'regencias',
      nombre: 'Regencias Ambientales',
      resumen: 'Supervisión técnica continua',
      icon: ClipboardList,
      objetivo:
        'Supervisión técnica en sitio para verificar el cumplimiento de los compromisos ambientales adquiridos en la resolución de viabilidad ambiental.',
      tarifa: 'Honorarios profesionales según alcance y periodicidad definida (mensual o semestral).',
      viaEntrada: 'Bitácora Ambiental Digital: sso.setena.go.cr',
      requisitos: [
        {
          titulo: 'Base habilitante',
          detalle: [
            'Resolución Administrativa de la viabilidad ambiental vigente del proyecto.'
          ]
        },
        {
          titulo: 'Ejecución de la regencia',
          detalle: [
            'Elaboración de bitácoras de regencia ambiental oficiales.',
            'Presentación de informes de cumplimiento ante SETENA u otras entidades.',
            'Asesoría continua para prevenir multas y cierres operativos.'
          ]
        }
      ]
    }
  ]
};

// ============================================================
// DATA: DIRECCIÓN DE AGUAS — textos del cliente sin modificar
// ============================================================
const categoriaAguas: Categoria = {
  id: 'aguas',
  nombre: 'Dirección de Aguas',
  institucion: 'Dirección de Agua · MINAE',
  descripcion:
    'Gestionamos sus trámites de concesión, perforación, vertido y obra en cauce ante la Dirección de Agua, conforme al reglamento vigente y la plataforma SIPECO.',
  tramites: [
    {
      id: 'superficiales',
      nombre: 'Concesión de Aguas Superficiales y Desalinización',
      resumen: 'Concesión · desglose · desalinización',
      icon: Waves,
      objetivo:
        'Autorizar el aprovechamiento de aguas superficiales dentro de una propiedad, el desglose de una concesión vigente por segregación de finca, y la concesión de agua para proyectos de desalinización.',
      tarifa: 'Según cánones establecidos por la Dirección de Agua (MINAE).',
      viaEntrada: 'Plataforma SIPECO',
      requisitos: [
        {
          titulo: 'Solicitud de Concesión para aprovechamiento de aguas superficiales',
          detalle: [
            'De la solicitud. Toda persona física o jurídica, pública o privada que, desee aprovechar el agua dentro de su propiedad, deberá presentar la solicitud de concesión de aprovechamiento de agua superficial, ante la D.A, por medio del sistema SIPECO.',
            obligacionesEstado
          ]
        },
        {
          titulo: 'Solicitud por desglose de la concesión',
          detalle: [
            'De la solicitud por desglose de la concesión. Cuando se segregue una propiedad beneficiada con una concesión vigente, él o los titulares propietarios de los inmuebles resultantes de estar interesados en el uso del agua, deberán presentar ante la DA solicitud del desglose de la concesión por medio de la plataforma SIPECO.',
            obligacionesEstado
          ]
        },
        {
          titulo: 'Solicitud de concesión de agua para desalinización',
          detalle: [
            'De la solicitud. De la presentación de la solicitud de concesión de agua. Las personas físicas o jurídicas, privadas o públicas que deseen desalinizar agua, deben presentar a la Dirección de Agua del MINAE, conforme lo establecido en la Ley de Aguas N° 276, los siguientes requisitos: Llenar el formulario de solicitud que al efecto ponga a disposición la Dirección de Agua.',
            'Para iniciar el trámite de concesión, se aceptará una copia del recibido del trámite ante SETENA. De previo a dictarse la resolución final debe de presentarse la viabilidad ambiental aprobada.',
            'Sobre los requisitos generales: Para el trámite ante todas las instituciones que daban dar autorizaciones, permisos o concesiones, se debe presentar un documento con información general del proyecto, que debe contener: Tipo de tecnología a utilizar, con la descripción de cada etapa del proceso, equipos y accesorios (bombas, membranas, difusores).',
            obligacionesEstado
          ]
        }
      ]
    },
    {
      id: 'subterranea',
      nombre: 'Perforación y Concesión de Agua Subterránea',
      resumen: 'Pozos · piezómetros · condominios',
      icon: Droplets,
      objetivo:
        'Autorizar la perforación del subsuelo y la concesión de agua subterránea: pozos convencionales, piezómetros, pozos artesanales y perforación para autoabastecimiento en condominios.',
      tarifa: 'Canon por aprovechamiento de agua, según la Dirección de Agua.',
      viaEntrada: 'Formulario en línea SIPECO / SINIGIRH',
      requisitos: [
        {
          titulo: 'Solicitud de Permiso de Perforación del Subsuelo y concesión de agua subterránea',
          detalle: [
            'Requisitos de admisibilidad. La solicitud deberá cumplir con los siguientes requisitos: Llenar en línea el formulario que deberá firmarse por parte del propietario del inmueble. Además, deberá firmar el representante legal de la perforadora contratada y el geólogo responsable de la perforación. La información solicitada en el formulario refiere a datos del solicitante, de la perforadora contratada y del geólogo responsable; sitio oficial para notificaciones, dirección electrónica para envío de facturas del canon por aprovechamiento de agua; así como las características y ubicación cartográfica del sitio de la perforación, el detalle del uso pretendido del agua y unidades de producción, señalamiento de existencia de cuerpos de agua y pozos conforme al artículo 8 de la Ley de Aguas N° 276. El formulario debe ser firmado por las partes, con el manifestó expreso que la información aportada es correcta y veraz.',
            'Archivo en formato ráster o vectorial (dxf, dwg, kmz, kml) para ser incluido en un Sistema de Información Geográfica (SIG), debe estar debidamente georeferenciado en proyección cartográfica CRTM05 y deberá contener la información del plano catastrado y la ubicación mediante coordenadas del sitio de perforación solicitada. La ubicación del sitio de la perforación debe ser determinada mediante una unidad GPS con una incertidumbre ± 5 metros en proyección CRTM05 anotando el nombre y número de la hoja cartográfica.',
            'El solicitante, la perforadora contratada y el Geólogo responsable de la perforación, deben encontrarse al día con el pago de obligaciones ante el Ministerio de Hacienda, Caja Costarricense de Seguro Social y Dirección de Agua, lo que será verificado por la Administración.',
            'De los requisitos de la concesión. Para continuar con el trámite de la concesión, el solicitante deberá cumplir con lo siguiente: Viabilidad Ambiental de la concesión de agua solicitada conforme al artículo 17 de la Ley Orgánica del Ambiente Nº 7554, donde se indique claramente el código de identificación del pozo.'
          ]
        },
        {
          titulo: 'Permiso de Perforación de piezómetro',
          detalle: [
            'De la solicitud y requisitos. La solicitud deberá entregarse a la Dirección de Agua, cumpliendo los siguientes requisitos: Llenar el formulario de solicitud que se encuentra en el SINIGIRH, firmado por el solicitante.',
            'Información del proyecto de investigación, indicando nombre de entidad que lo ejecuta y personal responsable en la supervisión y ejecución, además del objetivo de la investigación.',
            'Mapa con la localización cartográfica del sitio de perforación indicando las coordenadas levantadas por el profesional responsable utilizando el Sistema de Posicionamiento Global (GPS por sus siglas en inglés), con una incertidumbre ± 5 metros en proyección CRTM05 anotando el nombre y número de la hoja cartográfica.',
            obligacionesEstado
          ]
        },
        {
          titulo: 'Solicitud de concesión de pozo artesanal',
          detalle: [
            'De la solicitud. Toda persona física o jurídica, pública o privada que, desee aprovechar el agua dentro de su propiedad, deberá presentar la solicitud de concesión de aprovechamiento de agua superficial, ante la D.A, por medio del sistema SIPECO.',
            obligacionesEstado
          ]
        },
        {
          titulo: 'Solicitud de permiso de perforación y/o concesión de agua para el autoabastecimiento en condominios',
          detalle: [
            'De la solicitud. La solicitud de permiso de perforación debe presentarse en conjunto con la solicitud de concesión de agua ante la DA. Esta debe ser presentada por el propietario o poseedor del terreno donde se realizará la perforación, por los medios establecidos por medio de SIPECO u otros medios que disponga la DA.',
            'Requisitos de admisibilidad. La solicitud deberá cumplir con los siguientes requisitos: Archivo en formato ráster o vectorial (dxf, dwg, kmz, kml) para ser incluido en un Sistema de Información Geográfica (SIG), debe estar debidamente georeferenciado en proyección cartográfica CRTM05 y deberá contener la información del plano catastrado y la ubicación mediante coordenadas del sitio de perforación solicitada. La ubicación del sitio de la perforación debe ser determinada mediante una unidad GPS con una incertidumbre ± 5 metros en proyección CRTM05 anotando el nombre y número de la hoja cartográfica.',
            'El solicitante, la perforadora contratada y el Geólogo responsable de la perforación, deben encontrarse al día con el pago de obligaciones ante el Ministerio de Hacienda, Caja Costarricense de Seguro Social y Dirección de Agua, lo que será verificado por la Administración.',
            'Para el trámite de permiso de perforación y/o concesión de agua para autoabastecimiento de consumo humano en condominios, se deberá cumplir con los requisitos vigentes del trámite general de perforación establecidos mediante el Decreto Ejecutivo Nº 43053-MINAE y concesión establecidos en la Ley de Aguas Nº 276. Además, se deberá aportar la carta de no disponibilidad hídrica emitida por el Instituto Costarricense de Acueductos y Alcantarillados o por algún otro prestatario del servicio público autorizado, salvo para los casos en los que la solicitud de concesión sea para proyectos de desalinización, en cuyo caso se estará a lo dispuesto en el Reglamento de Sistemas de Desalinización, Decreto Ejecutivo No. 40098-MINAE-S-TUR.'
          ]
        }
      ]
    },
    {
      id: 'vertido',
      nombre: 'Permiso de Vertido',
      resumen: 'Declaración jurada ante la Dirección de Agua',
      icon: FlaskConical,
      objetivo:
        'Autorizar el vertido de aguas residuales tratadas, mediante declaración jurada presentada ante la Dirección de Agua.',
      tarifa: 'Según lo establecido por la Dirección de Agua.',
      viaEntrada: 'Formulario disponible en la página web de la Dirección de Agua',
      requisitos: [
        {
          titulo: 'Permiso de vertido',
          detalle: [
            'Los interesados en obtener el permiso de vertidos deberán llenar y presentar el Formulario de Solicitud de Permiso de Vertidos con carácter de declaración jurada, ante la Dirección de Agua el cual se encuentra disponible en la página web de la Dirección.',
            'Según sea el caso se deberán adjuntar al formulario los siguientes documentos: Para entes generadores cuyo sistema de tratamiento de aguas residuales tenga un año o más de funcionamiento presentar la Certificación de la Calidad de Agua Residual.',
            'Para entes generadores cuyo sistema de tratamiento de aguas residuales tenga menos de un año de operación aportar un análisis de laboratorio de la calidad del agua residual emitido por un laboratorio habilitado. Debe incluir los parámetros solicitados en el reglamento que regula el vertido y reuso de aguas residuales y la DQO soluble.',
            obligacionesEstadoVertido
          ]
        }
      ]
    },
    {
      id: 'obra-cauce',
      nombre: 'Permiso de Obra en Cauce',
      resumen: 'Obras menores y mayores en cauce',
      icon: Construction,
      objetivo:
        'Autorizar la intervención de un cauce, incluyendo los estudios técnicos adicionales exigidos para obras mayores.',
      tarifa: 'Según lo establecido por la Dirección de Agua.',
      viaEntrada: 'Plataforma SIPECO',
      requisitos: [
        {
          titulo: 'Permiso de Obra en Cauce',
          detalle: [
            'El solicitante de un permiso de obra en cauce debe presentar la solicitud ante la DA, por medio de la plataforma SIPECO. La solicitud debe ser firmada por el titular propietario, el poseedor del inmueble y/o el autorizado para el uso. Esta autorización deberá ser presentada acompañada de un poder especial debidamente suscrito ante Notario Público y cumplimiento las normas de seguridad establecidas por la Dirección Nacional de Notariado.',
            'De los requisitos y procedimiento para obras mayores en cauce. Además de lo señalado en el artículo anterior el interesado deberá de presentar los siguientes requerimientos: a) Estudio hidrológico de la cuenca afluente del cauce a intervenir, que determine el caudal de diseño, considerando un período de retorno acorde con la obra de intervención y la seguridad civil.',
            'Estudio hidráulico de la obra conforme secciones transversales del cauce original y del cauce modificado, que demuestre que conforme el caudal de diseño es viable la intervención sin perjuicio a terceros.',
            'Secciones transversales del cauce original y de la propuesta de cauce modificado. Debe levantarse secciones transversales del cauce espaciadas 50 metros entre cada una, a lo largo de la intervención.',
            'Si existe aguas abajo del sitio de intervención y en su área de influencia, obras civiles en el cauce, deben ser evaluadas integralmente en el estudio hidráulico con la intervención solicitada, para no causar daños a terceros.',
            'Plano de planta de la obra y secciones típicas aguas arriba y abajo del sector del cauce a intervenir.',
            obligacionesEstado
          ]
        }
      ]
    }
  ]
};

const categorias: Categoria[] = [categoriaSetena, categoriaAguas];

// ============================================================
// COMPONENTE
// ============================================================
export default function TramitesInstitucionales() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>(categorias[0].id);
  const [tramiteActivoId, setTramiteActivoId] = useState<string>(categorias[0].tramites[0].id);
  const router = useRouter();

  const categoria = categorias.find((c) => c.id === categoriaActiva) ?? categorias[0];
  const tramite =
    categoria.tramites.find((t) => t.id === tramiteActivoId) ?? categoria.tramites[0];

  function cambiarCategoria(id: string) {
    const nueva = categorias.find((c) => c.id === id);
    if (!nueva) return;
    setCategoriaActiva(id);
    setTramiteActivoId(nueva.tramites[0].id);
  }

  return (
    <section className="relative bg-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        {/* ENCABEZADO */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-bukue-primary">
            Centro de Trámites Institucionales
          </span>
          <h2 className="text-bukue-dark text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight">
            Del expediente a la resolución final
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Un solo equipo técnico para acompañar su proyecto ante SETENA y la Dirección de
            Agua del MINAE: seleccione la institución y el trámite para revisar objetivo,
            tarifas y requisitos completos.
          </p>
        </div>

        {/* PESTAÑAS DE CATEGORÍA (Institución) */}
        <div className="flex flex-wrap gap-3 border-b border-gray-200 mb-10">
          {categorias.map((cat) => {
            const activo = cat.id === categoria.id;
            return (
              <button
                key={cat.id}
                onClick={() => cambiarCategoria(cat.id)}
                className={`relative px-5 py-3 text-sm font-bold transition-colors ${
                  activo ? 'text-bukue-dark' : 'text-gray-400 hover:text-bukue-dark'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Landmark size={16} className={activo ? 'text-bukue-primary' : 'text-gray-300'} />
                  {cat.nombre}
                </span>
                {activo && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-[3px] bg-bukue-primary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-gray-500 -mt-6 mb-10">
          <span className="font-semibold text-bukue-dark">{categoria.institucion}.</span>{' '}
          {categoria.descripcion}
        </p>

        {/* LAYOUT: NAV LATERAL DE TRÁMITES + PANEL DE CONTENIDO */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Navegación de sub-trámites */}
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {categoria.tramites.map((t, idx) => {
              const Icon = t.icon;
              const activo = t.id === tramite.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTramiteActivoId(t.id)}
                  className={`flex items-center gap-3 text-left px-4 py-3.5 rounded-lg border shrink-0 lg:shrink transition-all min-w-[220px] lg:min-w-0 ${
                    activo
                      ? 'bg-bukue-dark border-bukue-dark text-white shadow-md'
                      : 'bg-white border-gray-200 text-bukue-dark hover:border-bukue-primary/50'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 text-xs font-black ${
                      activo ? 'bg-white/15 text-white' : 'bg-bukue-dark/5 text-bukue-primary'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold leading-snug truncate">
                      {t.nombre}
                    </span>
                    <span className={`block text-xs mt-0.5 truncate ${activo ? 'text-white/70' : 'text-gray-400'}`}>
                      {t.resumen}
                    </span>
                  </span>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 hidden lg:block ${activo ? 'text-white' : 'text-gray-300'}`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Panel de contenido */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${categoria.id}-${tramite.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Encabezado del trámite */}
              <div className="p-7 md:p-8 border-b border-gray-100 bg-gray-50/60">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-bukue-primary">
                      {tramite.resumen}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-bukue-dark leading-tight mt-1">
                      {tramite.nombre}
                    </h3>
                  </div>
                  {tramite.pdf && (
                    <a
                      href={tramite.pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 bg-bukue-dark text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-bukue-primary transition-colors shrink-0"
                    >
                      <Download size={16} />
                      {tramite.pdf.label}
                    </a>
                  )}
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-5 max-w-3xl">
                  {tramite.objetivo}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4">
                    <DollarSign size={18} className="text-bukue-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">Tarifa</p>
                      <p className="text-sm font-semibold text-bukue-dark leading-snug">{tramite.tarifa}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4">
                    <Clock size={18} className="text-bukue-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wide">Vía de entrada</p>
                      <p className="text-sm font-semibold text-bukue-dark leading-snug">{tramite.viaEntrada}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requisitos, siempre visibles (sin acordeón ni modal) */}
              <div className="p-7 md:p-8 space-y-6">
                <h4 className="text-sm font-black uppercase tracking-wide text-bukue-dark">
                  Requisitos
                </h4>
                {tramite.requisitos.map((req, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-bukue-dark mb-2.5">{req.titulo}</p>
                    <ul className="space-y-2.5">
                      {req.detalle.map((d, j) => (
                        <li key={j} className="flex gap-2.5 items-start text-gray-600 text-sm leading-relaxed">
                          <CheckCircle2 size={15} className="text-bukue-primary mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Remate */}
        <div className="mt-14 border border-gray-200 rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-bukue-dark text-base md:text-lg font-medium max-w-xl">
            Somos profesionales inscritos ante SETENA y con la experiencia para llevar su
            proyecto hacia el éxito.
          </p>
          <button
            className="bg-bukue-dark text-white px-7 py-3.5 rounded-md font-bold text-sm hover:bg-bukue-primary transition-colors shrink-0"
            onClick={() => router.push('/contacto')}
          >
            Iniciar Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}