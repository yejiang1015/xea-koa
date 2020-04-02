import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyparser from "koa-bodyparser";
import * as chalk from "chalk";
import * as cors from "koa2-cors";
import * as os from "os";

const instance = new Koa();
/** ÷÷÷÷÷ CORS ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷ */
instance.use(cors());
/** ÷÷÷÷÷ POST ctx.request.body ÷÷ */
instance.use(bodyparser());

/** export const */
export const app = instance;

/** export const */
export const route = (handle: (route: Router) => Router) => {
	const _route = handle(new Router());
	instance.use(_route.routes());
	instance.use(_route.allowedMethods());
};

const interfaces = os.networkInterfaces();
let address = "127.0.0.1";
for (let key in interfaces) {
	interfaces[key].forEach((details: os.NetworkInterfaceInfo) => {
		if (details.family == "IPv4" && key == "en0") {
			address = details.address;
		}
	});
}

/** export const */
export const listen = (prefix = "", port = 9090, hostname: "0.0.0.0", listeningListener?: () => void) => {
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
