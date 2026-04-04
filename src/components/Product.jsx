import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg";
// import ipad_pro_image from "~img/store-card-ipad-pro.jpeg";
import styles from "./Product.module.css";
import styled from "styled-components";

const StyledProductContainer = styled.div`
  max-width: 28rem;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(${(props) => props.hoverScale || 1.05});
    cursor: pointer;
  }
`;

function Product() {
  const imgStyle = { width: "auto", height: "100%", borderRadius: "1.5rem" };
  return (
    <StyledProductContainer hoverScale={1.05}>
      <img style={imgStyle} src={ipad_pro_image} alt="ipad pro" />
      <div className={styles.productTextContainer}>
        <div className={styles.productTitle}>ipad pro</div>
        <div className={styles.productDetails}>rmb 89991起</div>
      </div>
    </StyledProductContainer>
  );
}
export default Product;
