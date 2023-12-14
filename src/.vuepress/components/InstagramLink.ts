import type { FunctionalComponent } from "vue";
import { h } from "vue";

const InstagramLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo" },
    h("a", {
      class: "vp-repo-link",
      href: "https://t.me/vuepressthemehope",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "instagram",
      innerHTML:
        '<div class="instagram-link"><a href="https://www.instagram.com/romeunb?utm_source=qr" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></div>',
    }),
  );

InstagramLink.displayName = "InstagramLink";

export default InstagramLink;
