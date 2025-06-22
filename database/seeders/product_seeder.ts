import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await db.from('products').delete()
    await db.rawQuery(`DELETE FROM sqlite_sequence WHERE name='products'`)

    await Product.createMany([
      // Electronics
      {
        name: 'Laptop',
        description: 'High performance laptop featuring the latest Intel i7 processor, 16GB RAM, and a 512GB SSD for lightning-fast speeds. Ideal for gaming, programming, and professional work with a stunning 15.6-inch Full HD display.',
        price: 1500,
        imagePath: 'public/laptop.jpg',
        categoryId: 1,
      },
      {
        name: 'Acer Laptop',
        description: 'Affordable and reliable Acer laptop equipped with Intel Core i5, 8GB RAM, and 256GB SSD storage. Perfect for everyday tasks like browsing, office work, and streaming media.',
        price: 1200,
        imagePath: 'public/Acer_laptop.png',
        categoryId: 1,
      },
      {
        name: 'Gaming Keyboard',
        description: 'RGB mechanical gaming keyboard with customizable lighting, anti-ghosting keys, and ergonomic design for comfortable long gaming sessions.',
        price: 180,
        imagePath: 'public/GamingKeyboard.png',
        categoryId: 1,
      },
      {
        name: 'Gaming PC',
        description: 'High-end gaming rig powered by the latest NVIDIA RTX graphics card, 32GB RAM, and a 1TB SSD. Optimized for 4K gaming and VR experiences with advanced cooling system.',
        price: 3500,
        imagePath: 'public/GamingPC.jpg',
        categoryId: 1,
      },
      {
        name: 'Earphones',
        description: 'Noise-isolating earphones with superior sound quality, comfortable fit, and in-line microphone for calls and voice commands.',
        price: 50,
        imagePath: 'public/earphones.png',
        categoryId: 1,
      },
      {
        name: 'iPhone',
        description: 'Latest iPhone model with cutting-edge A14 Bionic chip, advanced dual-camera system, and stunning OLED display. Supports 5G connectivity and all-day battery life.',
        price: 1899,
        imagePath: 'public/Iphone.png',
        categoryId: 1,
      },
      {
        name: 'UBL Speaker',
        description: 'Portable Bluetooth speaker offering crisp sound, deep bass, and up to 12 hours of playback. Waterproof and perfect for outdoor use.',
        price: 300,
        imagePath: 'public/UBL_speaker.png',
        categoryId: 1,
      },
      {
        name: 'Smart Watch',
        description: 'Wearable fitness tracker with heart rate monitoring, sleep tracking, GPS, and customizable watch faces. Syncs seamlessly with your smartphone.',
        price: 499,
        imagePath: 'public/smart_watch.jpg',
        categoryId: 1,
      },
      {
        name: 'Razor Mouse',
        description: 'High-precision gaming mouse with adjustable DPI, programmable buttons, and ergonomic design for competitive gaming.',
        price: 120,
        imagePath: 'public/razor_mouse.png',
        categoryId: 1,
      },
      {
        name: 'Universal Converter',
        description: 'Compact power plug converter compatible with sockets in over 150 countries. Ideal for travelers to keep all devices charged safely.',
        price: 45,
        imagePath: 'public/UniversalConverter.jpg',
        categoryId: 1,
      },
      {
        name: 'iPhone Charger',
        description: 'Official USB-C iPhone charger providing fast and efficient charging with durable cable and compact design.',
        price: 65,
        imagePath: 'public/IphoneCharger.jpg',
        categoryId: 1,
      },
      {
        name: 'Samsung S21',
        description: 'Flagship Samsung smartphone with dynamic AMOLED 2X display, pro-grade camera system, and powerful Exynos processor for smooth performance.',
        price: 1699,
        imagePath: 'public/SamsungsS21.png',
        categoryId: 1,
      },
      {
        name: 'Samsung Charger',
        description: 'Original Samsung fast charger compatible with multiple Samsung devices. Compact and reliable.',
        price: 59,
        imagePath: 'public/SamsungCharger.png',
        categoryId: 1,
      },
      {
        name: 'Pro Headphones',
        description: 'Studio-quality over-ear headphones delivering crystal clear audio, noise cancellation, and comfortable fit for long listening sessions.',
        price: 299,
        imagePath: 'public/pro_headphones.png',
        categoryId: 1,
      },

      // Clothing
      {
        name: 'T-Shirt',
        description: 'Soft, breathable cotton T-shirt available in multiple colors. Perfect for casual everyday wear.',
        price: 25,
        imagePath: 'public/tshirt.png',
        categoryId: 2,
      },
      {
        name: 'Blue Jacket',
        description: 'Water-resistant winter jacket with insulated lining, adjustable hood, and multiple pockets to keep you warm and stylish.',
        price: 110,
        imagePath: 'public/BlueJacket.png',
        categoryId: 2,
      },
      {
        name: 'Jeans',
        description: 'Classic denim jeans made from durable cotton fabric, designed for comfort and a timeless look.',
        price: 70,
        imagePath: 'public/Jeans.png',
        categoryId: 2,
      },
      {
        name: 'Orange Dress',
        description: 'Elegant party dress in vibrant orange with flowy fabric, flattering silhouette, and adjustable straps.',
        price: 140,
        imagePath: 'public/OrangeDress.png',
        categoryId: 2,
      },
      {
        name: 'Purple Hoodie',
        description: 'Unisex hoodie made from soft fleece, featuring a front pocket and adjustable drawstrings for extra comfort.',
        price: 90,
        imagePath: 'public/PurpleHoodie.png',
        categoryId: 2,
      },
      {
        name: 'Red Blouse',
        description: 'Formal blouse with delicate detailing, perfect for office wear or special occasions.',
        price: 60,
        imagePath: 'public/RedBlouse.jpg',
        categoryId: 2,
      },
      {
        name: 'Black Leggings',
        description: 'Stretchy cotton leggings designed for comfort and flexibility, suitable for workouts or casual wear.',
        price: 40,
        imagePath: 'public/BlackLeggings.jpg',
        categoryId: 2,
      },
      {
        name: 'Sweater',
        description: 'Warm woolen sweater with ribbed cuffs and hem, ideal for cold weather layering.',
        price: 80,
        imagePath: 'public/Sweater.png',
        categoryId: 2,
      },
      {
        name: 'Socks',
        description: 'Pack of ankle socks made with breathable fabric for everyday comfort.',
        price: 20,
        imagePath: 'public/Socks.png',
        categoryId: 2,
      },
      {
        name: 'Office Shirt',
        description: 'Formal office shirt with crisp collar and button-down front, designed for a professional look.',
        price: 55,
        imagePath: 'public/officeshirt.png',
        categoryId: 2,
      },
      {
        name: 'Red Dress',
        description: 'Elegant evening dress featuring a classic cut and luxurious fabric that drapes beautifully.',
        price: 150,
        imagePath: 'public/RedDress.jpg',
        categoryId: 2,
      },
      {
        name: 'Purple Dress',
        description: 'Stylish party dress in deep purple with flattering fit and chic design.',
        price: 140,
        imagePath: 'public/PurpleDress.png',
        categoryId: 2,
      },

      // Books
      {
        name: 'Novel',
        description: 'Engaging fiction book that captivates readers with a compelling storyline and memorable characters.',
        price: 20,
        imagePath: 'public/novel.jpg',
        categoryId: 3,
      },
      {
        name: 'The Hobbit',
        description: 'Fantasy classic by J.R.R. Tolkien following Bilbo Baggins’ epic adventure across Middle-earth.',
        price: 35,
        imagePath: 'public/Hobbit_novel.png',
        categoryId: 3,
      },
      {
        name: 'Sherlock Holmes',
        description: 'Collection of detective stories featuring the legendary Sherlock Holmes and Dr. Watson solving intriguing mysteries.',
        price: 60,
        imagePath: 'public/sherlockholmes_novel.png',
        categoryId: 3,
      },
      {
        name: 'Little Girl Lost',
        description: 'Thrilling crime novel full of suspense and unexpected twists, keeping readers on the edge of their seats.',
        price: 30,
        imagePath: 'public/Littlegirllost_novel.png',
        categoryId: 3,
      },
      {
        name: 'Mockingbird',
        description: 'Modern classic exploring themes of racial injustice and moral growth through the eyes of young Scout Finch.',
        price: 28,
        imagePath: 'public/Mockingbird_book.jpeg',
        categoryId: 3,
      },
      {
        name: 'Book Thief',
        description: 'Heartwarming WWII drama about a young girl who finds solace in stealing books and sharing stories.',
        price: 32,
        imagePath: 'public/bookthief_novel.png',
        categoryId: 3,
      },
      {
        name: 'Dark Crossing',
        description: 'Mystery novel filled with intrigue, secrets, and dark twists that keep readers guessing until the last page.',
        price: 29,
        imagePath: 'public/Darkcrossing_novel.png',
        categoryId: 3,
      },
      {
        name: 'ATTWN',
        description: 'Classic Agatha Christie thriller “And Then There Were None” — a suspenseful tale of ten strangers trapped on an island.',
        price: 26,
        imagePath: 'public/ATTWN_novel.png',
        categoryId: 3,
      },
      {
        name: 'SKF',
        description: 'Gripping suspense novel that explores the darker side of human nature through compelling characters and plot twists.',
        price: 33,
        imagePath: 'public/SKF_novel.png',
        categoryId: 3,
      },
      {
        name: 'Faraway Tree',
        description: 'Charming collection of children’s stories featuring magical adventures in the enchanted Faraway Tree.',
        price: 45,
        imagePath: 'public/farawaytree_collection_books.png',
        categoryId: 3,
      },
      {
        name: 'Macbeths',
        description: 'Powerful Shakespearean drama exploring themes of ambition, power, and guilt in the tragic tale of Macbeth.',
        price: 22,
        imagePath: 'public/macbeths_book.png',
        categoryId: 3,
      },
    ])
  }
}
