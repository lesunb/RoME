import type { FunctionalComponent } from "vue";
import { h } from "vue";

const TelegramLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo" },
    h("a", {
      class: "vp-repo-link",
      href: "https://t.me/vuepressthemehope",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "telegram",
      innerHTML:
        '<div class="linkedin-link"><a href="https://www.linkedin.com/seu_perfil_do_linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-telegram"></i></a></div>',
    }),
  );

TelegramLink.displayName = "TelegramLink";

export default TelegramLink;
