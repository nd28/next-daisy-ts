import type { AppProps } from "next/app";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/globals.css";
import Layout from "../components/Layout";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
