# 🛒 KafKart - E-Commerce Platform

**Project Status:** 🚧 In Development  
**Framework:** Next.js 16.0.0  
**Last Updated:** October 23, 2025

---

## 📋 What is KafKart?

KafKart is an e-commerce platform project that will be built with modern web technologies. This is the initial setup and foundation phase.

---

## 🛠 Current Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.0 | React framework with App Router |
| React | 19.0.0 | UI library |
| Tailwind CSS | 4.x | Styling framework |
| ShadCN UI | 3.4.2 | UI component library |

---

## 📁 Current Project Structure

```
kafkart/
├── .next/                    # Next.js build output
├── node_modules/             # Dependencies
├── public/                   # Static assets
│   └── favicon.ico          # Site favicon
├── src/
│   ├── app/
│   │   ├── globals.css      # Global Tailwind styles
│   │   ├── layout.js        # Root layout
│   │   └── page.js          # Homepage
│   ├── components/
│   │   └── ui/              # ShadCN UI components (54 files)
│   ├── hooks/
│   │   └── use-mobile.js    # Mobile detection hook
│   └── lib/
│       └── utils.js         # Utility functions (cn helper)
├── .gitignore
├── components.json          # ShadCN configuration
├── jsconfig.json           # JavaScript config
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # This file
└── tailwind.config.js      # Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/moarifur/kafkart.git
cd kafkart

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ What's Been Done

### 1. Project Initialization
- ✅ Next.js 16 with App Router
- ✅ TypeScript: No (using JavaScript)
- ✅ Tailwind CSS configured
- ✅ Turbopack enabled for faster builds
- ✅ Clean boilerplate code

### 2. ShadCN UI Setup
- ✅ ShadCN UI initialized with Neutral color theme
- ✅ All 54 components installed
- ✅ Components configured in `src/components/ui/`

**Available Components:** Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Empty, Field, Form, Hover Card, Input, Input Group, Input OTP, Item, KBD, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner (Toast), Spinner, Switch, Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip

### 3. Configuration Files
- ✅ `components.json` - ShadCN configuration
- ✅ `tailwind.config.js` - Tailwind CSS setup
- ✅ `jsconfig.json` - Path aliases configured (`@/*`)

### 4. Utility Setup
- ✅ `src/lib/utils.js` - CN utility for className merging
- ✅ `src/hooks/use-mobile.js` - Mobile detection hook

---

## 🎯 Planned Features

This is a roadmap of features that will be implemented:

### Frontend (Next.js)
- [ ] Homepage with hero section
- [ ] Product listing page
- [ ] Product detail page
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] User authentication
- [ ] Admin dashboard

### Backend (To be implemented)
- [ ] Microservices architecture with Turborepo
- [ ] Product Service (Express.js + PostgreSQL)
- [ ] Order Service (Fastify + MongoDB)
- [ ] Payment Service (Hono.js + Stripe)
- [ ] Auth Service (Express.js + PostgreSQL)
- [ ] Kafka integration for event-driven architecture
- [ ] Email Service (Nodemailer)

---

## 📦 ShadCN UI Component Usage

### Basic Example

```jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to KafKart</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a sample component using ShadCN UI</p>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

### Import Path
All ShadCN components are imported from `@/components/ui/[component-name]`

---

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linting (if configured)
```

---

## 🎨 Styling

This project uses **Tailwind CSS 4** with the utility-first approach. ShadCN UI components are styled with Tailwind and can be customized through:

- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles and CSS variables

---

## 📝 Configuration

### ShadCN UI Config (`components.json`)

```json
{
  "style": "new-york",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Import Aliases (`jsconfig.json`)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🚧 Development Status

**Current Phase:** Foundation & Setup  
**Next Steps:**
1. Design and implement homepage
2. Create product listing components
3. Build shopping cart functionality
4. Set up backend microservices structure

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

---

## 🤝 Contributing

This is a learning/development project. Contributions and suggestions are welcome!

---

## 📄 License

This project is for educational/portfolio purposes.

---

## 🔗 Links

- **Repository:** [https://github.com/moarifur/kafkart.git](https://github.com/moarifur/kafkart.git)
- **Issues:** Open an issue for bugs or feature requests

---

**Note:** This project is in active development. Features and documentation will be updated as development progresses.