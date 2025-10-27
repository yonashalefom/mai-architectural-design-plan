# Backend API Structure

Enterprise-grade NestJS backend organized by functional layers.

## Directory Structure

\`\`\`
apps/api/
├── src/
│   ├── app/                    # Root application module
│   │   ├── app.controller.ts   # Health check endpoint
│   │   ├── app.service.ts      # App business logic
│   │   └── app.module.ts       # Root module
│   │
│   ├── common/                 # Shared utilities and services
│   │   ├── database/           # Database service (Prisma)
│   │   ├── doc/                # Swagger/OpenAPI config
│   │   ├── file/               # File upload/storage
│   │   ├── helper/             # Helper functions
│   │   ├── message/            # Response message formatting
│   │   ├── pagination/         # Pagination decorators and DTOs
│   │   ├── request/            # Request parsing/validation
│   │   ├── response/            # Response interceptors
│   │   └── common.module.ts    # Common module export
│   │
│   ├── configs/                # Configuration
│   │   ├── config.module.ts    # Config module
│   │   └── config.service.ts   # Environment variables
│   │
│   ├── languages/              # i18n translation files
│   │   ├── en.json             # English
│   │   └── es.json             # Spanish
│   │
│   ├── migration/              # Database migrations
│   │   └── migration.interface.ts
│   │
│   ├── modules/                # Business logic modules
│   │   ├── auth/              # Authentication
│   │   ├── order/             # Dry-cleaning orders
│   │   ├── customer/          # Customer management
│   │   └── production/        # Production workflow
│   │
│   ├── router/                # Application routing
│   │   └── router.module.ts   # Routes all feature modules
│   │
│   ├── worker/                # Background workers
│   │   └── worker.module.ts   # BullMQ job processors
│   │
│   └── main.ts                # Application entry point
│
├── keys/                      # Keys, certificates, sensitive files
├── scripts/                   # Utility scripts
│   ├── migrate.ts             # Database migrations
│   └── seed.ts                # Database seeding
├── test/                      # Test files
│   ├── e2e/                   # End-to-end tests
│   └── unit/                  # Unit tests
├── nest-cli.json              # NestJS CLI config
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript config
\`\`\`

## Key Components

### Common Module (Global)
Shared services used across all modules:
- **DatabaseService** - Prisma client with transaction support
- **FileService** - S3/local file storage
- **HelperService** - Utility functions
- **ResponseMessageService** - Message formatting
- **RequestService** - Request parsing
- **Pagination** - Decorators for pagination

### Config Module (Global)
- Environment variable management
- Service-level configuration access

### Feature Modules
Each module contains:
- `.module.ts` - NestJS module definition
- `.controller.ts` - HTTP endpoints
- `.service.ts` - Business logic

### Router Module
Orchestrates all feature modules for routing.

### Worker Module
Background job processors for BullMQ queues.

## Testing

- **E2E Tests** - Integration tests for API endpoints
- **Unit Tests** - Service and controller tests

## Scripts

- **migrate.ts** - Run database migrations
- **seed.ts** - Seed database with initial data

## Benefits

✅ **Clear Separation of Concerns** - Common utilities separated from business logic
✅ **Scalable Architecture** - Easy to add new modules
✅ **Global Services** - Common and Config modules available everywhere
✅ **i18n Support** - Multi-language response messages
✅ **Type-Safe** - Full TypeScript coverage
✅ **Testable** - E2E and unit test structure

