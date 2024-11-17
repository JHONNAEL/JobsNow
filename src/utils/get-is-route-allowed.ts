import type { TRole } from '@/interfaces'
import { globalAuthenticatedDisallowed, routePermissions } from './disallowed-routes'

export const getIsRouteAllowed = ( role : TRole, pathname : string ) : boolean => {
  console.log( 'role', role )
  if ( role !== 'notAuthenticated' ) {
    for ( const disallowedPath of globalAuthenticatedDisallowed ) {
      if ( pathname.startsWith( disallowedPath ) ) {
        return false
      }
    }
  }

  const rolePermissions = routePermissions[ role ]

  if ( !rolePermissions ) {
    return false
  }

  for ( const disallowedPath of rolePermissions.disallowed ) {
    console.log( 'disallowedPath', disallowedPath )
    if ( pathname === disallowedPath || pathname.startsWith( `${ disallowedPath }/` ) ) {
      return false
    }
  }

  if ( rolePermissions.allowed ) {
    for ( const allowedPath of rolePermissions.allowed ) {
      if ( pathname === allowedPath || pathname.startsWith( `${ allowedPath }/` ) ) {
        return true
      }
    }
    return false
  }
  console.log( 'allowed all' )
  return true
}