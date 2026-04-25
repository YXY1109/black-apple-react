import React from "react";
import Product from "@components/Product";

const ReleaseNote = () => {
  return (
    <div>
      <h1>发布说明111</h1>
    </div>
  );
};

const ProducNotFound = () => {
  return (
    <div>
      <h1>产品未发布</h1>
    </div>
  );
};

const ListTitle = () => {
  return (
    <div>
      <h1>产品列表</h1>
    </div>
  );
};

function ProductList({ data }) {
  const isReleased = new Date() >= new Date("2026-05-01");
  if (!isReleased) {
    return <ReleaseNote />;
  }

  if (data.length <= 0) {
    return <ProducNotFound />;
  }

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
      {data.map((p) => (
        <Product {...p} key={p.title} />
      ))}
    </div>
  );
}

export default ProductList;
