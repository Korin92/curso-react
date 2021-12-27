import { Context } from "https://deno.land/x/oak@v10.1.0/mod.ts";

const authMiddleware = async (ctx: Context, next: Function) => {
  if (ctx.state.currentUser) {
    await next()
  } else {
    ctx.response.status = 405
  }
}

export {authMiddleware}