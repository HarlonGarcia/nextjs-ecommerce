import UserAccount from "@/components/UserAccount";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";

export default function Account() {
  const { data: session } = useSession();

  return <UserAccount session={session} />;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
}
