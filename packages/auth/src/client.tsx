// React context for client-side auth state
import { createContext } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // Manages auth state in React apps
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

