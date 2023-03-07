import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global-styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import LayoutGeneral from 'layouts/LayoutGeneral/layout-general';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LayoutGeneral>
          <Component {...pageProps} />
        </LayoutGeneral>
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
