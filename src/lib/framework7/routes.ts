import HomePage from "$pages/index.svelte";
import AboutPage from "$pages/about.svelte";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

export default routes;
