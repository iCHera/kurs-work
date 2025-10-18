export interface CourseItem {
  id: number
  title: string
  description: string
  price: number
  imagePath: string
  tags: string[]
  galleryPaths: string[]
}

export const courseCatalog: CourseItem[] = [
  {
    id: 1,
    title: 'Автоматизация кафе: C# + SQL Server',
    description:
      'Комплексная система для автоматизации управления кафе, включая обработку заказов, управление меню и анализ продаж. База данных на SSMS.',
    price: 100,
    imagePath: 'images/product1/image1.png',
    galleryPaths: [
      'images/product1/image2.png',
      'images/product1/image3.png',
      'images/product1/image4.png',
      'images/product1/image5.png',
    ],
    tags: ['C#', 'SQL', 'SSMS', 'Desktop App'],
  },
  {
    id: 2,
    title: 'Автоматизация заселения в общежитие: C# + SQL',
    description:
      'Комплексное Desktop-приложение для управления процессом заселения, учета жильцов и комнат. База данных на SSMS обеспечивает надежное хранение данных.',
    price: 100,
    imagePath: 'images/product3/image1.png',
    galleryPaths: [
      'images/product3/image2.png',
      'images/product3/image3.png',
      'images/product3/image4.png',
      'images/product3/image5.png',
      'images/product3/image6.png',
      'images/product3/image7.png',
      'images/product3/image8.png',
    ],
    tags: ['C#', 'SQL', 'SSMS', 'Desktop App'],
  },
  {
    id: 3,
    title: 'Автоматизация записи на курсы (C# + Excel)',
    description:
      'Информационная система для образовательных учреждений. Автоматизирует регистрацию, учет участников и курсов, используя Excel в качестве базы данных.',
    price: 100,
    imagePath: 'images/product4/image1.png',
    galleryPaths: [
      'images/product4/image2.png',
      'images/product4/image3.png',
      'images/product4/image4.png',
      'images/product4/image5.png',
    ],
    tags: ['C#', 'Excel'],
  },
  {
    id: 4,
    title: 'Система учета командировочных выплат: C++',
    description:
      'Автоматизированное ПО для бухгалтерии на базе C++. Ускоряет расчет командировочных расходов, ведение отчетности и хранение истории поездок.',
    price: 100,
    imagePath: 'images/product2/image1.png',
    galleryPaths: ['images/product2/image2.png', 'images/product2/image3.png'],
    tags: ['C++'],
  },
  {
    id: 5,
    title: 'Алгоритм приоритетов заселения в общежитие (C++)',
    description:
      'Разработка алгоритма для справедливого распределения мест в общежитии, учитывающего финансовое положение студентов и их успеваемость. Программная реализация на C++.',
    price: 100,
    imagePath: 'images/product5/image1.png',
    galleryPaths: [
      'images/product5/image2.png',
      'images/product5/image3.png',
      'images/product5/image4.png',
      'images/product5/image5.png',
    ],
    tags: ['C++'],
  },
  {
    id: 6,
    title: '3D Моделирование лепестковой муфты в SolidWorks',
    description:
      'Полный цикл разработки 3D-модели и комплекта технической документации для лепестковой муфты. Проектирование в SolidWorks с учетом прочностных требований.',
    price: 100,
    imagePath: 'images/product6/image1.png',
    galleryPaths: [
      'images/product6/image2.png',
      'images/product6/image3.png',
      'images/product6/image4.png',
      'images/product6/image5.png',
      'images/product6/image6.png',
      'images/product6/image7.png',
    ],
    tags: ['SolidWorks', 'САПР', 'Моделирование'],
  },
  {
    id: 7,
    title: '3D Модель слесарного инструмента (Пассатижи) в SolidWorks',
    description:
      'Полный цикл проектирования и моделирования ручного слесарного инструмента (пассатижи) в среде SolidWorks. Акцент на эргономику и технологичность изготовления.',
    price: 100,
    imagePath: 'images/product7/image1.png',
    galleryPaths: [
      'images/product7/image2.png',
      'images/product7/image3.png',
      'images/product7/image4.png',
      'images/product7/image5.png',
      'images/product7/image6.png',
      'images/product7/image7.png',
    ],
    tags: ['SolidWorks', 'САПР', 'Моделирование'],
  },
  {
    id: 8,
    title: '3D Моделирование утилитарного фонарного столба в SolidWorks',
    description:
      'Разработка параметрической модели фонарного столба для городской инфраструктуры. Проект учитывает ветровые нагрузки, требования к освещению и оформление документации.',
    price: 100,
    imagePath: 'images/product8/image1.png',
    galleryPaths: [
      'images/product8/image2.png',
      'images/product8/image3.png',
      'images/product8/image4.png',
      'images/product8/image5.png',
      'images/product8/image6.png',
      'images/product8/image7.png',
      'images/product8/image8.png',
      'images/product8/image9.png',
      'images/product8/image10.png',
    ],
    tags: ['SolidWorks', 'САПР', 'Моделирование'],
  },
]
