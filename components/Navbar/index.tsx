import * as S from "./styles";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Raleway } from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export interface ToggleProps {
  isOpened: boolean;
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <S.Header className={raleway.className}>
        <h1>Logo</h1>
        <S.NavList>
          <li>
            <FaShoppingCart />
            <span>Shopping Cart</span>
          </li>
          <li>
            <FaUserCircle />
            <span>Your account</span>
          </li>
        </S.NavList>
        <S.ToggleMenu
          onClick={() => setIsActive(!isActive)}
          isOpened={isActive}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.ToggleMenu>
      </S.Header>
      <S.MobileMenu isOpened={isActive} className={raleway.className}>
        <ul>
          <li>
            <FaShoppingCart />
            <span>Shopping Cart</span>
          </li>
          <li>
            <FaUserCircle />
            <span>Your Account</span>
          </li>
        </ul>
      </S.MobileMenu>
    </>
  );
};

export default Navbar;
