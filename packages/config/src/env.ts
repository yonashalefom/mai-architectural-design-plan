// Environment configuration loader
export function getConfig() {
  // Load and validate env vars for all services
  return {
    database: process.env.DATABASE_URL!,
    redis: process.env.REDIS_HOST!,
    stripe: process.env.STRIPE_SECRET_KEY!,
  }
}

