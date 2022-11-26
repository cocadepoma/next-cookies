import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '../theme';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface Props extends AppProps {
  theme: string;
}

enum ValidThemes {
  light = 'light',
  dark = 'dark',
  custom = 'custom'
}

type Themes = {
  [key in ValidThemes]: Theme
}

export default function App({ Component, pageProps }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const theme = Cookies.get('theme') as ValidThemes || 'light';

    const themes: Themes = {
      light: lightTheme,
      dark: darkTheme,
      custom: customTheme
    };

    setCurrentTheme(themes[theme])
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };
//   const validThemes = ['light', 'dark', 'custom'];

//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   }

// };
