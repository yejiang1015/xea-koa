import * as Koa from "koa";
import * as Router from "koa-router";
export declare const app: Koa<Koa.DefaultState, Koa.DefaultContext>;
export declare const route: (handle: (route: Router<any, {}>) => Router<any, {}>) => void;
