# Magnoli Monorepo Architecture

Enterprise-grade dry-cleaning POS system architecture using Turborepo, Next.js 15, and NestJS 11.

## Directory Structure

\`\`\`
/
├── apps/                    # Application packages
│   ├── web/                # Customer-facing Next.js app (port 3000)
│   ├── admin/              # Admin dashboard Next.js app (port 3001)
│   ├── mobile-web/         # Mobile-optimized Next.js app (port 3002)
│   └── api/                # Main NestJS backend (port 3003)
│       └── src/
│           ├── modules/    # Feature modules (10 modules)
│           ├── app.module.ts
│           └── main.ts
│
├── packages/                # Shared packages
│   ├── ui/                 # React components
│   ├── database/           # Prisma schema
│   ├── shared/             # Types & utils
│   ├── auth/               # JWT + OAuth2
│   ├── queue/              # BullMQ queues
│   ├── websocket/          # Real-time WebSocket
│   ├── stripe/             # Payment processing
│   ├── email/              # Email templates
│   └── config/             # Shared configuration
│
├── infrastructure/          # Deployment configs
│   ├── docker/             # Dockerfiles
│   └── aws/                # CloudFormation
│
├── tooling/                # Dev tooling
│   ├── eslint-config/
│   ├── tsconfig/
│   └── prettier-config/
│
├── turbo.json              # Turborepo config
└── package.json            # Root workspace
\`\`\`

## Key Features

### Order Entry
- Multi-step form with real-time validation
- Customer lookup and item selection
- Stripe payment integration

### Production Tracking
- Kanban-style workflow management
- Real-time status updates via WebSocket
- Automated notifications

### Employee Performance
- Productivity metrics and dashboards
- Orders per hour tracking
- Analytics and reporting

### Payment Processing
- Stripe integration for payments
- Refund handling
- Receipt generation

### Real-time Updates
- WebSocket server for live order status
- Push notifications to customers
- Production workflow updates

## Technology Stack

- **Monorepo**: Turborepo
- **Frontend**: Next.js 15 (React 18)
- **Backend**: NestJS 11
- **Database**: PostgreSQL with Prisma
- **Cache/Queue**: Redis + BullMQ
- **Auth**: JWT + OAuth2
- **Payments**: Stripe
- **Real-time**: WebSockets
- **Deployment**: AWS (ECS, RDS, ElastiCache)

## API Modules (NestJS)

1. **Auth Module** - JWT + OAuth2 authentication
2. **Orders Module** - Order CRUD and tracking
3. **Customers Module** - Customer management
4. **Items Module** - Garment/service catalog
5. **Production Module** - Workflow tracking
6. **Employees Module** - Performance tracking
7. **Payments Module** - Stripe integration
8. **Notifications Module** - WebSocket gateway
9. **Analytics Module** - Business metrics
10. **Queue Module** - Background job processors

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Start development servers
npm run dev

# Build all apps
npm run build

# Run linting
npm run lint
\`\`\`

## Development Workflow

- All apps share common packages via workspace protocol
- Hot reload enabled for all Next.js apps
- TypeScript strict mode enabled
- ESLint and Prettier for code quality

## Deployment

- **API**: AWS ECS Fargate
- **Web Apps**: AWS ECS or Vercel
- **Database**: AWS RDS PostgreSQL
- **Cache**: AWS ElastiCache Redis
- **Queue**: BullMQ workers on ECS

## Notes

- All files contain max 10 lines of pseudocode
- Comprehensive folder structure with clear separation of concerns
- Ready for enterprise-scale expansion
- Cal.com-inspired architecture pattern

