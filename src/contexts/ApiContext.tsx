import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '../helpers/apollo'
import { useAuth } from './AuthContext'

export const ApiProvider: React.FC<React.PropsWithChildren & { appId: string }> = ({ appId, children }) => {
  const { authToken } = useAuth()

  const apolloClient = createApolloClient(
    { appId, authToken },
    {
      'invalid-jwt': typeof window !== 'undefined' ? window.location.reload : () => {},
    },
  )

  return (
    <ApolloProvider client={apolloClient}>
      <>{children}</>
    </ApolloProvider>
  )
}
