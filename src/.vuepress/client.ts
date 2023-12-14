import { defineClientConfig } from "@vuepress/client";

import InstagramLink from "./components/InstagramLink.js";
import LinkedinLink from "./components/LinkedinLink.js";

import "vuepress-theme-hope/presets/shinning-feature-panel.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("InstagramLink", InstagramLink);
    app.component("LinkedinLink", LinkedinLink);
  },
});
