import { Product } from '@prisma/client';

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
  {
    name: 'Espresso Oatmeal Shake',
    images: [
      '/uploads/images/products/product-1.png',
      '/uploads/images/products/product-2.png',
      '/uploads/images/products/product-3.png',
    ],
  },
  {
    name: 'Frappuccino ® Espresso',
    images: [
      '/uploads/images/products/product-6.png',
      '/uploads/images/products/product-2.png',
      '/uploads/images/products/product-3.png',
    ],
  },
  {
    name: 'Irish Cream Cold Brew',
    images: [
      '/uploads/images/products/product-3.png',
      '/uploads/images/products/product-2.png',
      '/uploads/images/products/product-3.png',
    ],
  },
  {
    name: 'Frappuccino ® Creamy Chocolate',
    images: [
      '/uploads/images/products/product-4.png',
      '/uploads/images/products/product-2.png',
      '/uploads/images/products/product-3.png',
    ],
  },
  {
    name: 'Frappuccino ® Mocha White Chocolate',
    images: [
      '/uploads/images/products/product-5.png',
      '/uploads/images/products/product-2.png',
      '/uploads/images/products/product-3.png',
    ],
  },
];
