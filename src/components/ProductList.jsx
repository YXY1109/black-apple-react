import React from "react";
import Product from "@components/Product";

function ProductList({ data }) {
  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
        rowGap: "3rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            fontWeight: "800",
            backgroundImage: "url('src/assets/lines.png')",
            backgroundPosition: "center",
          }}
        >
          上新品，各个添新意
        </h1>
      </div>
      {/* <Product
        image={product.image}
        title={product.title}
        detail={product.detail}
      /> */}
      {/* <Product {...product} onProductClick={handleProductClick} />
      <Product {...product2} /> */}
      {data.map((p) => (
        <Product {...p} />
      ))}
    </div>
  );
}

export default ProductList;
