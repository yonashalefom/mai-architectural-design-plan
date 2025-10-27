# Frontend Structure

All three Next.js apps (web, admin, mobile-web) follow the same folder structure pattern:

\`\`\`
app-name/
├── README.md                      # App documentation
├── .github/                        # GitHub folder
│   ├── actions/                   # Reusable actions
│   │   └── setup-node/           # Node.js setup action
│   └── workflows/                 # CI/CD workflows
│       └── ci.yml               # Continuous integration
├── .storybook/                     # Storybook configuration
│   └── main.ts                   # Storybook setup
├── .vscode/                        # VSCode settings
├── public/                         # Public assets
│   └── favicon.ico               # Favicon
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # React components
│   │   └── [Component].tsx      # Reusable components
│   ├── features/                 # Feature-based modules
│   │   └── [feature]/
│   │       └── components/      # Feature-specific components
│   ├── libs/                     # 3rd party library configs
│   │   ├── axios.ts             # HTTP client
│   │   ├── prisma.ts            # Database client
│   │   └── camera.ts            # Camera utilities
│   ├── locales/                  # i18n translations
│   │   └── en.json              # English translations
│   ├── styles/                   # Global styles
│   │   └── globals.css          # Global CSS
│   ├── templates/                # Email/page templates
│   │   └── EmailLayout.tsx      # Template wrapper
│   ├── types/                    # TypeScript types
│   │   ├── order.ts             # Order types
│   │   ├── dashboard.ts         # Dashboard types
│   │   └── scanner.ts           # Scanner types
│   ├── utils/                    # Utility functions
│   │   ├── format.ts            # Formatting utils
│   │   └── gesture.ts            # Gesture utils
│   └── validations/              # Validation schemas (Zod)
│       └── order.ts             # Order validation
├── tests/                         # Test files
│   ├── e2e/                     # E2E tests
│   │   └── order-flow.spec.ts   # Playwright tests
│   └── integration/             # Integration tests
│       └── api.test.ts          # API integration tests
├── next.config.js                # Next.js configuration
└── tsconfig.json                 # TypeScript config with path aliases
\`\`\`

## Key Features

### App Structure
- **Next.js 15** with App Router
- **TypeScript** with strict mode
- Path aliases (`@/*` mapped to `./src/*`)
- Shared components from `@magnoli/ui`

### Component Organization
- `src/components/` - Reusable UI components
- `src/features/` - Feature-based modules
- Feature components grouped by domain

### Development Tools
- **Storybook** for component development
- **Playwright** for E2E testing
- **ESLint** + **Prettier** for code quality
- **GitHub Actions** for CI/CD

### Libraries & Utilities
- Axios for HTTP requests
- Zod for validation schemas
- Prisma for database access
- i18n support with locales

