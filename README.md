# Skate-starter

[![Greenkeeper badge](https://badges.greenkeeper.io/Hotell/skate-starter.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Hotell/skate-starter.svg?branch=master)](https://travis-ci.org/Hotell/skate-starter)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

> Webpack 2, Typescript 2, SkateJs for super powered reactive web-components


## Start development

`yarn start`

## Build project

`yarn build`

## Test

> @TODO
`yarn test`

## Format and fix lint errors

`yarn ts:style:fix`

## Commit ( via commitizen )

`yarn commit`

## Release

`yarn release`

## bundle/polyfill sizes

Of course not all browsers support WebComponents spec, so polyfills are needed.

Here a little showcase what will be donwloaded by what browser at what size

> Note sizes are only for minified code not g-zipper

![chunk-sizes](docs/skate-plus-wc-bundle-sizes-with-new-lazy-loader.png)
