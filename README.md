# Webpack3 based proj loading webpack4 based proj err


## How to reproduce

Run index.html in chrome 

## What is the current behavior?

I have a project A  built by webpack3 use code split, and B project  built by webpack4 use code split.

Similar to a microservice.

When A project load script B, occurred this error.

```
Uncaught TypeError: Cannot read property 'bind' of undefined
```

The reason is `window["webpackJsonp"]` is defined by webpack3 as a function.
but it is expected to be an `array` or `undefined`.

```javascript
var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
```

Is this a bug? 

This proj reproduced this bug : https://github.com/zhangyugege/webpack3-webpack4-err


## What is the expected behavior?

I hope `webpack["webpackJson"]` can be configured.

## Other relevant information:

webpack3.8.0

webpack4.28.1

