import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import * as S from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const users = await response.json();
    setUser(users[0]);
  };

  return (
    <>
      <Navbar userAccount={user} />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default Layout;
