import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg";
// import ipad_pro_image from "~img/store-card-ipad-pro.jpeg";
import styles from "./Product.module.css";

function Product() {
  const imgStyle = { width: "auto", height: "100%", borderRadius: "1.5rem" };
  return (
    <div style={{ maxWidth: "28rem", position: "relative" }}>
      <img style={imgStyle} src={ipad_pro_image} alt="ipad pro" />
      <div className={styles.productTextContainer}>
        <div className={styles.productTitle}>ipad pro</div>
        <div className={styles.productDetails}>rmb 89991起</div>
      </div>
    </div>
  );
}
export default Product;
