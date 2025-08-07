# 🍽️ Eato: AI Food Idea Generator

> Your personal AI-powered food companion that helps you decide what to eat with personalized suggestions based on your cravings, cuisine preferences, and dietary restrictions.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🤖 AI-Powered Food Suggestions

- Get personalized food recommendations using OpenAI GPT-4
- Input your cravings, cuisine preferences, or dietary restrictions
- Receive detailed dish descriptions with ingredients and cooking tips

### 🎯 Smart Filtering System

- Filter by cuisine type (Italian, Thai, Mexican, etc.)
- Filter by spiciness level
- Filter by dietary preferences (vegetarian, vegan, gluten-free, etc.)
- Filter by meal type (breakfast, lunch, dinner, snacks)

### 🔄 Regenerate Suggestions

- Not satisfied with the current suggestions? Generate new ones instantly
- Save your favorite dishes for future reference
- Build your personal food library

### 👤 User Authentication

- Secure authentication with BetterAuth
- Sign up with email/password or Google OAuth
- Save and manage your favorite dishes
- Personalized experience across devices

### 📱 Responsive Design

- Beautiful, modern UI built with Shadcn/ui components
- Fully responsive design that works on all devices
- Dark/light mode support
- Smooth animations and transitions

### 🌍 Multi-language Support (Coming Soon)

- Support for Thai and English languages
- Localized food suggestions and interface

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components built on Radix UI

### Backend & Database

- **[BetterAuth](https://better-auth.com/)** - Modern authentication solution
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database ORM
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL database
- **[OpenAI API](https://openai.com/)** - GPT-4 for AI food suggestions

### State Management & Tools

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Neon PostgreSQL database
- OpenAI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/eato.git
   cd eato
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@host:port/database"

   # Authentication
   BETTER_AUTH_SECRET="your-secret-key"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # OpenAI
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. **Set up the database**

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Run the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
eato/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── header/            # Header components
│   └── ui/                # Shadcn/ui components
├── db/                    # Database configuration
│   ├── index.ts           # Database connection
│   └── schema.ts          # Database schema
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
│   ├── auth.ts            # BetterAuth configuration
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm db:generate` - Generate database migrations
- `pnpm db:push` - Push schema changes to database

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by the Eato team**
