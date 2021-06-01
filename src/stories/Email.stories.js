import { storiesOf } from "@storybook/html";
// import { action } from "@storybook/addon-actions";
// import { withLinks } from "@storybook/addon-links";
// import { withNotes } from "@storybook/addon-notes";
// import { text, select, withKnobs } from "@storybook/addon-knobs";
// import { checkA11y } from "@storybook/addon-a11y";
import { createEmail, ExampleTemplate } from "./Email";

import Button from "./But.html";
// import ButtonDocs from "./../src/components/01-atoms/button/button.md";

console.log(createEmail);

storiesOf("Components-Atoms/Emails", module)
  // .addDecorator(withNotes)
  // .add("Overview", () => "<h1>hello world</h1>", {
  //   notes: "My notes on some bold text",
  // })
  .add("Email", () => "<h1>hello world</h1>");

// .add("Markdown Docs", () => ButtonDocs);

// export default {
//   title: "Example/Email",
// };

// const Template = () => {
//   // You can either use a function to create DOM elements or use a plain html string!
//   // return `<div>${label}</div>`;
//   return createEmail();
// };

// export const Primary = Template.bind({});
// // Primary.args = {
// //   primary: true,
// //   label: "Button",
// // };
