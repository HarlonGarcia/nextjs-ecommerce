import * as S from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export interface Test {
  isOpened: boolean;
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Header>
      <h1>Logo</h1>
      <S.NavList>
        <li>
          <FaShoppingCart />
        </li>
        <li></li>
        <li></li>
      </S.NavList>
      <S.ToggleMenu onClick={() => setIsActive(!isActive)} isOpened={isActive}>
        <span></span>
        <span></span>
        <span></span>
      </S.ToggleMenu>
    </S.Header>
  );
};

export default Navbar;
