/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StoreroutImport } from './routes/storerout'
import { Route as ProductdetailsrootImport } from './routes/productdetailsroot'
import { Route as PlaceOrderImport } from './routes/placeOrder'
import { Route as LandingImport } from './routes/landing'
import { Route as CompareImport } from './routes/compare'
import { Route as AuthImport } from './routes/auth'
import { Route as RefillBalanceRequestRouteImport } from './routes/RefillBalanceRequestRoute'
import { Route as ProtectedRoutesAuthProtectedRouteImport } from './routes/protectedRoutes/AuthProtectedRoute'
import { Route as AdminOverviewRouteImport } f./routes/admin/overviewRouterviewRoute'

// Create/Update Routes

const StoreroutRoute = StoreroutImport.update({
  id: '/storerout',
  path: '/storerout',
  getParentRoute: () => rootRoute,
} as any)

const ProductdetailsrootRoute = ProductdetailsrootImport.update({
  id: '/productdetailsroot',
  path: '/productdetailsroot',
  getParentRoute: () => rootRoute,
} as any)

const PlaceOrderRoute = PlaceOrderImport.update({
  id: '/placeOrder',
  path: '/placeOrder',
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

const RefillBalanceRequestRouteRoute = RefillBalanceRequestRouteImport.update({
  id: '/RefillBalanceRequestRoute',
  path: '/RefillBalanceRequestRoute',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRoutesAuthProtectedRouteRoute =
  ProtectedRoutesAuthProtectedRouteImport.update({
    id: '/protectedRoutes/AuthProtectedRoute',
    path: '/protectedRoutes/AuthProtectedRoute',
    getParentRoute: () => rootRoute,
  } as any)

const AdminOverviewRouteRoute = AdminOverviewRouteImport.update({
  id: '/admin/overviewRoute',
  path: '/admin/overviewRoute',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/RefillBalanceRequestRoute': {
      id: '/RefillBalanceRequestRoute'
      path: '/RefillBalanceRequestRoute'
      fullPath: '/RefillBalanceRequestRoute'
      preLoaderRoute: typeof RefillBalanceRequestRouteImport
      parentRoute: typeof rootRoute
    }
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
    '/placeOrder': {
      id: '/placeOrder'
      path: '/placeOrder'
      fullPath: '/placeOrder'
      preLoaderRoute: typeof PlaceOrderImport
      parentRoute: typeof rootRoute
    }
    '/productdetailsroot': {
      id: '/productdetailsroot'
      path: '/productdetailsroot'
      fullPath: '/productdetailsroot'
      preLoaderRoute: typeof ProductdetailsrootImport
      parentRoute: typeof rootRoute
    }
    '/storerout': {
      id: '/storerout'
      path: '/storerout'
      fullPath: '/storerout'
      preLoaderRoute: typeof StoreroutImport
      parentRoute: typeof rootRoute
    }
    '/admin/overviewRoute': {
      id: '/admin/overviewRoute'
      path: '/admin/overviewRoute'
      fullPath: '/admin/overviewRoute'
      preLoaderRoute: typeof AdminOverviewRouteImport
      parentRoute: typeof rootRoute
    }
    '/protectedRoutes/AuthProtectedRoute': {
      id: '/protectedRoutes/AuthProtectedRoute'
      path: '/protectedRoutes/AuthProtectedRoute'
      fullPath: '/protectedRoutes/AuthProtectedRoute'
      preLoaderRoute: typeof ProtectedRoutesAuthProtectedRouteImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/RefillBalanceRequestRoute': typeof RefillBalanceRequestRouteRoute
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
  '/placeOrder': typeof PlaceOrderRoute
  '/productdetailsroot': typeof ProductdetailsrootRoute
  '/storerout': typeof StoreroutRoute
  '/admin/overviewRoute': typeof AdminOverviewRouteRoute
  '/protectedRoutes/AuthProtectedRoute': typeof ProtectedRoutesAuthProtectedRouteRoute
}

export interface FileRoutesByTo {
  '/RefillBalanceRequestRoute': typeof RefillBalanceRequestRouteRoute
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
  '/placeOrder': typeof PlaceOrderRoute
  '/productdetailsroot': typeof ProductdetailsrootRoute
  '/storerout': typeof StoreroutRoute
  '/admin/overviewRoute': typeof AdminOverviewRouteRoute
  '/protectedRoutes/AuthProtectedRoute': typeof ProtectedRoutesAuthProtectedRouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/RefillBalanceRequestRoute': typeof RefillBalanceRequestRouteRoute
  '/auth': typeof AuthRoute
  '/compare': typeof CompareRoute
  '/landing': typeof LandingRoute
  '/placeOrder': typeof PlaceOrderRoute
  '/productdetailsroot': typeof ProductdetailsrootRoute
  '/storerout': typeof StoreroutRoute
  '/admin/overviewRoute': typeof AdminOverviewRouteRoute
  '/protectedRoutes/AuthProtectedRoute': typeof ProtectedRoutesAuthProtectedRouteRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/RefillBalanceRequestRoute'
    | '/auth'
    | '/compare'
    | '/landing'
    | '/placeOrder'
    | '/productdetailsroot'
    | '/storerout'
    | '/admin/overviewRoute'
    | '/protectedRoutes/AuthProtectedRoute'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/RefillBalanceRequestRoute'
    | '/auth'
    | '/compare'
    | '/landing'
    | '/placeOrder'
    | '/productdetailsroot'
    | '/storerout'
    | '/admin/overviewRoute'
    | '/protectedRoutes/AuthProtectedRoute'
  id:
    | '__root__'
    | '/RefillBalanceRequestRoute'
    | '/auth'
    | '/compare'
    | '/landing'
    | '/placeOrder'
    | '/productdetailsroot'
    | '/storerout'
    | '/admin/overviewRoute'
    | '/protectedRoutes/AuthProtectedRoute'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  RefillBalanceRequestRouteRoute: typeof RefillBalanceRequestRouteRoute
  AuthRoute: typeof AuthRoute
  CompareRoute: typeof CompareRoute
  LandingRoute: typeof LandingRoute
  PlaceOrderRoute: typeof PlaceOrderRoute
  ProductdetailsrootRoute: typeof ProductdetailsrootRoute
  StoreroutRoute: typeof StoreroutRoute
  AdminOverviewRouteRoute: typeof AdminOverviewRouteRoute
  ProtectedRoutesAuthProtectedRouteRoute: typeof ProtectedRoutesAuthProtectedRouteRoute
}

const rootRouteChildren: RootRouteChildren = {
  RefillBalanceRequestRouteRoute: RefillBalanceRequestRouteRoute,
  AuthRoute: AuthRoute,
  CompareRoute: CompareRoute,
  LandingRoute: LandingRoute,
  PlaceOrderRoute: PlaceOrderRoute,
  ProductdetailsrootRoute: ProductdetailsrootRoute,
  StoreroutRoute: StoreroutRoute,
  AdminOverviewRouteRoute: AdminOverviewRouteRoute,
  ProtectedRoutesAuthProtectedRouteRoute:
    ProtectedRoutesAuthProtectedRouteRoute,
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
        "/RefillBalanceRequestRoute",
        "/auth",
        "/compare",
        "/landing",
        "/placeOrder",
        "/productdetailsroot",
        "/storerout",
        "/admin/overviewRoute",
        "/protectedRoutes/AuthProtectedRoute"
      ]
    },
    "/RefillBalanceRequestRoute": {
      "filePath": "RefillBalanceRequestRoute.tsx"
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
    "/placeOrder": {
      "filePath": "placeOrder.tsx"
    },
    "/productdetailsroot": {
      "filePath": "productdetailsroot.tsx"
    },
    "/storerout": {
      "filePath": "storerout.tsx"
    },
    "/admin/overviewRoute": {
      "filePath": "admin/overviewRoute.tsx"
    },
    "/protectedRoutes/AuthProtectedRoute": {
      "filePath": "protectedRoutes/AuthProtectedRoute.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
