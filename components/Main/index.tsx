import { Raleway } from "@next/font/google";
import { Product } from "@prisma/client";
import Image from "next/image";
import * as S from "./styles";

interface MainProps {
  products: Product[];
}

const raleway = Raleway({
  weight: "600",
  subsets: ["latin"],
});

const Main = ({ products }: MainProps) => {
  return (
    <S.Container>
      <h1 className={raleway.className}>On sale 50%</h1>
      <S.OffersContainer>
        {products.map((product) => (
          <S.Offer key={product.id}>
            <Image
              src={product.imageUri as string}
              alt={product.name}
              width={60}
              height={60}
              priority
            />
          </S.Offer>
        ))}
      </S.OffersContainer>
    </S.Container>
  );
};

export default Main;
