# 🛠️ Rectify App

[![CI/CD Pipeline](https://github.com/KiranGadhavi/rectify-app/actions/workflows/ci.yml/badge.svg)](https://github.com/KiranGadhavi/rectify-app/actions/workflows/ci.yml)

Welcome to Rectify App, a modern web application built with Next.js and React! 🚀

## 📚 Table of Contents

- [🌐 Live Website](#-live-website)
- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [🏗️ Project Structure](#️-project-structure)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)

## 🌐 Live Website

Visit our live website at [https://kreactify.vercel.app/](https://kreactify.vercel.app/)

## ✨ Features

- 📱 Responsive design using Tailwind CSS
- 🌍 Interactive reviews component for different countries
- 🔍 How It Works section with image and content display
- 🔄 Continuous Integration and Deployment with GitHub Actions
- 📅 Booking system for design consultations

## 🚀 Getting Started

To get started with the Rectify App, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/KiranGadhavi/rectify-app.git
   ```

2. Install dependencies:

   ```
   cd rectify-app
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app. 🎉

## 🏗️ Project Structure

The project structure is organized as follows:

```
rectify-app/
├── src/
│   ├── app/
│   │   ├── page.jsx
│   │   └── layout.jsx
│   ├── components/
│   │   ├── Header/
│   │   │   └── HeaderComponent.jsx
│   │   ├── Footer/
│   │   │   └── FooterComponent.jsx
│   │   ├── Main/
│   │   │   ├── HowItWorks/
│   │   │   │   └── HowItWorksComponent.jsx
│   │   │   └── Reviews/
│   │   │       └── ReviewsComponent.jsx
│   │   ├── Founder/
│   │   │   ├── FounderComponent.jsx
│   │   │   └── FounderFlash/
│   │   │       └── FounderFlashComponent.jsx
│   │   └── Booking/
│   │       └── BookingComponent.jsx
│   └── ...
├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   └── ...
│   └── ...
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── ...
├── .next/
│   ├── cache/ # Next.js cache
│   └── ...
├── node_modules/ # Dependencies
├── package.json # Project configuration
├── README.md # This file
└── ...
```
