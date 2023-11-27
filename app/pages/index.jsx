import React from "react";

export async function notNextServerSideProps(fetch) {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json().then((json) => json)
  );

  return {
    props: {
      title: "All products",
      products: data,
    },
  };
}

export function HomePage({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
