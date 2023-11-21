import {IProduct} from 'types'
import {reviews} from "./review.data.ts"

export const products: IProduct[] = [
    {
        id: 1,
        description:
            'A gentle combination of chilled espresso of light roasting with cane sugar syrup with oatmeal base. An invigorating and nutritious drink!',
        name: 'Espresso Oatmeal Shake',
        images: [
            '/images/products/product-1.png',
            '/images/products/product-2.png',
            '/images/products/product-3.png',
        ],
        price: 9,
        reviews: [reviews[0], reviews[1], reviews[2]],
        size: 1,
        date: new Date('2023-10-01'),
        slug: 'espresso-oatmeal-shake'
    },
    {
        id: 2,
        description:
            'Starbucks branded coffee drink with the addition of milk, espresso shot, which gives the drink a richer coffee flavor, and ground ice',
        name: 'Frappuccino ® Espresso',
        images: [
            '/images/products/product-6.png',
            '/images/products/product-2.png',
            '/images/products/product-3.png',
        ],
        price: 5,
        reviews: [reviews[0], reviews[1], reviews[2]],
        size: 1,
        date: new Date('2023-09-15'),
		slug: 'frappuccino-espresso'
    },
    {
        id: 3,
        description:
            'Calories Total Fat 20g Saturated Fat 13g Trans Fat 0.5g 36% 75%',
        name: 'Irish Cream Cold Brew',
        images: [
            '/images/products/product-3.png',
            '/images/products/product-2.png',
            '/images/products/product-3.png',
        ],
        price: 15,
        reviews: [reviews[0], reviews[1], reviews[2]],
        size: 1,
        date: new Date('2023-09-20'),
		slug: 'irish-cream-cold-brew'
    },
    {
        id: 4,
        description:
            'Starbucks signature drink with milk, chocolate sauce and ground ice. Decorated with whipped cream and chocolate sauce',
        name: 'Frappuccino ® Creamy Chocolate',
        images: [
            '/images/products/product-4.png',
            '/images/products/product-2.png',
            '/images/products/product-3.png',
        ],
        price: 2,
        reviews: [reviews[0], reviews[1], reviews[2]],
        size: 1,
        date: new Date('2023-09-25'),
		slug: 'frappuccino-creamy-chocolate'

    },
    {
        id: 5,
        description:
            'Starbucks branded coffee drink with milk, Mocha sauce, white chocolate, ground ice. Decorated with whipped cream',
        name: 'Frappuccino ® Mocha White Chocolate',
        images: [
            '/images/products/product-5.png',
            '/images/products/product-2.png',
            '/images/products/product-3.png',
        ],
        price: 14,
        reviews: [reviews[0], reviews[1], reviews[2]],
        size: 1,
        date: new Date('2023-09-29'),
		slug: 'frappuccino-mocha-white-chocolate'
    },
]
