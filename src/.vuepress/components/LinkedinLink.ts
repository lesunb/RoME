import type { FunctionalComponent } from "vue";
import { h } from "vue";

const LinkedinLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo" },
    h("a", {
      class: "vp-repo-link",
      href: "https://t.me/vuepressthemehope",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "linkedin",
      innerHTML:
        '<div class="linkedin-link"><a href="https://www.linkedin.com/company/rome-summer-school-unb/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></div>',
    }),
  );

LinkedinLink.displayName = "LinkedinLink";

export default LinkedinLink;
