import { createTRPCRouter } from "~/server/api/trpc";
import { accountsRouter } from "./routers/accounts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  accounts: accountsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
