# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📰 Dragon News

A modern news web application built with React, Vite, Tailwind CSS, DaisyUI, and Firebase Authentication. Users can browse news articles, register, log in, and access protected content with a clean and responsive interface.

## 🚀 Live Demo

🔗 Live Site: https://your-live-site-url.com

## 🛠️ Technologies Used

- React
- React Router
- Vite
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- React Icons
- date-fns

## ✨ Features

- 🔐 User registration with Email & Password
- 🔑 User login and logout using Firebase Authentication
- 👤 Update user profile (display name & photo URL)
- 🔄 Authentication state persistence with `onAuthStateChanged`
- 🔒 Protected routes for authenticated users
- ↩️ Redirect users to their intended page after login
- 📰 Browse news by category
- 📄 View detailed news articles
- 📱 Fully responsive design

## 📦 NPM Packages

- react
- react-router
- firebase
- tailwindcss
- daisyui
- react-icons

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/ChakmaShantunu/dragon-news-code.git
```

2. Go to the project directory

```bash
cd dragon-news
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env.local` file and add your Firebase configuration

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

5. Start the development server

```bash
npm run dev
```

## 📁 Project Structure

```
src/
│── assets/
│── components/
│── layouts/
│── pages/
│── provider/
│── routes/
│── firebase/
│── App.jsx
│── main.jsx
```

## 🔐 Authentication

- Register with Email & Password
- Login with Email & Password
- Logout
- Firebase Authentication
- Persistent Login State
- Protected Routes
- Redirect After Login
- Update User Profile

## 📄 License

This project is created for learning purposes.