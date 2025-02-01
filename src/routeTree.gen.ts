/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutContactImport } from './routes/_layout/contact'
import { Route as publicLoginImport } from './routes/(public)/login'
import { Route as publicLayoutImport } from './routes/(public)/_layout'

// Create Virtual Routes

const publicImport = createFileRoute('/(public)')()
const LayoutIndexLazyImport = createFileRoute('/_layout/')()

// Create/Update Routes

const publicRoute = publicImport.update({
  id: '/(public)',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutContactRoute = LayoutContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => LayoutRoute,
} as any)

const publicLoginRoute = publicLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => publicRoute,
} as any)

const publicLayoutRoute = publicLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => publicRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/(public)': {
      id: '/(public)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicImport
      parentRoute: typeof rootRoute
    }
    '/(public)/_layout': {
      id: '/(public)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicLayoutImport
      parentRoute: typeof publicRoute
    }
    '/(public)/login': {
      id: '/(public)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof publicLoginImport
      parentRoute: typeof publicImport
    }
    '/_layout/contact': {
      id: '/_layout/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof LayoutContactImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutContactRoute: typeof LayoutContactRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutContactRoute: LayoutContactRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

interface publicRouteChildren {
  publicLayoutRoute: typeof publicLayoutRoute
  publicLoginRoute: typeof publicLoginRoute
}

const publicRouteChildren: publicRouteChildren = {
  publicLayoutRoute: publicLayoutRoute,
  publicLoginRoute: publicLoginRoute,
}

const publicRouteWithChildren =
  publicRoute._addFileChildren(publicRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/': typeof LayoutIndexLazyRoute
  '/login': typeof publicLoginRoute
  '/contact': typeof LayoutContactRoute
}

export interface FileRoutesByTo {
  '/about': typeof AboutRoute
  '/': typeof LayoutIndexLazyRoute
  '/login': typeof publicLoginRoute
  '/contact': typeof LayoutContactRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/(public)': typeof publicRouteWithChildren
  '/(public)/_layout': typeof publicLayoutRoute
  '/(public)/login': typeof publicLoginRoute
  '/_layout/contact': typeof LayoutContactRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/about' | '/' | '/login' | '/contact'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/' | '/login' | '/contact'
  id:
    | '__root__'
    | '/_layout'
    | '/about'
    | '/(public)'
    | '/(public)/_layout'
    | '/(public)/login'
    | '/_layout/contact'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  AboutRoute: typeof AboutRoute
  publicRoute: typeof publicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  AboutRoute: AboutRoute,
  publicRoute: publicRouteWithChildren,
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
        "/_layout",
        "/about",
        "/(public)"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/contact",
        "/_layout/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/(public)": {
      "filePath": "(public)",
      "children": [
        "/(public)/_layout",
        "/(public)/login"
      ]
    },
    "/(public)/_layout": {
      "filePath": "(public)/_layout.tsx",
      "parent": "/(public)"
    },
    "/(public)/login": {
      "filePath": "(public)/login.tsx",
      "parent": "/(public)"
    },
    "/_layout/contact": {
      "filePath": "_layout/contact.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
