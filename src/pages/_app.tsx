import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyle } from "styles/global";
import { queryClient } from "services/reactQuery/queryClient";
// import { AuthProvider } from '../contexts/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <GlobalStyle />
      {/* <ModalStyleGlobal /> */}
      <Component {...pageProps} />
      <ReactQueryDevtools />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}
