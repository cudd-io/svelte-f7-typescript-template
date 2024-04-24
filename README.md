# Svelte Framework 7 Typescript Template

This is a customized [Framework 7](https://framework7.io/) starter template for Svelte and Typescript. It is powered by [Vite](https://vitejs.dev/).


## Getting Started

To get started, run:
- `npx degit https://github.com/cudd-io/svelte-f7-typescript-template.git [your-project-name]`
- `cd [your-project-name]`
- `pnpm install`

## Project Structure

### Routes

The `src/pages` route is where all your app's pages should be located.
To register a page as a route, add it to the `src/lib/framework7/routes.ts` file.
Pages can be imported like so: `import MyPage from '$pages/my-page.svelte'`

### Components

Reusable components should be added to the `src/lib/components` folder and imported like so: `import MyComponent from '$lib/components/MyComponent.svelte'`


## Other Resources

- [Framework 7 Documentation](https://framework7.io/docs/)
- [Svelte Documentation](https://svelte.dev/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)

## Roadmap

- [ ] Add support for (optional) file-based routing similar to sveltekit.
  - Should be achievable using vite's [glob import feature](https://vitejs.dev/guide/features.html#glob-import) and would make routing a lot more intuitive imo.