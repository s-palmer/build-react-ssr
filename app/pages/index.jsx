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

export function HomePage({ title, products }) {
  return (
    <div>
      <h1>{title}</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            border: "1px solid black",
          }}
        >
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
