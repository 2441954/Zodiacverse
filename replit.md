# Zodiacverse - Cosmic Social Web3 App

## Overview

Zodiacverse is a fun, cosmic-themed social web application that combines zodiac/astrology content with Web3 features. Users can discover their zodiac signs, get personalized horoscopes (in both "vibe" and "roast" modes), check compatibility between signs, collect cosmic stickers, and mint NFTs. The app features a dark space theme with neon accents and glassmorphism design elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with custom cosmic theme variables
- **UI Components**: Shadcn/ui components with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth transitions and animations
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reload with Vite middleware integration

### Key Components

#### Database Schema (Drizzle ORM)
- **users**: Basic user authentication and profiles
- **zodiac_profiles**: User's birth date and calculated zodiac sign
- **horoscope_reads**: Daily horoscope content with vibe/roast modes
- **compatibility_checks**: Zodiac sign compatibility results
- **nft_collection**: NFT metadata and ownership tracking

#### Frontend Pages
- **Home**: Landing page with hero section and feature overview
- **Zodiac Finder**: Birth date input to calculate and display zodiac sign with cosmic roasts
- **Horoscope**: Daily cosmic forecasts with toggle between inspirational and roast modes
- **Compatibility**: Two-sign compatibility checker with detailed results and meme-style verdicts
- **Stickers**: Cosmic zodiac stickers rendered as SVG components with real NFT minting functionality
- **NFT Vault**: User's collected NFTs displaying actual minted stickers with zodiac artwork

#### Storage Layer
- **Production**: PostgreSQL with Drizzle ORM for schema management
- **Development**: In-memory storage class for rapid prototyping with full CRUD operations
- **Interface**: IStorage abstraction for easy storage backend swapping
- **NFT System**: Functional minting and storage of zodiac sticker NFTs with metadata

## Data Flow

1. **User Journey**: Users enter birth date → calculate zodiac sign → explore horoscopes/compatibility → collect stickers/NFTs
2. **API Flow**: Frontend → Express routes → Storage layer → Database → Response back through chain
3. **State Management**: TanStack Query manages server state caching and synchronization
4. **Real-time Updates**: Optimistic updates for better user experience

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions

### UI/UX Libraries
- **@radix-ui/***: Accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Modern icon library

### Development Tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production builds
- **drizzle-kit**: Database migration and schema management

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle pushes schema changes to PostgreSQL

### Environment Setup
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files through Express with API routes
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend  
- `npm run start`: Production server startup
- `npm run db:push`: Deploy database schema changes

The application uses a monorepo structure with shared TypeScript schemas between frontend and backend, ensuring type safety across the entire stack. The cosmic theme creates an engaging user experience while the modular architecture allows for easy feature expansion and maintenance.