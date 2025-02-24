import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Head from "next/head"
import { GoogleAnalytics } from '@next/third-parties/google'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Dont get leaked</title>
        </Head>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-BBDP5JNMC0" />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ClerkProvider>
  )
}
