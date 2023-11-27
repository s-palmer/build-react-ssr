import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { HomePage, notNextServerSideProps } from "./app/pages/index.jsx";
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  const initialData = await notNextServerSideProps(fetch); 

  const htmlContent = renderToString(<HomePage {...initialData.props} />);

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
