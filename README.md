# Interactive Product Landing Page

A modern, responsive product landing page built as a frontend assignment using **React**, **Tailwind CSS v4**, **GSAP**, **Three.js**, **Redux Toolkit**, and **Axios**.

## Live Demo

**View the deployed project here:**
🔗 https://jaadex-task.netlify.app/

---

## Overview

This project demonstrates the implementation of a premium landing page with a focus on:

* Clean component architecture
* Responsive design
* Reusable UI components
* Smooth GSAP animations
* Interactive Three.js integration
* State management using Redux Toolkit
* API integration using Axios

The overall design follows an **Industrial Minimalism** approach with subtle animations and a performance-first implementation.

---

## Tech Stack

* React (Vite)
* Tailwind CSS v4
* GSAP
* ScrollTrigger
* Three.js
* @react-three/fiber
* @react-three/drei
* Redux Toolkit
* Axios

---

## Features

* Responsive navigation
* Animated Hero section
* Interactive 3D metallic sphere
* GSAP-powered scroll animations
* About section
* Features section
* Experience showcase
* Testimonials marquee
* Contact form with Axios integration
* Minimal industrial footer
* Reusable button component
* Mobile-friendly layout

---

## Project Structure

```text
src
│
├── assets
│   └── models
│       └── sphere.glb
│
├── animations
│   ├── experienceAnimation.js
│   ├── featuresAnimation.js
│   ├── heroAnimation.js
│   ├── marquee.js
│   └── studioAnimation.js
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Features.jsx
│   ├── Experience.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Scene.jsx
│   ├── SphereModel.jsx
│   ├── Button.jsx
│   ├── Marquee.jsx
│   └── TestimonialCard.jsx
│
├── redux
│   ├── appSlice.js
│   └── store.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Folder Guide

### assets/

Contains static project assets such as the 3D model used in the Hero section.

---

### components/

Contains all reusable UI components.

Examples include:

* Navigation
* Hero
* About
* Features
* Experience
* Testimonials
* Contact Form
* Footer
* Three.js Scene
* Reusable Button

---

### animations/

Each section has its own animation file.

This keeps the code modular and makes future maintenance easier.

---

### redux/

Contains Redux Toolkit store configuration and application state management.

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd <project-folder>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Contact Form

The contact form demonstrates API integration using Axios.

For demonstration purposes it sends a dummy POST request to:

```
https://jsonplaceholder.typicode.com/posts
```

---

## Design Philosophy

* Industrial Minimalism
* Responsive-first development
* Reusable components
* Clean architecture
* Performance-oriented animations
* Subtle interactions
* Maintainable codebase

---

## Learning Objectives

This project was created to demonstrate practical experience with:

* Component-based architecture
* Responsive layouts
* GSAP animations
* Three.js integration
* Redux Toolkit
* Axios API requests
* Modern frontend development practices

---

## License

This project is intended for educational and demonstration purposes.
