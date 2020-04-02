"use strict";
const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const chalk = require("chalk");
const cors = require("koa2-cors");
const os = require("os");
const router = new Router();

const instance = new Koa();

/** ÷÷÷÷÷ POST ctx.request.body ÷÷ */
instance.use(bodyparser());

/** export const */
exports.app = instance;

/** export const */
exports.route = handle => {
	const _route = handle(router);
	instance.use(_route.routes());
	instance.use(_route.allowedMethods());
};

const interfaces = os.networkInterfaces();
let address = "127.0.0.1";
for (let key in interfaces) {
	interfaces[key].forEach(details => {
		if (details.family == "IPv4" && key == "en0") {
			address = details.address;
		}
	});
}

/** export const */
exports.listen = (prefix = "", port = 9090, hostname = "0.0.0.0", listeningListener) => {
	const _listeningListener = () => {
		console.info(``);
		console.info(`App running at:`);
		console.info("- Local:   " + chalk.blue("http://localhost:") + chalk.yellow(port) + chalk.blue("/"));
		console.info("- Network: " + chalk.blue(`http://${address}:`) + chalk.yellow(port) + chalk.blue("/"));
		console.info(``);
		console.info(`Note: prefix is  ${chalk.green(prefix)}`);
		console.info(`Note: Currently in the development environment.`);
		console.info(`To create a production online, run ${chalk.blue("npm run start")}.`);
	};
	instance.listen(port, hostname, listeningListener || _listeningListener);
};

/** export const cors */
exports.cors = options => {
	if (options) {
		instance.use(cors(options));
	} else {
		instance.use(cors());
	}
};

// Make the export immutable
Object.defineProperty(module, "exports", {
	enumerable: true
});
