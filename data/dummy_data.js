import Category from '../models/category';
import Service from '../models/Service';
  

export const CATEGORIES = [
      new Category('c1', 'Toyota', '#5A5A5A'),
      new Category('c2', 'Nissan', '#5A5A5A'),
      new Category('c3', 'Porsche', '#5A5A5A'),
      new Category('c4', 'Dodge', '#5A5A5A'),
      new Category('c5', 'Tesla', '#5A5A5A'),
      new Category('c6', 'Chevrolet', '#5A5A5A'),
      new Category('c7', 'Acura', '#5A5A5A'),
      new Category('c8', 'Ford', '#5A5A5A'),
  
];

export const SERVICES = [
  new Service(
    's1',
    ['c1' ],
    'toyota supra',
    '',
    '',
    'https://mma.prnewswire.com/media/2188962/2024_GRSupra_45thAnniversaryEd_MikanBlast_H.jpg?p=twitter',
    0,
    [
      
      
      'El Toyota Supra (en japonés: トヨタ・スープラ Toyota Sūpura) es un automóvil deportivo hatchback de 3 puertas, con motor delantero montado longitudinalmente y de tracción trasera, producido por el fabricante japonés Toyota desde 1978 hasta la actualidad. Hubo una pausa desde 2002 hasta su reinicio en 2019.'


    ],

    
  
    
  ),

  new Service(
    's2',
    ['c1' ],
    'toyota gt86',
    '',
    '',
    'https://noticias.coches.com/wp-content/uploads/2019/07/toyota_86-limited-edition-australia-2017_r7.jpg',
    0,
    [
      
      'El Toyota GT86, también conocido como Subaru BRZ y Scion FR-S, son automóviles deportivos desarrollados por los fabricantes japoneses Toyota y Subaru y también desarrollado por el fabricante estadounidense Scion en el mercado desde el año 2012. Tienen motor delantero bóxer y tracción trasera. Son coupés de dos puertas y 2+2 plazas. '
    ],
  
    
  ),
  
  new Service(
    's3',
    ['c2' ],
    'Nissan GTR',
    '',
    '',
    'https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/gt-r/my24/overview/nissan-2024-gtr_tspec_millennium_jade-overview-tokyo1_running-d.jpg.ximg.l_full_m.smart.jpg',
    0,
    [
      
      'El Nissan GT-R es un automóvil deportivo gran turismo cupé 2+2 con motor delantero montado longitudinalmente y tracción en las cuatro ruedas,​ producido por el fabricante japonés Nissan, lanzado en Japón el 6 de diciembre de 2007, en Estados Unidos el 7 de julio de 2008 y en el resto del mundo en marzo de 2009. '
    ],
  
    
  ),

  new Service(
    's4',
    ['c2' ],
    'Nissan Skyline r34',
    '',
    '',
    'https://img.asmedia.epimg.net/resizer/v2/LIGDGQO6MJD3HP2NWGAT4XNRYA.jpeg?auth=81f00ea3b04d28afcd99fde95d58f8f790274312063e2b5b93fbab49fddcc046&width=1472&height=828&focal=946%2C606',
    0,
    [
      
      'El Nissan Skyline R34 es un automóvil de turismo producido por el fabricante japonés Nissan, con un motor delantero montado longitudinalmente y de tracción en las cuatro ruedas. Fue lanzado en Japón en 1990, en Estados Unidos en 1994 y en el resto del mundo entre 1995 y 1999.1​'
    ],
  
    
  ),

  new Service(
    's5',
    ['c3' ],
    'Porsche 911',
    '',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Porsche_992_GT3_1X7A0323.jpg/1200px-Porsche_992_GT3_1X7A0323.jpg',
    0,
    [
      
      'El Porsche 911 es un automóvil deportivo de lujo producido por el fabricante alemán Porsche AG, desde 1964. A través de los años, ha pasado por varias regeneraciones. De todas formas, muchas de las características del modelo original se conservan, como su configuración «todo atrás», su carrocería coupé fastback, el motor bóxer de seis cilindros y un interior con configuración 2+2 plazas.'
    ],

    
  
    
  ),

  new Service(
    's16',
    ['c3' ],
    'Porsche Cayenne',
    '',
    '',
    'https://cdn.motor1.com/images/mgl/2NAbZp/s3/2024-porsche-cayenne-v8-phev-top-version.jpg',
    0,
    [
      
      'El Porsche Cayenne es un automóvil todoterreno de lujo del segmento E producido por el fabricante de automóviles alemán Porsche. Es el primer modelo de Porsche que no es un automóvil deportivo, aunque sus prestaciones son equivalentes a las de otros modelos de la marca, destacable su personalidad deportiva, a pesar de viajes en carreteras de montaña. El Cayenne fue reestilizado en 2006, al modificarse parcialmente la estética y la mecánica. '
    ],

    
  
    
  ),

  new Service(
    's6',
    ['c4' ],
    'Dodge Durango',
    '',
    '',
    'https://www.dodge.com/content/dam/cross-regional/nafta/dodge/es_mx/Modelos/2022/durango-2022/01-inicio/1-1-cover/dodge-durango-cover.jpg.img.1440.jpg',
    0,
    [
      
      'El Dodge Durango es un SUV de tamaño mediano estadounidense, que reemplazó al Ram Charger, y se produce desde 1997 por Dodge, filial de Stellantis, en su planta de Newark, Delaware. Del Durango conocemos, de momento, tres generaciones.'
    ],
  
    
  ),

  new Service(
    's7',
    ['c4' ],
    'Dodge Charger',
    '',
    '',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Dodge_Charger_Hirschaid-20220709-RM-113717.jpg/1200px-Dodge_Charger_Hirschaid-20220709-RM-113717.jpg',
    0,
    [
      
      'El Dodge Charger es un automóvil deportivo producido por el fabricante estadounidense Dodge, división del grupo Stellantis. A la fecha, existen diferentes generaciones en tres diferentes plataformas. Este nombre es asociado generalmente con un modelo de rendimiento en la gama Dodge, aunque también se ha llevado a un Hatchback, un sedán y a un cupé de lujo personal.'
    ],
  
    
  ),

  new Service(
    's8',
    ['c5' ],
    'Tesla Model S',
    '',
    '',
    'https://img.remediosdigitales.com/6d86d4/ms6/1366_2000.jpg',
    0,
    [
      
      'El Model S está construido desde cero como un vehículo eléctrico, con una arquitectura de alta resistencia y un paquete de baterías colocado en el piso para una increíble protección de los ocupantes y un bajo riesgo de volcadura.'
    ],
  
    
  ),

  new Service(
    's9',
    ['c5' ],
    'Tesla Model 3',
    '',
    '',
    'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_680ca0f19ee2418f872d9864c11c4fc6.webp',
    0,
    [
      
      'Tesla Model 3 es un automóvil eléctrico sedán de cinco plazas fabricado por Tesla. La presentación mundial se hizo el 31 de marzo de 2016 y las primeras 30 entregas se efectuaron el 28 de julio de 2017.1​'
    ],
  
    
  ),

  

  new Service(
    's10',
    ['c6' ],
    'Chevrolet Sliverado',
    '',
    '',
    'https://www.chevrolet.com.mx/bypass/master_tools/content/dam/Chevrolet/lat-am/mexico-quantum-tools/nscwebsite/es/home/Pick-ups/Silverado%202024/01_images/silverado-cabina-regular-4x2-v2.jpg',
    0,
    [
      
      'La Chevrolet Silverado es una camioneta de tamaño completo usualmente de 6 pasajeros, fabricada por la división Chevrolet de General Motors en Estados Unidos, Canadá, México y Venezuela. Motor delantero, tracción trasera.'
    ],
  
    
  ),

  new Service(
    's11',
    ['c6' ],
    'Chevrolet Camaro',
    '',
    '',
    'https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/performance/2024-camaro-coupe/mov/01-images/camaro-panther.jpg?imwidth=960',
    0,
    [
      
      'El Chevrolet Camaro es un automóvil deportivo de dos puertas, con motor delantero montado longitudinalmente y de tracción trasera, producido por el fabricante estadounidense Chevrolet, división de General Motors (GM) desde 1966.1​ Compartía su plataforma y la mayoría de sus componentes con el Pontiac Firebird, también introducido en 1967.'
    ],
  
    
  ),
  new Service(
    's12',
    ['c7' ],
    'Acura NSX',
    '',
    '',
    'https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_dcdfa8cbb7e642bea68a24ccb741b266.jpg',
    0,
    [
      
      'El Acura NSX (abreviatura de New Sport eXperimental) es un automóvil deportivo de dos puertas biplaza con motor central-trasero, producido por fabricante japonés Honda entre 1990 y 2005, ofreciendo diferentes versiones tanto en carrocerías cupé como targa. En Estados Unidos y Hong Kong se ha vendido bajo la marca Acura.'
    ],
  
    
  ),

  new Service(
    's13',
    ['c7' ],
    'Acura TLX',
    '',
    '',
    'https://img.remediosdigitales.com/8807b0/2560_3000/1366_2000.jpg',
    0,
    [
      
      'El TLX está listo con un emocionante motor VTEC® turboalimentado de 272 caballos de fuerza * que se combina con las comodidades de primer nivel y la estructura esculpida y atractiva. Elévate a los niveles de rendimiento del Type S y conoce el sedán de Acura más potente hasta el momento.'
    ],
  
    
  ),

  new Service(
    's14',
    ['c8' ],
    'Ford Raptor',
    '',
    '',
    'https://img.remediosdigitales.com/818b47/ford-ranger-raptor_/1366_2000.jpg',
    0,
    [
      
      'Ford Raptor 2020 está equipada con Terrain Mangement, tecnología que ofrece al conductor la posibilidad de elegir entre seis Modos de Manejo para mejorar la dinámica de conducción en una variedad de condiciones ambientales que incluyen: Normal, Sport, Clima, Lodo, Roca y Carrera en el Desierto.'
    ],
  
    
  ),

  new Service(
    's15',
    ['c8' ],
    'Ford Ranger',
    '',
    '',
    'https://acnews.blob.core.windows.net/imgnews/large/NAZ_f17b057f8815443f89964694aed86ad9.webp',
    0,
    [
      
      'Ford Ranger es un nombre usado en dos diferentes líneas de camionetas (pickup) compactas fabricadas por la Ford Motor Company y por un acuerdo de comercialización con Mazda.'
    ],
  
    
  ),

  
]