import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Recognized for exceptional and affordable cuisine.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Honored for our innovative culinary approach.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Awarded for outstanding guest service.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrating Chef Kevin Luo\'s creativity and skill.',
  },
];

const testimony = [
  {
    id: 1,
    image: images.testimony01,
    name: 'Emily Johnson',
    feedback: 'Amazing experience! The food was delicious and the service was excellent.',
    to: 'Sommelier'
  },
  {
    id: 2,
    image: images.testimony02,
    name: 'Jane Smith',
    feedback: 'A wonderful place to dine with family and friends. Highly recommended!',
    to: 'Chef'
  },
  {
    id: 3,
    image: images.testimony03,
    name: 'John Doe',
    feedback: 'The ambiance was perfect and the staff were very friendly.',
    to: 'Manager'
  },
  {
    id: 4,
    image: images.testimony04,
    name: 'Michael Brown',
    feedback: 'A delightful culinary experience with a great selection of wines.',
    to: 'Caterer'
  },
];

const foodMenu = [
  {
    title: 'Chicken Biryani',
    price: '$18',
    tags: 'Basmati rice | tender chicken | aromatic spices',
  },
  {
    title: 'Vegetable Biryani',
    price: '$16',
    tags: 'Basmati rice | mixed vegetables | aromatic spices',
  },
  {
    title: 'Lamb Biryani',
    price: '$20',
    tags: 'Basmati rice | tender lamb | aromatic spices',
  },
  {
    title: 'Paneer Biryani',
    price: '$17',
    tags: 'Basmati rice | paneer | aromatic spices',
  },
  {
    title: 'Chicken Curry',
    price: '$15',
    tags: 'Tender chicken | rich curry sauce',
  },
  {
    title: 'Vegetable Curry',
    price: '$14',
    tags: 'Mixed vegetables | rich curry sauce',
  },
  {
    title: 'Lamb Curry',
    price: '$17',
    tags: 'Tender lamb | rich curry sauce',
  },
  {
    title: 'Paneer Curry',
    price: '$16',
    tags: 'Paneer | rich curry sauce',
  },
  {
    title: 'Chicken Tikka',
    price: '$16',
    tags: 'Tender chicken | tikka sauce',
  },
  {
    title: 'Vegetable Tikka',
    price: '$15',
    tags: 'Mixed vegetables | tikka sauce',
  },
  {
    title: 'Lamb Tikka',
    price: '$18',
    tags: 'Tender lamb | tikka sauce',
  },
  {
    title: 'Paneer Tikka',
    price: '$17',
    tags: 'Paneer | tikka sauce',
  },
];

const drinksMenu = [
  {
    title: 'Mango Lassi',
    price: '$5',
    tags: 'Mango | yogurt | sugar',
  },
  {
    title: 'Sweet Lassi',
    price: '$4',
    tags: 'Yogurt | sugar',
  },
  {
    title: 'Salted Lassi',
    price: '$4',
    tags: 'Yogurt | salt',
  },
  {
    title: 'Masala Chai',
    price: '$3',
    tags: 'Tea | milk | spices',
  },
  {
    title: 'Green Tea',
    price: '$3',
    tags: 'Green tea | honey',
  },
  {
    title: 'Black Tea',
    price: '$3',
    tags: 'Black tea | milk',
  },
  {
    title: 'Coffee',
    price: '$3',
    tags: 'Coffee | milk',
  },
  {
    title: 'Hot Chocolate',
    price: '$4',
    tags: 'Chocolate | milk',
  },
  {
    title: 'Fresh Juice',
    price: '$5',
    tags: 'Fresh fruit juice',
  },
  {
    title: 'Soda',
    price: '$2',
    tags: 'Carbonated water | flavoring',
  },
];

const dessertMenu = [
  {
    title: 'Gulab Jamun',
    price: '$6',
    tags: 'Milk solids | sugar syrup',
  },
  {
    title: 'Rasmalai',
    price: '$7',
    tags: 'Cottage cheese | milk | sugar',
  },
  {
    title: 'Kheer',
    price: '$6',
    tags: 'Rice | milk | sugar',
  },
  {
    title: 'Ice Cream',
    price: '$5',
    tags: 'Vanilla | chocolate | strawberry',
  },
  {
    title: 'Cake',
    price: '$7',
    tags: 'Chocolate | vanilla | strawberry',
  },
  {
    title: 'Pastry',
    price: '$6',
    tags: 'Chocolate | vanilla | strawberry',
  },
  {
    title: 'Fruit Salad',
    price: '$5',
    tags: 'Mixed fruits',
  },
  {
    title: 'Yogurt',
    price: '$4',
    tags: 'Plain | flavored',
  },
];

const faqs = [
  {
    question: 'What are your opening hours?',
    answer: 'We are open from 11:00 AM to 10:00 PM from Monday to Saturday, and from 12:00 PM to 9:00 PM on Sundays.'
  },
  {
    question: 'Do you offer vegetarian options?',
    answer: 'Yes, we have a variety of vegetarian dishes available on our menu, including Vegetable Biryani and Paneer Curry.'
  },
  {
    question: 'Can I make a reservation?',
    answer: 'Yes, you can make a reservation by calling us at (123) 456-7890 or through our website.'
  },
  {
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer delivery services through our partners like Uber Eats and DoorDash.'
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we have ample parking space available for our customers.'
  }
];

const data = { wines, cocktails, awards, testimony, foodMenu, drinksMenu, dessertMenu, faqs };

export default data;
