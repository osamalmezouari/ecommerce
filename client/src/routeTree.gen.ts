/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StoreImport } from './routes/store'
import { Route as LandingImport } from './routes/landing'
import { Route as CompareImport } from './routes/compare'
import { Route as AuthImport } from './routes/auth'

// Create/Update Routes

const StoreRoute = StoreImport.update({
  id: '/store',
  path: '/store',
  getParentRoute: () => rootRoute,
} as any)

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
    '/store': {
      id: '/store'
      path: '/store'
      fullPath: '/store'
      preLoaderRoute: typeof StoreImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
  '/store': typeof StoreRoute
}

export interface FileRoutesByTo {
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
  '/store': typeof StoreRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
  '/store': typeof StoreRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/auth' | '/compare' | '/landing' | '/store'
  fileRoutesByTo: FileRoutesByTo
  to: '/auth' | '/compare' | '/landing' | '/store'
  id: '__root__' | '/auth' | '/compare' | '/landing' | '/store'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRoute
  CompareRoute: typeof CompareRoute
  LandingRoute: typeof LandingRoute
  StoreRoute: typeof StoreRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRoute,
  CompareRoute: CompareRoute,
  LandingRoute: LandingRoute,
  StoreRoute: StoreRoute,
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
        "/landing",
        "/store"
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
    },
    "/store": {
      "filePath": "store.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
