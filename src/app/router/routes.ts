export const Routes = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  // Add more routes as needed
} as const;

export type RouteKeys = keyof typeof Routes;
export type RouteValues = typeof Routes[RouteKeys];