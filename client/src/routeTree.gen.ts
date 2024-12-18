/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LandingImport } from './routes/landing'
import { Route as CompareImport } from './routes/compare'
import { Route as AuthImport } from './routes/auth'

// Create/Update Routes

const LandingRoute = LandingImport.update({
  id: '/landing',
  path: '/landing',
  getParentRoute: () => rootRoute,
} as any)

const CompareRoute = CompareImport.update({
  id: '/compare',
  path: '/compare',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/compare': {
      id: '/compare'
      path: '/compare'
      fullPath: '/compare'
      preLoaderRoute: typeof CompareImport
      parentRoute: typeof rootRoute
    }
    '/landing': {
      id: '/landing'
      path: '/landing'
      fullPath: '/landing'
      preLoaderRoute: typeof LandingImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
}

export interface FileRoutesByTo {
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/auth' | '/compare' | '/landing'
  fileRoutesByTo: FileRoutesByTo
  to: '/auth' | '/compare' | '/landing'
  id: '__root__' | '/auth' | '/compare' | '/landing'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRoute
  CompareRoute: typeof CompareRoute
  LandingRoute: typeof LandingRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRoute,
  CompareRoute: CompareRoute,
  LandingRoute: LandingRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/auth",
        "/compare",
        "/landing"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/compare": {
      "filePath": "compare.tsx"
    },
    "/landing": {
      "filePath": "landing.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
