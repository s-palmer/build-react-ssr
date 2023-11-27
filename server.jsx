import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { document } from "./utils/document.js";
import { HomePage, notNextServerSideProps } from "./app/pages/index.jsx";
const fetch = require("node-fetch");
import path from "path";

const app = express();
const PORT = 3000;

app.use('/static', express.static(path.join(__dirname)));

app.get('/', async (req, res) => {
  const initialData = await notNextServerSideProps(fetch);

  const htmlContent = renderToString(<HomePage {...initialData.props} />);
  const html = document(htmlContent, initialData.props);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
