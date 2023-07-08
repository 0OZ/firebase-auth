import { getAuth, onIdTokenChanged, type User } from 'firebase/auth'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { initializeAppWrapper } from './firebase'

type AuthApiProviderType = {
  readonly user?: User | null
}

export const SessionProviderCtx = React.createContext<AuthApiProviderType>({})
export const useSession = () => {
  const context = React.useContext(SessionProviderCtx)
  if (context === undefined)
    throw new Error('useApiProvider must be used within a AuthApiProvider')

  return context
}

export const Session: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const auth = getAuth(initializeAppWrapper())

    const unsubscribe = onIdTokenChanged(auth, (authUser) => {
      setUser(authUser)
      authUser?.getIdTokenResult().then((user) => {
        console.debug('init user:', user)
      })
    })
    return () => {
      console.debug('user logged out')
      setUser(null)
      unsubscribe()
    }
  }, [])

  return (
    <SessionProviderCtx.Provider value={{ user }}>
      {children}
    </SessionProviderCtx.Provider>
  )
}
