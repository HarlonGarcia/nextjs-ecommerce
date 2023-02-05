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
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    setUser(data[0]);
  };

  return (
    <>
      <Navbar userAccount={user} />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default Layout;
