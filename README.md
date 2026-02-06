# Todo App (Phase II) 

A professional-grade, modern Todo application built with **Next.js 16+, TypeScript, and Tailwind CSS**. This frontend delivers a polished, premium user experience inspired by apps like **Todoist**, **Notion**, and **Linear**.

---

## Features

- **Authentication**: Secure sign-up and login using JWT-based authentication  
- **Todo Management**: Full CRUD functionality (Create, Read, Update, Delete, Mark Complete)  
- **Responsive Design**: Mobile-first layouts with tablet and desktop support  
- **Premium UI**: Glassmorphism effects, subtle shadows, micro-interactions, and smooth animations  
- **Optimistic Updates**: Instant UI feedback for seamless interactions  
- **Loading States**: Proper skeleton screens and empty states for improved UX  
- **Accessibility**: WCAG 2.1 AA compliant

---

## Design Philosophy

Our focus is on delivering a **premium user experience**:

- **Flawless Typography**: Using Inter font with consistent spacing and rhythm  
- **Subtle Depth**: Glassmorphism and soft shadows for hierarchy and visual clarity  
- **Harmonized Colors**: Carefully chosen palette for a professional look  
- **Delightful Micro-interactions**: Animations that enhance usability with Framer Motion  
- **Responsive Excellence**: Pixel-perfect design on all device sizes

---

## Getting Started

### Prerequisites

- Node.js 18 or higher  
- npm or yarn  

### Installation

1. Clone the repository  
2. Navigate to the frontend folder
3. cd frontend
4. npm install

 ---
 
### Running the Development Server
- npm run dev
- The app will be available at http://localhost:3000

  ---

### Environment Variables

- Create a .env.local file in the frontend directory:

- NEXT_PUBLIC_API_URL=http://localhost:8000/api
- NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:8000
- BETTER_AUTH_SECRET=your-secret-key

---

### Why This UI Feels Premium

- **Visual Hierarchy**: Clear typography and spacing create intuitive layouts

- **Micro-interactions**: Every button, toggle, and modal feels interactive

- **Glassmorphism Effects**: Modern frosted glass elements add depth and sophistication

- **Responsive Design**: Seamless experience across all devices

- **Loading States**: Thoughtful skeleton screens prevent janky transitions

- **Accessibility**: Focus rings, ARIA labels, and semantic HTML ensure inclusivity

---

### Tech Stack

- **Framework**: Next.js 16+ (App Router)

- **Language**: TypeScript

- **Styling**: Tailwind CSS

- **UI Components**: Custom, accessible components

- **Animations**: Framer Motion

- **Forms & Validation**: React Hook Form + Zod

- **Data Fetching**: SWR

- **Authentication**: Better Auth with JWT

---

### Architecture

- **UI Components**: Reusable components in components/ui/

- **Feature Components**: Auth and Todo features in respective directories

- **Utilities**: Shared logic and hooks in lib/ and hooks/

- **Types & Validation**: Zod schemas for strong typing

- **API Layer**: Centralized API client with JWT support

---

### Available Scripts

- **npm run dev** — Start development server

- **npm run build** — Build production bundle

- **npm run start** — Start production server

- **npm run lint** — Run linter

---

### Contributing

This project follows a spec-first development approach. All features are fully specified before implementation. Contributions are welcome as long as they follow the project’s architecture and coding standards.

**Enjoy building and using this premium Todo app**🚀⚡😊!


`
