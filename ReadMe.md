# 📚 Product Catalog Web Application (AdonisJS + Edge.js)

This is a full-stack web application for managing and displaying a product catalog.  
The backend is built using **AdonisJS (v6)** with **Lucid ORM** and **SQLite**, while the frontend uses **Edge.js** templating engine.

Users can browse products, search and filter by category, and (if authenticated) create, update, or delete products.

---

## 📖 Features

- User Registration, Login, and Logout with session-based authentication
- Role-based access control (guests can browse; logged-in users can manage products)
- CRUD operations for products with secure image uploads
- Product category management
- Pagination for product listings
- Server-side search and category filter functionality
- Session flash messages for feedback (success/error)
- Server-rendered views using Edge.js templates
- Secure input validation for all forms
- Clean, responsive layout using custom CSS
- SQLite database for local development
- Session data stored via cookie driver
- Version control with Git and GitHub

---

## 📦 Environment Setup

### 🔧 Prerequisites

- **Node.js v20+**
- **npm** (comes with Node)
- **Git**
- **SQLite3** (optional, for inspecting database)

---

## 📦 Project Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/MohammadAbaan/adonis-product-catalog.git
cd adonis-product-catalog


Project Structure
├── app/
│   ├── Controllers/
│   │   └── Http/
│   │       ├── AuthController.ts
│   │       └── ProductsController.ts
│   ├── Models/
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   └── Category.ts
│
├── database/
│   └── migrations/
│
├── public/
│   └── uploads/
│
├── resources/
│   └── views/
│       ├── pages/
│       ├── auth/
│       └── layouts/
│
├── .env
├── .adonisrc.ts
└── package.json




