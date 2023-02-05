import Main from "@/components/Main";
import { Product } from "@prisma/client";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return <Main products={products} />;
}
