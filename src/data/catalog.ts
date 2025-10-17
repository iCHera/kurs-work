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
    id: 4,
    title: 'кафе',
    description: 'Автаматизация кафе С# c SQL',
    price: 150,
    imagePath: 'images/product1/image1.png',
    galleryPaths: [
      'images/product1/image2.png',
      'images/product1/image3.png',
      'images/product1/image4.png',
      'images/product1/image5.png',
    ],
    tags: ['C#', 'SQL'],
  },
  {
    id: 2,
    title: 'С#',
    description: 'SQL',
    price: 150,
    imagePath: 'images/product1/image1.png',
    galleryPaths: [
      'images/product1/image2.png',
      'images/product1/image3.png',
      'images/product1/image4.png',
      'images/product1/image5.png',
    ],
    tags: ['C#', 'SQL'],
  },
  {
    id: 3,
    title: 'Автаматизация',
    description: 'Автаматизация кафе С# c SQL',
    price: 150,
    imagePath: 'images/product1/image1.png',
    galleryPaths: [
      'images/product1/image2.png',
      'images/product1/image3.png',
      'images/product1/image4.png',
      'images/product1/image5.png',
    ],
    tags: ['C#', 'SQL'],
  },
]
