import Category from "../models/category";
import Walker from "../models/walker";

export const CATEGORIES = [
    new Category('c1', 'BOOK WALK', '#f5428d'),
    new Category('c2', 'ADD DOGS', '#f54242'),
    new Category('c3', 'CALENDAR', '#f5a442'),
    new Category('c4', 'WALKERS IN YOUR AREA', '#f5d142'),
    new Category('c5', 'BECOME A WALKER', '#368dff'),
];

export const WALKERS = [
    new Walker(
        'w1',
        ['c1', 'c4'],
        'Sam\'s pet care',
        10,
        5,
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/Toy_dog_with_graduation_cap.jpg',
        60,
        [
            'small',
            'medium'
        ],
        'small business with an electric van, I do 3 walks a day so have lots of space',
        true,
        'Sam'
    ),
    new Walker(
        'w2',
        ['c1', 'c4'],
        'Linzi\'s pet care',
        12,
        4,
        'https://upload.wikimedia.org/wikipedia/commons/1/11/Pug_with_pet_passport_for_travel.jpg',
        60,
        [
            'small',
            'medium',
            'large'
        ],
        'large business with 3 vans, I do 5 walks although space fills up fast!',
        true,
        'Linzi'
    ),
    new Walker(
        'w3',
        ['c1', 'c4'],
        'Jim\'s dog walks',
        15,
        3,
        'https://upload.wikimedia.org/wikipedia/commons/9/9f/Guide_dog_with_visually_impaired_woman.jpg',
        30,
        [
            'small',
            'large'
        ],
        'I just like the extra pocket money, don\'t do it a lot.',
        false,
        'Jim'
    ),
    new Walker(
        'w4',
        ['c1', 'c4'],
        'puppy\'s paradise',
        20,
        5,
        'https://upload.wikimedia.org/wikipedia/commons/f/f3/Labrador_with_pet_passport_for_travel.jpg',
        60,
        [
            'large'
        ],
        'your pup WILL be pampered',
        true,
        'William'
    ),
]