import Layout from "@/components/Layout";
import GlobalStyles from "@/styles/globals";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Ecommerce</title>
        <meta
          name="description"
          content="An ecommerce project developed with NextJS"
        />
      </Head>
      <GlobalStyles />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </SessionProvider>
    </>
  );
}
