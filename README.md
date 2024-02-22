# `nuxt-components`

A NuxtJS Component Library Based on IU Rivet Framework

## Getting Started

Installing the library

```bash
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

## Contributing

1. Fork the nuxt-components repo.
2. Create a new branch for your changes
3. Make changes in your branch
4. Submit a pull request with your changes.

## Useful Resources

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): An introduction to the Conventional Commits specification for commit messages. Helps with using semantic versioning and changelogs using commit messages.
- [Nuxt Modules Author Guide](https://nuxt.com/docs/guide/going-further/modules)
- [Nuxt Content](https://content.nuxt.com/get-started/installation)
- [GitHub Package Registry Documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
