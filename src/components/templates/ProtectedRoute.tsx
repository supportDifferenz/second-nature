// components/ProtectedRoute.tsx
'use client'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/zustand/store/authDataStore'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return isAuthenticated ? children : null
}