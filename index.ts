import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyparser from "koa-bodyparser";
import * as cors from "koa2-cors";

const instance = new Koa();
/** ÷÷÷÷÷ CORS ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷ */
instance.use(cors());
/** ÷÷÷÷÷ POST ctx.request.body ÷÷ */
instance.use(bodyparser());

export const app = instance;

export const route = (handle: (route: Router) => Router) => {
  const _route = handle(new Router());
  instance.use(_route.routes());
  instance.use(_route.allowedMethods());
};
