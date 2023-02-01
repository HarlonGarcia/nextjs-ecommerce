import Navbar from "../Navbar";
import * as S from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default Layout;
