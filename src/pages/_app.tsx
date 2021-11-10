import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyle } from "styles/global";
import { queryClient } from "services/reactQuery/queryClient";
import { DateProvider } from "contexts/DateContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DateProvider>
        <AuthProvider>
          <GlobalStyle />
          <Toaster  position="top-right"/>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </AuthProvider>
      </DateProvider>
    </QueryClientProvider>
  );
}
