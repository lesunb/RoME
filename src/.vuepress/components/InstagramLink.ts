import type { FunctionalComponent } from "vue";
import { h } from "vue";

const InstagramLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo instagram-link" },
    h("a", {
      class: "vp-repo-link",
      href: "https://www.instagram.com/romeunb?utm_source=qr",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "instagram",
      innerHTML:
        '<i class="fab fa-instagram"></i>',
    }),
  );

InstagramLink.displayName = "InstagramLink";

export default InstagramLink;
