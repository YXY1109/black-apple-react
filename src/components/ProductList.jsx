import React from "react";
import Product from "@components/Product";

function ProductList({ data }) {
  const isReleased = new Date() >= new Date(2028, 1, 1);
  return (
    //短路运算符，isReleased为true时才会渲染后面的内容
    // isReleased && (
    // 假值陷阱，isReleased为true时渲染第一个内容，否则渲染第二个内容
    // data.length && (
    //三元运算符，isReleased为true时渲染第一个内容，否则渲染第二个内容
    data.length ? (
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
          <Product {...p} key={p.title} />
        ))}
      </div>
    ) : (
      <div>产品未发布</div>
    )
  );
}

export default ProductList;
