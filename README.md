# Libri-Flow 📚

A modern, full-stack library management and book discovery application built with Next.js, React, and MongoDB.

## 📋 Overview

Libri-Flow is a comprehensive digital library platform that allows users to:
- Browse and discover featured books
- View detailed book information and availability
- Create accounts and manage user profiles
- Receive library updates via newsletter subscription
- Track library statistics and inventory

The application combines a modern frontend UI with robust backend authentication and database management.

## ✨ Features

- **Book Catalog**: Browse a comprehensive collection of books with search and filtering
- **User Authentication**: Secure login and signup with Better-Auth
- **User Profiles**: Personalized user profiles with preferences
- **Featured Books**: Curated selection of featured books on the homepage
- **Newsletter**: Subscribe to library updates and new book announcements
- **Library Statistics**: View library metrics and book availability stats
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS and DaisyUI
- **Smooth Animations**: Framer Motion for polished UI interactions
- **Form Management**: React Hook Form for efficient form handling

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.2.6**: React framework with App Router and server-side rendering
- **React 19.2.4**: Modern JavaScript UI library
- **React DOM 19.2.4**: React rendering engine

### Backend & Database
- **MongoDB 7.2.0**: NoSQL database for flexible data storage
- **Better-Auth 1.6.11**: Comprehensive authentication solution
- **@better-auth/mongo-adapter**: MongoDB adapter for Better-Auth

### Frontend Libraries
- **Tailwind CSS 4**: Utility-first CSS framework
- **DaisyUI 5.5.19**: Component library for Tailwind CSS
- **@HeroUI/React 3.0.4**: Modern UI component library
- **Framer Motion 12.38.0**: Animation library for React
- **React Hook Form 7.75.0**: Lightweight form validation
- **React Hot Toast 2.6.0**: Toast notifications
- **React Icons 5.6.0**: Icon library
- **Lucide React 1.14.0**: Beautiful SVG icon set
- **React Fast Marquee 1.6.5**: Marquee/scrolling text component
- **@Gravity-UI/Icons 2.18.0**: Icon collection

### Development Tools
- **ESLint 9**: Code linting and quality
- **ESLint Config Next 16.2.6**: Next.js-specific ESLint rules
- **Babel Plugin React Compiler**: React compiler plugin for optimization
- **PostCSS 4**: CSS transformation tool

## 📁 Project Structure

```
libri-flow/
├── public/
│   └── books.json           # Sample book data
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.js        # Root layout
│   │   ├── not-found.jsx    # 404 page
│   │   ├── (auth)/          # Authentication routes
│   │   │   ├── layout.jsx
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── (main)/          # Main application routes
│   │   │   ├── layout.jsx
│   │   │   ├── page.jsx     # Homepage
│   │   │   ├── books/       # Book listing and detail pages
│   │   │   │   ├── page.jsx
│   │   │   │   └── [id]/
│   │   │   └── profile/     # User profile page
│   │   ├── api/             # API routes
│   │   │   └── auth/        # Authentication API endpoints
│   │   └── providers/       # Context providers
│   │       └── providers.js
│   ├── components/
│   │   ├── FeaturedBookCard.jsx          # Featured book card component
│   │   ├── ProtectedRoute.jsx            # Route protection wrapper
│   │   └── shared/
│   │       ├── FeaturedBooks.jsx         # Featured books section
│   │       ├── Footer.jsx                # Footer component
│   │       ├── Header.jsx                # Header component
│   │       ├── LatestBooks.jsx           # Latest books section
│   │       ├── LibraryStats.jsx          # Statistics display
│   │       ├── Navbar.jsx                # Navigation bar
│   │       ├── Navlink.jsx               # Navigation link component
│   │       └── Newsletter.jsx            # Newsletter signup
│   └── lib/
│       ├── auth-client.js   # Frontend auth utilities
│       ├── auth.js          # Backend auth configuration
│       └── AuthContext.js   # React Context for auth state
├── config files
│   ├── next.config.mjs      # Next.js configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   ├── postcss.config.mjs   # PostCSS configuration
│   ├── eslint.config.mjs    # ESLint configuration
│   └── jsconfig.json        # JavaScript path configuration
├── package.json             # Project dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd libri-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory with:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_URL=http://localhost:3000
   # Add other required environment variables
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbo mode for fast refresh |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Configuration

### Tailwind CSS & DaisyUI
Customize styling in `tailwind.config.js`. DaisyUI provides pre-built component themes.

### Next.js
Configure Next.js behavior in `next.config.mjs` including image optimization and API routes.

### ESLint
Code quality rules are configured in `eslint.config.mjs` with Next.js specific standards.

## 🔐 Authentication

The application uses **Better-Auth** with MongoDB for secure user authentication:
- User registration and login
- Session management
- Protected routes for authenticated users
- User profile management

## 📊 Database

MongoDB stores:
- User accounts and profiles
- Book catalog and metadata
- User preferences and bookmarks
- Newsletter subscriptions

## 🎨 UI/UX Features

- **Component Library**: HeroUI for polished components
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Multiple icon libraries (Lucide, React Icons, Gravity-UI)
- **Toast Notifications**: React Hot Toast for user feedback
- **Forms**: React Hook Form for validated, efficient forms
- **Responsive**: Mobile-first design with Tailwind CSS

## 🚢 Deployment

Deploy on [Vercel](https://vercel.com) for optimal performance:

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

For detailed deployment instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/deploying).

## 📝 License

This project is private. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code passes ESLint checks
- Components are reusable and well-documented
- Changes follow the existing project structure









