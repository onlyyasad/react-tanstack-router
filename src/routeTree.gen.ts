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
import { Route as LayoutTeachersImport } from './routes/_layout/teachers'
import { Route as LayoutContactImport } from './routes/_layout/contact'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()

// Create/Update Routes

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

const LayoutTeachersRoute = LayoutTeachersImport.update({
  id: '/teachers',
  path: '/teachers',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutContactRoute = LayoutContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => LayoutRoute,
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
    '/_layout/contact': {
      id: '/_layout/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof LayoutContactImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/teachers': {
      id: '/_layout/teachers'
      path: '/teachers'
      fullPath: '/teachers'
      preLoaderRoute: typeof LayoutTeachersImport
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
  LayoutTeachersRoute: typeof LayoutTeachersRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutContactRoute: LayoutContactRoute,
  LayoutTeachersRoute: LayoutTeachersRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/contact': typeof LayoutContactRoute
  '/teachers': typeof LayoutTeachersRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/about': typeof AboutRoute
  '/contact': typeof LayoutContactRoute
  '/teachers': typeof LayoutTeachersRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/_layout/contact': typeof LayoutContactRoute
  '/_layout/teachers': typeof LayoutTeachersRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/about' | '/contact' | '/teachers' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/contact' | '/teachers' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/about'
    | '/_layout/contact'
    | '/_layout/teachers'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  AboutRoute: AboutRoute,
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
        "/about"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/contact",
        "/_layout/teachers",
        "/_layout/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_layout/contact": {
      "filePath": "_layout/contact.tsx",
      "parent": "/_layout"
    },
    "/_layout/teachers": {
      "filePath": "_layout/teachers.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
