import { clerkMiddleware, authMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({ debug: true });

export default authMiddleware({
  ignoredRoutes: ["/api(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
