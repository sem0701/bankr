import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accountsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.account.findMany();
  }),
});
