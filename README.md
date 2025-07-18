# GreenCart 🛒

GreenCart is a full-stack e-commerce platform for groceries and daily essentials, built with React, Express, MongoDB, and Stripe.

## Features

- **User & Seller Authentication:** Secure login and session management for buyers and sellers.
- **Product Management:** Sellers can add, edit, and manage products with image uploads (Cloudinary).
- **Shopping Cart & Checkout:** Dynamic cart, address management, and order placement (Cash on Delivery & Stripe payments).
- **Order Tracking:** Users and sellers can view and manage orders, including payment status updates via Stripe webhooks.
- **Responsive UI:** Modern, mobile-friendly design using React and Tailwind CSS.
- **RESTful APIs:** Scalable backend for products, cart, orders, and user management.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, React Router
- **Backend:** Express.js, MongoDB, Mongoose, Stripe, Cloudinary
- **Other:** Axios, react-hot-toast, JWT, cookie-based authentication

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Stripe account (for payments)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/daniwinsss/GreenCart.git
   cd GreenCart
   ```

2. **Install dependencies:**
   ```sh
   cd server
   npm install
   cd ../client
   npm install
   ```

3. **Configure environment variables:**
   - Create `.env` files in both `server` and `client` folders.
   - Add your MongoDB URI, Stripe keys, Cloudinary credentials, and JWT secret.

4. **Run the development servers:**
   ```sh
   # In one terminal
   cd server
   npm run server

   # In another terminal
   cd client
   npm run dev
   ```

5. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:4000](http://localhost:4000)

## Folder Structure

```
client/
  src/
    components/
    context/
    pages/
    assets/
server/
  controllers/
  models/
  routes/
  configs/
```

## Screenshots
<img width="1919" height="1033" alt="image" src="https://github.com/user-attachments/assets/e27146b6-0f1f-4543-b4d1-6aa48c72f192" />
<img width="1919" height="1033" alt="image" src="https://github.com/user-attachments/assets/d491dfdc-32d6-4d4d-babe-9c07ff6de17e" />
<img width="1919" height="1034" alt="image" src="https://github.com/user-attachments/assets/0610fd93-da7b-4e3e-8f57-e42bf0ffe4fa" />
<img width="1919" height="1036" alt="image" src="https://github.com/user-attachments/assets/5e2daadc-2470-4659-880c-e65a17cd1cad" />


## License

This project is licensed under the MIT License.

---

**Made with ❤️ by Daniyal Khan**
