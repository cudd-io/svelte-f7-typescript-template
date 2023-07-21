<script>
  import { onMount } from "svelte";
  import { getDevice } from "framework7/lite-bundle";
  import { f7, f7ready, App, View } from "framework7-svelte";

  import capacitorApp from "./lib/framework7/capacitor-app";
  import routes from "./lib/framework7/routes";
  import store from "./lib/framework7/store";

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: "Framework 7 Starter", // App name
    theme: "auto", // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  onMount(() => {
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  });
</script>

<!-- <div class="test">test</div> -->

<App {...f7params}>
  <!-- Your main view, should have "view-main" class -->
  <View main url="/" />
</App>
