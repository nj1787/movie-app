import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  position: relative;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: #0f0;
  }
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartImage = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 50px;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

class Navbar extends React.Component {
  render() {
    const { cartcount } = this.props;
    return (
      <>
        <Nav>
          <Title>Movie-App</Title>
          <CartContainer>
            <CartImage
              src="https://img.icons8.com/?size=50&id=13014&format=png"
              alt="CartIcon"
            />
            <CartCount color="yellow" show={true}>
              {cartcount}
            </CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;

// const styles = {
//   // nav: {
//   //   width: "100%",
//   //   height: 70,
//   //   background: "red",
//   //   display: "flex",
//   //   justifyContent: "space-between",
//   // },
//   // title: {
//   //   fontSize: 30,
//   //   color: "#fff",
//   //   fontWeight: 600,
//   //   fontFamily: '"Montserrat", sans-serif',
//   //   textTransform: "uppercase",
//   //   marginLeft: 20,
//   //   marginTop: "12px",
//   // },
//   // cartContainer: {
//   //   position: "relative",
//   //   cursor: "pointer",
//   //   marginTop: "12px",
//   // },
//   // cartIcon: {
//   //   height: 48,
//   //   marginRight: 20,
//   // },
//   // cartCount: {
//   //   background: "orange",
//   //   borderRadius: "50%",
//   //   padding: "4px 8px",
//   //   position: "absolute",
//   //   right: 10,
//   //   top: -5,
//   //   fontSize: 12,
//   // },
// };
