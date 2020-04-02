# @xea/koa

## node 模板 快速测试

### install

```bash

yarn add @xea/koa

```

#### packages

```json
{
	"dependencies": {
		"@types/koa": "^2.11.3",
		"@types/koa-router": "^7.4.0",
		"chalk": "^4.0.0",
		"cross-env": "^7.0.2",
		"koa": "^2.11.0",
		"koa-bodyparser": "^4.3.0",
		"koa-router": "^8.0.8",
		"koa2-cors": "^2.0.6",
		"nodemon": "^2.0.2",
		"ts-node": "^8.8.1"
	}
}
```

#### nodemon

```json
{
	"nodemonConfig": {
		"ignore": ["node_modules/", "build/", "dist/"],
		"ext": "ts"
	}
}
```

#### tsconfig.json

```json
{
	"compilerOptions": {
		"target": "esnext",
		"module": "commonjs",
		"lib": ["es2015", "es2016", "es2017", "esnext.asynciterable"],
		"outDir": "build",
		"rootDir": "./",
		"baseUrl": "./",
		"newLine": "CRLF",
		"allowJs": false,
		"skipDefaultLibCheck": true,
		/** 生成 d.ts */
		"declaration": true,
		"noFallthroughCasesInSwitch": true,
		"removeComments": true
	},
	"include": ["**/*.ts", "*.ts"],
	"exclude": ["node_modules/**", "build/**"]
}
```

## use

1. create tsconfig.json
2. index.ts

```js
import * as Koa from "koa";

import { app, listen, route } from "@xea/koa";

route(route => {
	route.get("/", (ctx: Koa.Context) => {
		ctx.body = "hello";
	});

	return route;
});

listen("/apis", 3000);
```

3. scripts

```json
{
	"scripts": {
		"serve": "cross-env NODE_ENV=development nodemon -x ts-node ./index.ts",
		"build": "cross-env NODE_ENV=production node scripts/build",
		"start": "cross-env NODE_ENV=production node build",
		"pm2": "pm2 start npm --name api.webhref -- run start"
	}
}
```

4. start

```bash
yarn serve

```
