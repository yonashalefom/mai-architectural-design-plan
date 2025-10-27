// JWT token generation and verification
import jwt from 'jsonwebtoken'

export function generateToken(payload: object): string {
  return jwt.sign(payload, process.env.JWT_SECRET!)
}

export function verifyToken(token: string): object {
  return jwt.verify(token, process.env.JWT_SECRET!)
}

