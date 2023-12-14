import type { FunctionalComponent } from "vue";
import { h } from "vue";

const LinkedinLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo linkedin-link" },
    h("a", {
      class: "vp-repo-link",
      href: "https://www.linkedin.com/company/rome-summer-school-unb/",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "linkedin",
      innerHTML:
        '<i class="fab fa-linkedin"></i>',
    }),
  );

LinkedinLink.displayName = "LinkedinLink";

export default LinkedinLink;
