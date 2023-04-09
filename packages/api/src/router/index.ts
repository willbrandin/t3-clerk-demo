import { router } from "../trpc";
import { helloRouter, postRouter } from "./post";
import { authRouter } from "./auth";

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
  hello: helloRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
