// This file is generated by next-typesafe-url
// Do not edit this file directly.

// @generated
// prettier-ignore
/* eslint-disable */


declare module "@@@next-typesafe-url" {
  import { type RouteType as Route_0 } from "./src/app/[productID]/routeType";
import type { InferRoute, StaticRoute } from "next-typesafe-url";
  
  interface DynamicRouter {
    "/[productID]": InferRoute<Route_0>;
  }

  interface StaticRouter {
    "/": StaticRoute;
  }
}
