import { Product } from "@prisma/client";
import * as S from "./styles";

interface MainProps {
  products: Product[];
}

const Main = ({ products }: MainProps) => {
  return (
    <S.Container>
      <h1>Ecommerce</h1>
      <div>
        {products?.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            {product.imageUri && (
              <img
                src={product.imageUri}
                alt={product.name}
                width={200}
                height={200}
              />
            )}
          </div>
        ))}
      </div>
    </S.Container>
  );
};

export default Main;
