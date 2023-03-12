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
    <S.Container className={raleway.className}>
      <h1>Check out our offers</h1>
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
      <S.FOWrapper>
        <S.FeaturedOffer>
          <S.FeaturedOfferDescription>
            Create your own look with <strong>10% off</strong>
          </S.FeaturedOfferDescription>
          <Image
            src="/images/model.png"
            alt="Featured offer"
            width={290}
            height={290}
          />
        </S.FeaturedOffer>
      </S.FOWrapper>
    </S.Container>
  );
};

export default Main;
