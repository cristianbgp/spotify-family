import React from "react";

const isServer = typeof window === "undefined";

export function SSRSuspense({ fallback, children }) {
  if (isServer) return fallback;
  return <React.Suspense fallback={fallback}>{children}</React.Suspense>;
}
