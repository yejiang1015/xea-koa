# @xea/koa

## node 模板 快速测试

#### packages

```json
{
	"dependencies": {
		"chalk": "^3.0.0",
		"cross-env": "^7.0.2",
		"fs-extra": "^9.0.0",
		"koa": "^2.11.0",
		"koa-bodyparser": "^4.3.0",
		"koa-log4": "^2.3.2",
		"koa-router": "^8.0.8",
		"koa-static": "^5.0.0",
		"koa2-cors": "^2.0.6",
		"nodemon": "^2.0.2",
		"request": "^2.88.2",
		"request-promise": "^4.2.5",
		"ts-node": "^8.7.0",
		"typescript": "^3.8.3"
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
