import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await db.from('products').delete()
    await db.rawQuery(`DELETE FROM sqlite_sequence WHERE name='products'`)

    await Product.createMany([
      // Electronics
      { name: 'Laptop', description: 'High performance laptop.', price: 1500, imagePath: 'public/laptop.jpg', categoryId: 1 },
      { name: 'Acer Laptop', description: 'Affordable and reliable Acer laptop.', price: 1200, imagePath: 'public/Acer_laptop.png', categoryId: 1 },
      { name: 'Gaming Keyboard', description: 'RGB mechanical gaming keyboard.', price: 180, imagePath: 'public/GamingKeyboard.png', categoryId: 1 },
      { name: 'Gaming PC', description: 'High-end gaming rig.', price: 3500, imagePath: 'public/GamingPC.jpg', categoryId: 1 },
      { name: 'Earphones', description: 'Noise-isolating earphones.', price: 50, imagePath: 'public/earphones.png', categoryId: 1 },
      { name: 'iPhone', description: 'Latest iPhone model.', price: 1899, imagePath: 'public/Iphone.png', categoryId: 1 },
      { name: 'UBL Speaker', description: 'Portable Bluetooth speaker.', price: 300, imagePath: 'public/UBL_speaker.png', categoryId: 1 },
      { name: 'Smart Watch', description: 'Wearable fitness tracker.', price: 499, imagePath: 'public/smart_watch.jpg', categoryId: 1 },
      { name: 'Razor Mouse', description: 'High-precision gaming mouse.', price: 120, imagePath: 'public/razor_mouse.png', categoryId: 1 },
      { name: 'Universal Converter', description: 'Power plug converter.', price: 45, imagePath: 'public/UniversalConverter.jpg', categoryId: 1 },
      { name: 'iPhone Charger', description: 'USB-C iPhone charger.', price: 65, imagePath: 'public/IphoneCharger.jpg', categoryId: 1 },
      { name: 'Samsung S21', description: 'Flagship Samsung smartphone.', price: 1699, imagePath: 'public/SamsungsS21.png', categoryId: 1 },
      { name: 'Samsung Charger', description: 'Original Samsung charger.', price: 59, imagePath: 'public/SamsungCharger.png', categoryId: 1 },
      { name: 'Pro Headphones', description: 'Studio-quality headphones.', price: 299, imagePath: 'public/pro_headphones.png', categoryId: 1 },

      // Clothing
      { name: 'T-Shirt', description: 'Cotton T-shirt.', price: 25, imagePath: 'public/tshirt.png', categoryId: 2 },
      { name: 'Blue Jacket', description: 'Winter jacket.', price: 110, imagePath: 'public/BlueJacket.png', categoryId: 2 },
      { name: 'Jeans', description: 'Denim jeans.', price: 70, imagePath: 'public/Jeans.png', categoryId: 2 },
      { name: 'Orange Dress', description: 'Party dress.', price: 140, imagePath: 'public/OrangeDress.png', categoryId: 2 },
      { name: 'Purple Hoodie', description: 'Unisex hoodie.', price: 90, imagePath: 'public/PurpleHoodie.png', categoryId: 2 },
      { name: 'Red Blouse', description: 'Formal blouse.', price: 60, imagePath: 'public/RedBlouse.jpg', categoryId: 2 },
      { name: 'Black Leggings', description: 'Cotton leggings.', price: 40, imagePath: 'public/BlackLeggings.jpg', categoryId: 2 },
      { name: 'Sweater', description: 'Woolen sweater.', price: 80, imagePath: 'public/Sweater.png', categoryId: 2 },
      { name: 'Socks', description: 'Ankle socks pack.', price: 20, imagePath: 'public/Socks.png', categoryId: 2 },
      { name: 'Office Shirt', description: 'Formal office wear.', price: 55, imagePath: 'public/officeshirt.png', categoryId: 2 },
      { name: 'Red Dress', description: 'Elegant evening dress.', price: 150, imagePath: 'public/RedDress.jpg', categoryId: 2 },
      { name: 'Purple Dress', description: 'Stylish party dress.', price: 140, imagePath: 'public/PurpleDress.png', categoryId: 2 },

      // Books
      { name: 'Novel', description: 'Fiction book.', price: 20, imagePath: 'public/novel.jpg', categoryId: 3 },
      { name: 'The Hobbit', description: 'Fantasy classic.', price: 35, imagePath: 'public/Hobbit_novel.png', categoryId: 3 },
      { name: 'Sherlock Holmes', description: 'Detective stories.', price: 60, imagePath: 'public/sherlockholmes_novel.png', categoryId: 3 },
      { name: 'Little Girl Lost', description: 'Crime thriller.', price: 30, imagePath: 'public/Littlegirllost_novel.png', categoryId: 3 },
      { name: 'Mockingbird', description: 'Modern classic.', price: 28, imagePath: 'public/Mockingbird_book.jpeg', categoryId: 3 },
      { name: 'Book Thief', description: 'WWII drama.', price: 32, imagePath: 'public/bookthief_novel.png', categoryId: 3 },
      { name: 'Dark Crossing', description: 'Mystery novel.', price: 29, imagePath: 'public/Darkcrossing_novel.png', categoryId: 3 },
      { name: 'ATTWN', description: 'And Then There Were None.', price: 26, imagePath: 'public/ATTWN_novel.png', categoryId: 3 },
      { name: 'SKF', description: 'Suspense novel.', price: 33, imagePath: 'public/SKF_novel.png', categoryId: 3 },
      { name: 'Faraway Tree', description: 'Children’s collection.', price: 45, imagePath: 'public/farawaytree_collection_books.png', categoryId: 3 },
      { name: 'Macbeths', description: 'Shakespeare drama.', price: 22, imagePath: 'public/macbeths_book.png', categoryId: 3 },
    ])
  }
}
