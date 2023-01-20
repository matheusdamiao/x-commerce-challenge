import { Context } from "@/context/context";
import GlobalStyle from "@/styles/globalStyle";
import { Inter } from "@next/font/google";
import { makeServer } from "../server/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <main className={inter.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </Context>
  );
}
