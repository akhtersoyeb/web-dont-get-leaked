import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dont get leaked</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
