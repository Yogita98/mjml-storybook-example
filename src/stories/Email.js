// import React from "react";
import mjml2html from "mjml";
import { render } from "mjml";
import * as email1 from "../email";

// import {
//   Mjml,
//   MjmlHead,
//   MjmlTitle,
//   MjmlPreview,
//   MjmlBody,
//   MjmlSection,
//   MjmlColumn,
//   MjmlButton,
//   MjmlImage,
//   MjmlStyle,
//   MjmlText,
// } from "mjml-react";

import "./button.css";

export const ExampleTemplate = () =>
  render(email1.generate(), { validationLevel: "soft" }).html;

export const createEmail = () => {
  const email = document.createElement("div");
  email.innerHTML = ExampleTemplate;

  return email;
};
