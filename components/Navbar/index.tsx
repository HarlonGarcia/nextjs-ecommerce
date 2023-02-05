import * as S from "./styles";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Raleway } from "@next/font/google";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const raleway = Raleway({ subsets: ["latin"] });

export interface ToggleProps {
  isOpened: boolean;
}

interface NavbarProps {
  userAccount: User | null;
}

const Navbar = ({ userAccount }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const isLogged: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

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
        {session ? (
          <S.UserOptions>
            <div>
              <strong>Welcome, {userAccount?.name}</strong>
              {userAccount?.image ? (
                <Image
                  src={userAccount.image}
                  alt="User's picture"
                  width={50}
                  height={50}
                />
              ) : null}
            </div>
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
            <button onClick={() => signOut()}>Log out</button>
          </S.UserOptions>
        ) : (
          <S.MenuSignUp>
            <strong>Do you already have an account?</strong>
            <button>
              <Link href="/api/auth/signin" legacyBehavior>
                <a data-active={isLogged("/signup")}>Log in</a>
              </Link>
            </button>
          </S.MenuSignUp>
        )}
      </S.MobileMenu>
    </>
  );
};

export default Navbar;
