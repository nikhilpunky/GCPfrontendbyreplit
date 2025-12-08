# GrowithCP AI - Website Consultant Platform

## Overview

GrowithCP AI is an AI-powered website consultant designed for non-technical users. The platform helps visitors understand their website needs through an interactive chat interface and provides transparent pricing guidance. The application features a modern, futuristic design with a Bolt AI-inspired aesthetic using flowing maroon-black gradients and glassmorphism effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application consists of five main pages: Home, How It Works, Pricing, Why GrowithCP, and Contact.

**UI Component System**: Built on shadcn/ui (Radix UI primitives) with extensive customization. The design system uses the "new-york" style variant with Tailwind CSS for styling. Components follow a glassmorphism design pattern with custom CSS variables for theming.

**State Management**: React Query (@tanstack/react-query) handles server state and API interactions. Local component state is managed with React hooks.

**Animation Library**: Framer Motion provides smooth transitions and micro-interactions throughout the interface, particularly for the chat interface expansion and card animations.

**Design System**: 
- Color scheme: Maroon-black gradient backgrounds with glassmorphism panels
- Typography: Modern sans-serif (Inter, Open Sans fallback)
- Spacing: Consistent Tailwind spacing units (4, 6, 8, 12, 16)
- Custom CSS properties for theme colors, shadows, and gradients
- Dark mode as default theme

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript. The server uses ESBuild for production bundling to optimize cold start times through dependency bundling.

**API Design**: RESTful API with a single contact form endpoint (`POST /api/contact`). The architecture supports expansion with a modular routes registration system.

**Storage Layer**: Currently using in-memory storage (MemStorage class) as a temporary solution. The system is designed to support database integration through an IStorage interface pattern, making it database-agnostic.

**Session Management**: Infrastructure in place for session handling (connect-pg-simple dependency), though not actively used in current implementation.

**Request Handling**: JSON body parsing with raw body preservation for potential webhook integrations. Request logging middleware tracks API performance.

**Static File Serving**: Production builds serve the compiled React application from the dist/public directory with SPA fallback routing.

### Data Storage Solutions

**Current State**: In-memory storage with Map-based data structures for users and contact messages.

**Database Schema** (Drizzle ORM):
- PostgreSQL as the target database (configured but not connected)
- Two tables defined: `users` (authentication) and `contact_messages`
- UUID-based primary keys with automatic generation
- Timestamp tracking for contact messages

**ORM Choice**: Drizzle ORM chosen for type-safe database operations and schema migrations. Configuration points to PostgreSQL with migration files in dedicated directory.

**Future Database Integration**: System architecture supports PostgreSQL integration through environment variable (`DATABASE_URL`). Migration system ready via `drizzle-kit push` command.

### External Dependencies

**AI Chat Integration**: The main feature integrates an external chat interface via iframe (`https://giguai.growithcp.live/chat`). This is the core AI consultation service that analyzes user needs and provides recommendations.

**UI Component Library**: Radix UI provides accessible, unstyled primitives for dialogs, dropdowns, forms, and other interactive elements. These are styled according to the custom design system.

**Form Validation**: Zod schemas validate API inputs and form data. React Hook Form manages form state with zod-validation-error for user-friendly error messages.

**Development Tools**: 
- Replit-specific plugins for development environment integration
- Vite runtime error overlay for debugging
- TypeScript for type safety across the stack

**Production Dependencies**:
- Express rate limiting (express-rate-limit) ready for API protection
- CORS support configured
- Session store options (memorystore, connect-pg-simple) available
- Potential for authentication via Passport.js (dependency present)

### Key Architectural Decisions

**Monorepo Structure**: Client and server code in a single repository with shared types/schemas. The `shared` directory contains database schemas and validation logic used by both frontend and backend.

**Type Safety**: End-to-end TypeScript with strict mode enabled. Shared Zod schemas ensure runtime validation matches TypeScript types.

**Static Typing for Database**: Drizzle ORM provides full TypeScript support with inferred types from schema definitions, eliminating manual type definitions for database models.

**Build Strategy**: Separate builds for client (Vite) and server (ESBuild). Server build bundles specific dependencies to reduce file system calls and improve cold start performance in deployment environments.

**Development vs. Production**: Development uses Vite's dev server with HMR. Production serves pre-built static files through Express with SPA routing fallback.

**Scalability Preparation**: Interface-based storage layer allows seamless transition from in-memory to database storage without changing business logic. The IStorage interface defines contracts that can be implemented by different storage backends.

**Design-First Approach**: Comprehensive design guidelines document (`design_guidelines.md`) ensures consistent visual treatment across all components and pages. The liquid gradient backgrounds and glassmorphism effects are core to the brand identity.

**Component Reusability**: Custom component library (FeatureCard, PricingCard, StepCard, GlassCard) built on top of shadcn/ui primitives, providing consistent styling while remaining flexible for different content.