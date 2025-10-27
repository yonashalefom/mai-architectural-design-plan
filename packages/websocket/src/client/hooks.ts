// React hook for WebSocket connections
export function useWebSocket(url: string) {
  // Connect to WebSocket and return state
  return { connected: false, send: () => {}, on: () => {} }
}

