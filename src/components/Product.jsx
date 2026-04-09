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

function Product(props) {
  const imgStyle = { width: "auto", height: "100%", borderRadius: "1.5rem" };
  // props.image = "123";
  return (
    <StyledProductContainer hoverScale={1.05} transition="0.5s">
      <img style={imgStyle} src={props.image} alt={props.title} />
      <div className={styles.productTextContainer}>
        <div className={styles.productTitle}>{props.title}</div>
        <div className={styles.productDetails}>{props.detail}</div>
      </div>
    </StyledProductContainer>
  );
}
export default Product;
