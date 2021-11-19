import { createElement, lazy } from "react";
import { RouteObject } from "react-router";

export default [
  { 
    path: '/',
    element: createElement(lazy(() => import('../Count'))),
  },
  {
    path: '/test',
    element: createElement(lazy(() => import('../RouterTest'))),
  },
] as Array<RouteObject>;
