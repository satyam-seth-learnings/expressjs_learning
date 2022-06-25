- Scripts For Production

```json
"scripts": {
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "serve": "node prd/index.js"
}
```

- Scripts For Development

```json
"scripts": {
    "start": "babel index.js -w --out-dir prd",
    "dev-serve": "nodemon prd/index.js"
}
```

- Scripts For Development - Compile Directory


```json
"scripts": {
    "start": "babel src -w --out-dir prd",
    "dev-serve": "nodemon prd/index.js"
}
```