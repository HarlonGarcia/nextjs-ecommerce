import { Session } from "next-auth";
import * as S from "./styles";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { signOut } from "next-auth/react";

const raleway = Raleway({ subsets: ["latin"] });

interface UserAccountProps {
  session: Session | null;
}

function UserAccount({ session }: UserAccountProps) {
  return (
    <S.Container className={raleway.className}>
      <S.AccountTop>
        Logged as <strong>{session?.user?.email}</strong>
      </S.AccountTop>
      <S.AccountDetails>
        <Image
          src={session?.user?.image || ""}
          alt="User picture"
          width={70}
          height={70}
        />
        <div>
          <h2>{session?.user?.name}</h2>
          <strong>R$ 378.00</strong>
          <small>View products on cart</small>
        </div>
      </S.AccountDetails>
      <S.Options>
        <li>
          <button>Purchases historic</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button onClick={() => signOut()}>Logout</button>
        </li>
      </S.Options>
    </S.Container>
  );
}

export default UserAccount;
