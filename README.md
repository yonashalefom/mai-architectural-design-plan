# 🧽 Magnoli Monorepo

> **⚠️ Important Note**: This repository contains a **non-working architectural design and folder structure** for an enterprise-grade dry-cleaning POS system. It serves as a blueprint and reference for building the actual application at enterprise scale or better.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11-red.svg)](https://nestjs.com/)

## 📋 Overview

This is a **reference architecture** for building a scalable dry-cleaning POS (Point of Sale) system using modern technologies. The structure demonstrates enterprise-grade patterns including:

- **Monorepo Architecture** with Turborepo
- **Feature-based modular design**
- **Separation of concerns** across apps and packages
- **Production-ready folder organization**
- **Scalable patterns** for growing teams

> The real application will be built following these architectural principles at the same scale or with even more advanced patterns.

---

## 🏗️ Monorepo Architecture

### What is a Monorepo?

A monorepo is a single repository containing multiple related projects. This structure enables:

- ✅ **Code sharing** between apps
- ✅ **Consistent tooling** across projects
- ✅ **Atomic commits** across apps
- ✅ **Type safety** across boundaries
- ✅ **Single source of truth**

### Why Turborepo?

Turborepo is a high-performance build system for JavaScript and TypeScript monorepos that:

- Speeds up builds with intelligent caching
- Executes tasks in parallel
- Enables incremental builds
- Supports incremental runs across packages

---

## 🗂️ Complete Folder Structure

\`\`\`
magnoli/
│
├── 📁 apps/                           # Application Packages
│   │
│   ├── 📁 web/                        # Customer-facing app (port 3000)
│   │   ├── src/
│   │   │   ├── app/                   # Next.js App Router
│   │   │   ├── components/            # React components
│   │   │   ├── features/              # Feature modules
│   │   │   ├── libs/                  # Third-party configs
│   │   │   ├── locales/               # i18n translations
│   │   │   ├── styles/                # Global styles
│   │   │   ├── templates/             # Email/page templates
│   │   │   ├── types/                 # TypeScript types
│   │   │   ├── utils/                 # Utility functions
│   │   │   └── validations/           # Zod schemas
│   │   ├── tests/
│   │   │   ├── e2e/                   # Playwright tests
│   │   │   └── integration/           # Integration tests
│   │   └── ...
│   │
│   ├── 📁 admin/                      # Admin dashboard (port 3001)
│   │   ├── src/                       # Same structure as web
│   │   ├── .storybook/                # Storybook config
│   │   └── ...
│   │
│   ├── 📁 mobile-web/                 # Mobile-optimized app (port 3002)
│   │   ├── src/                       # Same structure as web
│   │   └── ...
│   │
│   └── 📁 api/                        # NestJS backend (port 3003)
│       ├── src/
│       │   ├── app/                   # Root app module
│       │   ├── common/                # Shared utilities
│       │   │   ├── database/          # Prisma service
│       │   │   ├── doc/               # Swagger config
│       │   │   ├── file/              # File service
│       │   │   ├── helper/           # Helper functions
│       │   │   ├── message/          # Message formatting
│       │   │   ├── pagination/       # Pagination decorators
│       │   │   ├── request/          # Request parsing
│       │   │   ├── response/         # Response interceptors
│       │   │   └── common.module.ts   # Common module
│       │   ├── configs/              # Configuration
│       │   ├── languages/            # i18n files
│       │   ├── migration/            # Migration utilities
│       │   ├── modules/              # Business modules
│       │   │   ├── auth/             # Authentication
│       │   │   ├── order/            # Order management
│       │   │   ├── customer/         # Customer management
│       │   │   └── production/       # Production workflow
│       │   ├── router/               # Route organization
│       │   └── worker/              # Background workers
│       ├── keys/                     # Certificates & keys
│       ├── scripts/                 # Utility scripts
│       └── test/                    # Test files
│
├── 📁 packages/                      # Shared Packages
│   ├── @magnoli/ui/                 # Shared React components
│   ├── @magnoli/database/           # Prisma schema
│   ├── @magnoli/shared/             # Shared types & utils
│   ├── @magnoli/auth/               # Auth utilities (JWT)
│   ├── @magnoli/queue/              # BullMQ job definitions
│   ├── @magnoli/websocket/          # WebSocket client/server
│   ├── @magnoli/stripe/             # Stripe integration
│   ├── @magnoli/email/              # Email templates
│   └── @magnoli/config/             # Shared configuration
│
├── 📁 infrastructure/                # Infrastructure & DevOps
│   ├── docker/                      # Dockerfiles
│   └── aws/                         # AWS CloudFormation
│
├── 📁 tooling/                      # Development Tooling
│   ├── eslint-config/               # ESLint config
│   ├── tsconfig/                    # TypeScript config
│   └── prettier-config/             # Prettier config
│
├── 📁 .github/                      # GitHub Configuration
│   ├── workflows/                   # CI/CD workflows
│   ├── ISSUE_TEMPLATE/              # Issue templates
│   └── actions/                     # Reusable actions
│
├── .husky/                          # Git hooks
├── .vscode/                         # VS Code settings
├── turbo.json                       # Turborepo config
├── tsconfig.json                    # Root TypeScript config
├── package.json                     # Root workspace
└── README.md                        # This file
\`\`\`

---

## 🎯 Architectural Principles

### 1. **Separation of Concerns**
Each app and package has a clear, single responsibility:
- `apps/web` - Customer experience
- `apps/admin` - Business management
- `apps/api` - Business logic & data layer
- `packages/` - Reusable utilities

### 2. **Scalability**
The structure supports:
- **Horizontal scaling** - Add new apps easily
- **Vertical scaling** - Expand modules within apps
- **Team scaling** - Multiple teams can work independently

### 3. **Type Safety**
TypeScript ensures type safety across:
- App boundaries
- Package boundaries
- API contracts

### 4. **Developer Experience**
- **Hot reload** in all apps
- **Shared tooling** (ESLint, Prettier, TypeScript)
- **Consistent patterns** across codebase
- **Debugging support** via VS Code launch configs

---

## 🔧 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Monorepo** | Turborepo | Build system & task orchestration |
| **Frontend** | Next.js 15 | React framework with App Router |
| **Backend** | NestJS 11 | Enterprise Node.js framework |
| **Database** | PostgreSQL + Prisma | Relational database with ORM |
| **Cache/Queue** | Redis + BullMQ | Caching & background jobs |
| **Auth** | JWT + OAuth2 | Authentication & authorization |
| **Payments** | Stripe | Payment processing |
| **Real-time** | WebSockets | Live updates |
| **Deployment** | AWS (ECS, RDS, ElastiCache) | Cloud infrastructure |
| **Testing** | Jest + Playwright | Unit & E2E testing |

---

## 📦 Applications Breakdown

### 🛒 Web App (`apps/web`)
**Purpose**: Customer-facing application
- Order placement interface
- Order tracking and status
- Payment processing
- Order history

**Key Features**:
- Multi-step order form
- Real-time order status updates
- Stripe integration
- Mobile-responsive design

### 👔 Admin Dashboard (`apps/admin`)
**Purpose**: Business management portal
- Analytics and KPIs
- Order management
- Employee performance tracking
- Production workflow control

**Key Features**:
- Analytics dashboards
- Order management system
- Employee metrics
- Reporting tools

### 📱 Mobile Web App (`apps/mobile-web`)
**Purpose**: Employee mobile tools
- Quick order scanning
- Fast status updates
- Touch-friendly interface
- QR code scanning

**Key Features**:
- Camera integration for QR scanning
- Swipe gestures
- Offline support
- Quick action buttons

### 🔌 Backend API (`apps/api`)
**Purpose**: Business logic & data layer

**Architecture Layers**:
```
src/
├── app/              # Root application module
├── common/           # Shared utilities (global)
├── configs/          # Configuration (global)
├── modules/          # Business logic modules
├── router/           # Route organization
└── worker/           # Background job processors
```

**API Modules**:
- 🔐 **Auth** - Authentication & authorization
- 📋 **Order** - Order management & tracking
- 👥 **Customer** - Customer data management
- ⚙️ **Production** - Production workflow tracking
- 💰 **Payment** - Payment processing
- 🔔 **Notification** - Real-time notifications
- 📊 **Analytics** - Business analytics
- ⏰ **Queue** - Background job processing

---

## 🔄 Shared Packages

All packages are reusable across apps via the workspace protocol.

| Package | Description |
|---------|-------------|
| `@magnoli/ui` | Shared React components (Button, Forms, Layouts) |
| `@magnoli/database` | Prisma client & schema definitions |
| `@magnoli/shared` | TypeScript types, utils, constants |
| `@magnoli/auth` | JWT token generation & validation |
| `@magnoli/queue` | BullMQ job queue definitions |
| `@magnoli/websocket` | WebSocket client & server utilities |
| `@magnoli/stripe` | Stripe payment integration |
| `@magnoli/email` | Email templates & sender |
| `@magnoli/config` | Shared configuration loader |

---

## 🚦 Build System (Turborepo)

### Pipeline Configuration

The `turbo.json` defines the build pipeline:

```json
{
  "pipeline": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "dist/**"] },
    "dev": { "cache": false, "persistent": true },
    "lint": { "dependsOn": ["^lint"] },
    "type-check": { "dependsOn": ["^type-check"] }
  }
}
```

### Task Execution Order

1. **Dependencies First** (`^`) - Build packages before apps
2. **Parallel Execution** - Independent tasks run simultaneously
3. **Smart Caching** - Only rebuild what changed
4. **Incremental Builds** - Fast iteration during development

---

## 🏛️ Design Philosophy

### This is a **Blueprint**

This repository demonstrates:
- ✅ **How to structure** a large-scale monorepo
- ✅ **Where to place** different types of code
- ✅ **How to organize** features and modules
- ✅ **Best practices** for scaling

### Real Implementation

When building the actual application:
1. **Follow this structure** as the foundation
2. **Implement actual business logic** in modules
3. **Add real features** incrementally
4. **Scale architecture** as requirements grow
5. **Enhance patterns** with team-specific needs

### Current State

- ✅ Complete folder structure
- ✅ Skeleton files with comments
- ✅ Configuration files
- ✅ Documentation
- ❌ **No working code** (architectural design only)
- ❌ **No business logic** (pseudocode only)
- ❌ **No database queries** (structure only)

---

## 📚 Additional Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed architecture overview
- **[FRONTEND_STRUCTURE.md](./FRONTEND_STRUCTURE.md)** - Frontend structure guide
- **[BACKEND_STRUCTURE.md](./apps/api/BACKEND_STRUCTURE.md)** - Backend structure guide
- **[STRUCTURE.txt](./STRUCTURE.txt)** - Complete file tree
- **[ROOT_CONFIGURATION.md](./ROOT_CONFIGURATION.md)** - Root config files

---

## 🤝 Contributing

When implementing the real application:
1. Follow the established folder structure
2. Add real business logic to modules
3. Implement actual API endpoints
4. Build working React components
5. Connect to real databases
6. Add comprehensive tests

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for enterprise-scale software architecture**

*This is a reference architecture for building scalable dry-cleaning POS systems*

</div>

#   m a i - a r c h i t e c t u r a l - d e s i g n - p l a n  
 