import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global-styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { api } from 'api/client';
import LayoutGeneral from 'layouts/LayoutGeneral/layout-general';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      api.defaults.headers.common.Authorization = userData.token;
    }
    setLoading(false);
  }, []);

  if (loading) {
    return;
  }

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
