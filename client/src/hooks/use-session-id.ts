import { useState, useEffect } from 'react';

const SESSION_ID_KEY = 'ai-chat-session-id';

function generateSessionId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function useSessionId(): string {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    let storedId = localStorage.getItem(SESSION_ID_KEY);
    if (!storedId) {
      storedId = generateSessionId();
      localStorage.setItem(SESSION_ID_KEY, storedId);
    }
    setSessionId(storedId);
  }, []);

  return sessionId;
}
