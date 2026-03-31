import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg";
// import ipad_pro_image from "~img/store-card-ipad-pro.jpeg";

function Product() {
  const imgStyle = { width: "auto", height: "100%", borderRadius: "1.5rem" };
  return (
    <div style={{ maxWidth: "28rem", position: "relative" }}>
      <img style={imgStyle} src={ipad_pro_image} alt="ipad pro" />
      <div className="product-text-container">
        <div className="product-title">ipad pro</div>
        <div className="product-details">rmb 8999起</div>
      </div>
    </div>
  );
}
export default Product;
