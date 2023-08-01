import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/styles/globals.css";
import { queryClient } from "../lib/react-query";
import { Toaster } from "react-hot-toast";

function MEM({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Pastebin on MEM</title>
                <meta
                    name="description"
                    content={`A sample project to test MEM`}
                />
            </Head>

            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <Toaster 
                    toastOptions={{
                        style: {
                            backgroundColor: "#1a1a1a",
                            color: "#fff"
                        }
                    }}
                />
                <main className={`overflow-x-hidden`}>
                    <Component {...pageProps} />
                </main>
            </QueryClientProvider>
        </>
    );
}

export default MEM;