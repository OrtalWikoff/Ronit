const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Women' },
    { name: 'Men' },
    { name: 'Unisex' },
    { name: 'Kids' },
    { name: 'Sale' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Jimmy Choo',
      description:
        'Blossom Eau de Parfum Spray, 1.3 oz.',
      image: "Jimmy.webp",
      category: categories[0]._id,
      price: 30.00,
      quantity: 5
    },
    {
      name: 'Versace',
      description:
        "Men's Eros Flame Eau de Parfum Jumbo Spray, 6.7-oz.",
      image: "Versace.webp",
      category: categories[1]._id,
      price: 140.00,
      quantity: 10
    },
    {
      name: 'Issey Miyake',
      description:
        "L'Eau d'Issey Eau de Toilette, 3.4 oz",
      image: "Miyake.webp",
      category: categories[0]._id,
      price: 110.00,
      quantity: 10
    },
    {
      name: 'Tom Ford',
      description:
        'Noir Extreme Parfum, 3.4 oz.',
      image: 'TomFord.webp',
      category: categories[1]._id,
      price: 230.00,
      quantity: 10
    },
    {
      name: 'Dolce Gabbana',
      category: categories[1]._id,
      description:
        "DOLCE&GABBANA Men's Light Blue Pour Homme Eau de Toilette Spray, 6.7 oz.",
      image:'DolceGabbana.webp',
      price: 125.00,
      quantity: 20
    },
    {
      name: 'Hugo Boss',
      category: categories[1]._id,
      description:
        "Men's HUGO Just Different Eau de Toilette Spray, 1.3-oz.",
      image: 'hugo.webp',
      price: 25.00,
      quantity: 50
    },
    {
      name: 'Calvin Klein',
      category: categories[2]._id,
      description:
        'ck one Eau de Toilette Spray, 6.7 oz.',
      image: 'ck.webp',
      price: 83.00,
      quantity: 50
    },
    {
      name: 'Clean Fragrance',
      category: categories[2]._id,
      description:
        'Avant Garden Galbanum & Rain Eau de Parfum, 3.4-oz.',
      image: 'clean.webp',
      price: 87.50,
      quantity: 30
    },
    {
      name: 'Hermes',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'Hermes.webp',
      price: 140.00,
      quantity: 30
    },
    {
      name: 'Disney',
      category: categories[3]._id,
      description:
        'Minnie Mouse EDT Spray, 3.4 oz',
      image: 'disney.webp',
      price: 21.00,
      quantity: 29
    },
    {
      name: 'Disney',
      category: categories[3]._id,
      description: 'Frozen Elsa Castle EDT Spray, 3.4 oz',
      image: 'frozen.webp',
      price: 21.00,
      quantity: 100
    },
    {
      name: 'Tous',
      category: categories[3]._id,
      description:
        "Gem's Party Eau De Toilette, 50 ml",
      image: 'Tous.webp',
      price: 58.00,
      quantity: 100
    },
    {
      name: 'Mugler',
      category: categories[4]._id,
      description:
        'ANGEL Nova Eau de Toilette, 1.7 oz.',
      image: 'Mugler.webp',
      price: 42.50,
      quantity: 100
    },
    {
      name: 'Guerlain',
      category: categories[4]._id,
      description:
        'Mon Guerlain Eau de Parfum Spray, 1 oz',
      image: 'Guerlain.webp',
      price: 40.00,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
