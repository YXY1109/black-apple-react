import ipad_pro_image from "../assets/images/store-card-ipad-pro.jpeg";
// import ipad_pro_image from "~img/store-card-ipad-pro.jpeg";
import styles from "./Product.module.css";
import styled from "styled-components";

const StyledProductContainer = styled.div`
  max-width: 28rem;
  position: relative;
  transition: transform ${(props) => props.transition || "0.2s"} ease-in-out;

  &:hover {
    transform: scale(${(props) => props.hoverScale || 1.05});
    cursor: pointer;
  }
`;

function Product({ image, title, detail, scale = 1.05, onProductClick }) {
  const imgStyle = { width: "auto", height: "100%", borderRadius: "1.5rem" };
  // props.image = "123";
  // (image, title, (detail = props));
  return (
    <StyledProductContainer
      hoverScale={scale}
      transition="0.5s"
      onClick={() => onProductClick(title)}
    >
      <img style={imgStyle} src={image} alt={title} />
      <div className={styles.productTextContainer}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.productDetails}>{detail}</div>
      </div>
    </StyledProductContainer>
  );
}
export default Product;
