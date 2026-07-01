# 🏡 KuroNest

**KuroNest** is a modern Real Estate web application built with **React.js** that helps users explore premium villas, homes, apartments, and luxury properties. The application provides a clean UI, authentication, property listings, filtering, contact support, and user profile management.

---

## ✨ Features

- 🔐 Firebase Authentication
  - Google Sign In
  - Email & Password Login
  - Secure Protected Routes

- 🏠 Property Listings
  - Browse premium properties
  - Infinite scrolling
  - Property details page

- 🔍 Advanced Search & Filters
  - Search by keyword
  - Filter by location
  - Filter by property type
  - Price range filtering

- ⭐ Featured Properties

- 👤 User Profile
  - View profile information
  - Firebase user details
  - Member information

- 📧 Contact Page
  - EmailJS Integration
  - Contact advisors
  - Send inquiry directly through email

- 📱 Fully Responsive
  - Desktop
  - Tablet
  - Mobile

- 🎨 Modern Black & Gold UI Theme

---

# 🚀 Tech Stack

## Frontend

- React 19
- React Router DOM
- Framer Motion
- React Icons
- CSS3

## Backend

- JSON Server (Mock API)

## Authentication

- Firebase Authentication

## Email Service

- EmailJS

---


# 🔥 Firebase Configuration

Create a **.env** file.

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

---

# 📧 EmailJS Configuration

Add the following variables inside **.env**

```env
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/kavin997007/kuronest.git
```

Move into project

```bash
cd kuronest
```

Install dependencies

```bash
npm install
```

---

# ▶️ Start Development Server

```bash
npm run dev
```

---

# ▶️ Start JSON Server

```bash
npx json-server db.json --port 5000
```

---

# 🔑 Authentication

The application uses **Firebase Authentication**.

Supported login methods:

- Google Authentication
- Email & Password Authentication

---

# 📧 Contact Form

The Contact page uses **EmailJS**.

Submitted inquiries include:

- Customer Name
- Email
- Phone Number
- Preferred Advisor
- Subject
- Message

Emails are delivered directly to the configured EmailJS account.

---

# 📱 Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🎨 Theme

Primary Theme

- Black
- Gold
- White

Designed to give a premium luxury real estate experience.

---

# 📸 Main Pages

- Login
- Signup
- Home
- Featured Properties
- Property Details
- About Us
- Contact
- User Profile
- Edit Profile

---

# 🛠 Dependencies

```json
{
  "@emailjs/browser": "^4.4.1",
  "firebase": "^12.x.x",
  "framer-motion": "^12.x.x",
  "json-server": "^1.x.x",
  "react": "^19.x.x",
  "react-dom": "^19.x.x",
  "react-icons": "^5.x.x",
  "react-router-dom": "^7.x.x"
}
```

---

# 🌟 Future Improvements

- Property Wishlist
- Admin Dashboard
- Property Booking
- Online Payment Integration
- Dark/Light Theme Toggle
- Property Reviews
- Live Chat Support
- Image Upload using Firebase Storage
- Property Comparison
- Maps Integration

---

# 👨‍💻 Developed By

**KuroNest Team**

A premium real estate platform for discovering luxury homes, villas, and apartments.

---

## 📜 License

This project is developed for educational and portfolio purposes.