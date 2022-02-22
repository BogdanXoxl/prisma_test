import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
            <title>TSDB</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
      </>);
}

export default MyApp;
