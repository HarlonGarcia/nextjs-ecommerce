import Main from "@/components/Main";
import { prisma } from "@/db/prisma";
import { User } from "@prisma/client";

export const getServerSideProps = async () => {
  const data = await prisma.user.findMany();
  const users = JSON.parse(JSON.stringify(data));
  return { props: { users } };
};

interface HomeProps {
  users: User[];
}

export default function Home({ users }: HomeProps) {
  return <Main users={users} />;
}
