// Database migration script
import { execSync } from 'child_process'

async function migrate() {
  execSync('npx prisma migrate deploy', { stdio: 'inherit' })
}

migrate()

