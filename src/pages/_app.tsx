import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
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
        </>
    );
}

export default MEM;