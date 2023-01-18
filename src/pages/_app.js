import GlobalStyle from "@/styles/globalStyle";
import { makeServer } from "../server/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
