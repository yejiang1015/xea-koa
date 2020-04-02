# @xea/koa

## node 模板 快速测试

#### packages

```json
yarn add chalk cross-env fs-extra koa koa-bodyparser koa-router koa-static koa2-cors nodemon request request-promise ts-node typescript @types/fs-extra @types/koa @types/koa-bodyparser @types/koa-router @types/koa-static @types/koa2-cors @types/node @types/request-promise

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

#### scripts

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

## use

1. create tsconfig.json
2. index.ts

```js
import { app, route, listen } from "@xea/koa";

route(router => {
	router.get("/", (ctx: Koa.Context) => {});
	return router;
});

app.listen();
```
