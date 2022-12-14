import React from 'react';
const colorArray = [
  {id: 1, title: 'black'},
  {id: 2, title: '#f33'},
  {id: 3, title: '#fff'},
  {id: 4, title: '#fe5'},
];
const categories = [
  {id: 1, title: 'پرفروش ترین ها'},
  {id: 2, title: 'جدید ترین ها'},
  {id: 3, title: 'محبوب ترین ها'},
  {id: 4, title: 'شگفت انگیز'},
];
const swiper = [
  {
    id: 1,
    title: 'بک لایت',
    image: require('../assests/testImage/sl3.jpg'),
  },
  {
    id: 2,
    title: 'بک لایت',
    image: require('../assests/testImage/slideshow2.jpeg'),
  },
  {
    id: 3,
    title: 'بک لایت',
    image: require('../assests/testImage/slideshow3.jpg'),
  },
  {
    id: 4,
    title: 'بک لایت',
    image: require('../assests/testImage/slideshow4.jpg'),
  },
];
const brand = [
  {id: 1, title: 'پاناسونیک'},
  {id: 2, title: 'سامسونگ'},
  {id: 3, title: 'ال جی'},
  {id: 4, title: 'سونی'},
  {id: 5, title: 'شارپ'},
  {id: 6, title: 'سانیو'},
  {id: 7, title: 'فیلیپس'},
  {id: 8, title: 'Nec'},
  {id: 9, title: 'Aeg'},
  {id: 10, title: 'بکو'},
  {id: 11, title: 'بوش'},
  {id: 12, title: 'کندی'},
  {id: 13, title: 'دوو'},
  {id: 14, title: 'هایر'},
  {id: 15, title: 'جنرال الکتریک'},
  {id: 16, title: 'پاناسونیک'},
];
const size = [
  {id: 1, title: '۲۱ اینچ'},
  {id: 2, title: '۴۲ اینچ'},
  {id: 3, title: '۲۴ اینچ'},
  {id: 4, title: '۴۲ اینچ'},
  {id: 5, title: '۴۲ اینچ'},
  {id: 6, title: '۴۲ اینچ'},
  {id: 7, title: '۴۲ اینچ'},
  {id: 8, title: '۴۲ اینچ'},
  {id: 9, title: '۴۲ اینچ'},
  {id: 10, title: '۴۲ اینچ'},
];
const backLight = [
  {
    id: 1,
    name: 'بک لایت سونی',
    size: '۲۱ اینج',
    imageSrc: require('../assests/testImage/1.jpg'),
    price: 1500,
    prevPrice: 2000,
    discountPercent: 5,
    count: 2,
  },
  {
    id: 2,
    name: 'بک لایت سامسونگ',
    size: '۲۱ اینج',
    imageSrc: require('../assests/testImage/slideshow3.jpg'),
    price: 1750,
    prevPrice: 2500,
    discountPercent: 6,
    count: 4,
  },
  {
    id: 2,
    name: 'بک لایت پاناسونیک',
    size: '۲۱ اینج',
    imageSrc: require('../assests/testImage/3.jpg'),
    price: 1750,
    prevPrice: 2500,
    discountPercent: 7,
    count: 4,
  },
];
const specialOffer = [
  {
    id: 1,
    size: '۴۲ اینج',
    name: 'بک لایت سونی',
    imageSrc: require('../assests/testImage/1.jpg'),
    price: 1500,
    prevPrice: 2000,
    discountPercent: 5,
    count: 2,
  },
  {
    id: 2,
    name: 'بک لایت سامسونگ',
    size: '۲۱ اینج',
    imageSrc: require('../assests/testImage/2.jpg'),
    price: 1750,
    prevPrice: 2500,
    discountPercent: 6,
    count: 4,
  },
  {
    id: 2,
    name: 'بک لایت پاناسونیک',
    size: '۴۲ اینج',
    imageSrc: require('../assests/testImage/3.jpg'),
    price: 1750,
    prevPrice: 2500,
    discountPercent: 7,
    count: 4,
  },
];

export {swiper, brand, size, backLight, specialOffer, colorArray, categories};
