"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const cors = require("koa2-cors");
const instance = new Koa();
instance.use(cors());
instance.use(bodyparser());
exports.app = instance;
exports.route = (handle) => {
    const _route = handle(new Router());
    instance.use(_route.routes());
    instance.use(_route.allowedMethods());
};
