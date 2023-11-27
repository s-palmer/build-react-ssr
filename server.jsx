import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { HomePage } from "./app/pages/index.jsx";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const htmlContent = renderToString(<HomePage />);

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">
      ${htmlContent}</div>
    </body>`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
