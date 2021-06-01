// import { document } from "global";
import { storiesOf } from "@storybook/html";
// import { action } from "@storybook/addon-actions";
// import { withLinks } from "@storybook/addon-links";
// import { withNotes } from "@storybook/addon-notes";
// import { text, select, withKnobs } from "@storybook/addon-knobs";
// import { checkA11y } from "@storybook/addon-a11y";

import Button from "./But.html";
// import ButtonDocs from "./../src/components/01-atoms/button/button.md";
storiesOf("Components|Atoms/Buttons", module)
  // .addDecorator(withNotes)
  .add("Overview", () => "<h1>hello world</h1>", {
    notes: "My notes on some bold text",
  })
  .add("Button", () => Button);
// .add("Markdown Docs", () => ButtonDocs);
