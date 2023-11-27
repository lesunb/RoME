import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "RoME 2024",
  description: "RoME 2024 - Second Summer School on Robotic Mission Engineering",

  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },],
    ["link", { href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap", rel:"stylesheet", }, ],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});