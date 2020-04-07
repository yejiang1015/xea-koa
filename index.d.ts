import * as Koa from "koa";
import * as Router from "koa-router";

declare namespace cors {
  interface Options {
    origin?: string | ((ctx: Koa.Context) => boolean | string);
    exposeHeaders?: string[];
    maxAge?: number;
    credentials?: boolean;
    allowMethods?: string[];
    allowHeaders?: string[];
  }
}

export declare const app: Koa<Koa.DefaultState, Koa.DefaultContext>;
export declare function route(
  handle: (route: Router<any, {}>) => Router<any, {}>
): void;
export declare function listen(
  prefix?: string,
  port?: number,
  hostname?: string,
  listeningListener?: () => void
): void;
export declare function cors(options?: cors.Options): Koa.Middleware;
export declare const send: {
  succ(ctx: Koa.Context, data: any, msg?: string): void;
  fail(ctx: Koa.Context, msg?: string): void;
};
