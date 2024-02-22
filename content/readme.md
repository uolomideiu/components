# `nuxt-components`

A NuxtJS Component Library Based on IU Rivet Framework

## Getting Started

Installing the library

```
npm install @mmge-websites/nuxt-components
```

## Dependencies

This library leverages the `rivet-core` library and it should be automatically installed as it's a direct dependency.

## Integrating Rivet Core in a Nuxt Project

The `rivet-core` CSS and JavaScript files, as well as the custom CSS from the library are included in the Nuxt Module so you shouldnt need to import these again.
After installing the package, you need to add the Nuxt Module in nuxt config.

```
export default defineNuxtConfig({
  modules: ['./node_modules/@mmge-websites/nuxt-components/component-library/nuxt'],
});
```
