# Aditya Sirsalkar - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Fully Responsive**: Optimized for all device sizes
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized with Next.js 14 and modern web practices
- **Type Safety**: Built with TypeScript for better development experience
- **Form Validation**: Contact form with Zod validation and proper error handling
- **Animations**: Smooth animations with Framer Motion
- **SEO Optimized**: Meta tags and Open Graph data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## 📋 Sections

1. **Hero**: Introduction with key stats and contact information
2. **About**: Personal background and achievements
3. **Experience**: Professional projects and work experience
4. **Education**: Academic background and achievements
5. **Skills**: Technical skills organized by category with coding profiles
6. **Contact**: Contact form and social links

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aditya-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   ├── theme-toggle.tsx  # Dark/light mode toggle
│   └── footer.tsx        # Footer component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/              # Static assets
```

## 🎨 Design System

The portfolio uses a consistent design system with:

- **Colors**: CSS custom properties for theming
- **Typography**: Responsive text scales
- **Spacing**: Consistent spacing using Tailwind
- **Components**: Reusable shadcn/ui components
- **Animations**: Subtle motion design with Framer Motion

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Reduced motion respect
- High contrast support

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions
- Optimized for all screen sizes

## �� Performance Optimizations

- Next.js automatic code splitting
- Image optimization
- Tree shaking
- Minimal bundle size
- Fast loading times
- SEO optimization

## 🔧 Customization

To customize the portfolio for your own use:

1. Update personal information in the section components
2. Modify the color scheme in `globals.css`
3. Replace project data in the experience section
4. Update social links and contact information
5. Customize the metadata in `layout.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About

Built by Aditya Sirsalkar - Junior Software Developer passionate about creating responsive UIs and practical web applications.

- **Email**: adityasirsalkar33@gmail.com
- **Phone**: +91 8380918769
- **Location**: Prayagraj, Uttar Pradesh, India

---

*This portfolio showcases modern web development practices and serves as both a personal website and a demonstration of technical skills.*
