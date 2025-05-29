db.createCollection('users');
db.createCollection('carts');
db.products.insertMany(  [
  {

    
   //apple - adidas
    //nike - samsung
    //Huawei= Huawei
    //Gucci= lg
    //H&M- hts

    info: {
      name: 'Adidas жейде',
      dimensions: 'XL',
      weight: '2020 мм',
      displayType: 'IPS',
      displaySize: '1800мм"',
      displayResolution: 'Adidas',
      os: 'Жоғары',
      cpu: '6 ядер',
      internalMemory: '30+',
      ram: '3 GB',
      camera: 'Двойная камера: 12 MP (f/1.8, 28mm, OIS) + 12 MP (f/2.8, 57mm)',
      batery: 'Не сьемная, 2691 mAh',
      color: 'Ақ',
      price: 700,
      photo: '/img/kofta_adidas.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'apple',
      color: 'white',
      os: 'android',
      internalMemory: '256',
      ram: '3',
      displaySize: '6.0',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'Adidas Шалбар',
      dimensions: 'S',
      weight: '1650 мм ',
      displayType: 'AMOLED',
      displaySize: '600 мм"',
      displayResolution: 'Adidas',
      os: 'Төменгі',
      cpu: '6 ядер 2.39 GHz',
      internalMemory: '12+',
      ram: '3 GB',
      camera: 'Двойная камера: 12 MP (f/1.8, 28mm) + 12 MP (f/2.4, 52mm)',
      batery: 'Не сьемная, 2716 mAh  (10.35 Wh)',
      color: 'Қара',
      price: 950,
      photo: '/img/adidas_st.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'apple',
      color: 'black',
      os: 'ios',
      internalMemory: '16',
      ram: '3',
      displaySize: '5.1',
      displayResolution: '1125x2436',
      camera: '12',
      cpu: 'hexa_core'
    }
  },
  {
    info: {
      name: 'H&M Көйлек винтаж',
      dimensions: 'XXL',
      weight: '1690 мм',
      displayType: 'IPS',
      displaySize: '900 мм"',
      displayResolution: 'H&M ',
      os: 'Жоғары',
      cpu: '4 ядерный',
      internalMemory: '15+',
      ram: '6 GB',
      camera: '12 MP',
      batery: 'Не сьемная 3000 mAh ',
      color: 'АҚ тарту',
      price: 450,
      photo: '/img/h&m_rubashka.jpg'
    },
    tags: {
      priceRange: '250-500',
      brand: 'htc',
      color: 'white',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '6.3',
      displayResolution: '1440x2560',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Huawei Қолтаңба футболкасы',
      dimensions: 'L',
      weight: '1780 мм',
      displayType: 'AMOLED ',
      displaySize: '600 мм',
      displayResolution: 'Huawei ',
      os: 'Жоғары',
      cpu: '4 ядра (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)',
      internalMemory: '15+',
      ram: '6 GB',
      camera: 'Двойная камера: 12 MP (f/1.6, 27mm, OIS) +20 MP (f/1.6, 27mm)',
      batery: 'Non-removable Li-Po 4000 mAh battery',
      color: 'Қара цаца',
      price: 800,
      photo: '/img/huawei_tshirt.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'huawei',
      color: 'black',
      os: 'android',
      internalMemory: '128',
      ram: '6',
      displaySize: '5.8',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Huawei Фирмалық шалбар',
      dimensions: 'М',
      weight: '850 мм',
      displayType: 'IPS',
      displaySize: '500мм"',
      displayResolution: 'Huawei',
      os: 'Төменгі',
      cpu: '4 ядра',
      internalMemory: '15 дейін',
      ram: '4 GB',
      camera: 'Двойная: 12 MP (f/2.2, PDAF, OIS) + 20 MP',
      batery: 'Не сьемная 3200 mAh ',
      color: 'Капец күлкілі қара',
      price: 680,
      photo: '/img/huawei_shtany.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'huawei',
      color: 'black',
      os: 'ios',
      internalMemory: '64',
      ram: '4',
      displaySize: 'M',
      displayResolution: '1080x1920',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Gucci шорт',
      dimensions: 'XS',
      weight: '400 мм',
      displayType: 'IPS ',
      displaySize: '58мм"',
      displayResolution: 'Gucci',
      os: 'Төменгі',
      cpu: '4 ядра ',
      internalMemory: '15+',
      ram: '4 GB',
      camera: 'Двойная камера: 13 MP (f/1.8, 1/3", 1.12 µm, 3-axis OIS, PDAF) + 13 MP (f/2.4, AF)',
      batery: 'Не сьемная 3000 mAh',
      color: 'Сұр',
      price: 800,
      photo: '/img/gucci_trusy.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'lg',
      color: 'grey',
      os: 'ios',
      internalMemory: '128',
      ram: '4',
      displaySize: '4.5',
      displayResolution: '1440x2880',
      camera: '13',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Gucci Қақпақ',
      dimensions: 'XS',
      weight: '158 мм',
      displayType: 'OLED',
      displaySize: '60 мм"',
      displayResolution: 'Gucci',
      os: 'Жоғары',
      cpu: '4 ядра ',
      internalMemory: '15+',
      ram: '4 GB',
      camera: 'Двойная камера: 16 MP (f/1.6, 1 µm, 3-axis OIS, PDAF) + 13 MP (f/1.9,  AF)',
      batery: 'Не сьемная 3000 mAh',
      color: 'Ғарыштық бүйрек',
      price: 800,
      photo: '/img/gucci_kepka.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'lg',
      color: 'black',
      os: 'android',
      internalMemory: '128',
      ram: '4',
      displaySize: '4.5',
      displayResolution: '1440x2880',
      camera: '16',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Nike Blazzer',
      dimensions: 'M',
      weight: '180 мм',
      displayType: 'Super AMOLED',
      displaySize: '50 мм',
      displayResolution: 'Nike ',
      os: 'Төменгі',
      cpu: '4 ядра 1.2 GHz',
      internalMemory: '15+',
      ram: '1 GB',
      camera: '8 MP (f/2.4, 31mm), autofocus, LED flash',
      batery: 'Не сьемная 1900 mAh ',
      color: 'Күміс',
      price: 150,
      photo: '/img/nike_blazer.jpg'
    },
    tags: {
      priceRange: '<250',
      brand: 'samsung',
      color: 'grey',
      os: 'ios',
      internalMemory: '128',
      ram: '1',
      displaySize: '5.5',
      displayResolution: '540x960',
      camera: '8',
      cpu: 'quad_core'
    }
  },
  {
    info: {
      name: 'Nike Майк',
      dimensions: 'M',
      weight: '1953 мм',
      displayType: 'Super AMOLED ',
      displaySize: '630 мм"',
      displayResolution: 'Nike ',
      os: 'Жоғары',
      cpu: '4 ядра (4x2.3 GHz & 4x1.7 GHz) ',
      internalMemory: '30+',
      ram: '6 GB',
      camera: 'Двойная камера: 12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm) + 12MP (f/2.4, 52mm, 1/3.6", 1 µm)',
      batery: 'Не сьемная 3300 mAh battery',
      color: 'Ай қандай қымбат',
      price: 800,
      photo: '/img/Nike_mike.jpg'
    },
    tags: {
      priceRange: '750>',
      brand: 'samsung',
      color: 'black',
      os: 'android',
      internalMemory: '256',
      ram: '6',
      displaySize: '5.5',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  },
  {
    info: {
      name: 'Nike Шалбар',
      dimensions: 'L',
      weight: '1550 мм',
      displayType: 'Super AMOLED ',
      displaySize: '580 мм',
      displayResolution: 'Nike',
      os: 'Төменгі',
      cpu: '4 ядра (4x2.3 GHz & 4x1.7 GHz) ',
      internalMemory: '15 дейін',
      ram: '4 GB',
      camera: '12 MP (f/1.7, 26mm, 1/2.5", 1.4 µm, Двойная камера )',
      batery: 'Не сьемная 3000 mAh battery',
      color: 'Ай',
      price: 720,
      photo: '/img/Nike_stany.jpg'
    },
    tags: {
      priceRange: '500-750',
      brand: 'samsung',
      color: 'black',
      os: 'ios',
      internalMemory: '64',
      ram: '4',
      displaySize: '5.8',
      displayResolution: '1440x2960',
      camera: '12',
      cpu: 'octa_core'
    }
  
  }
]);

