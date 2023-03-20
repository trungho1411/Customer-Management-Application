import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import { useMemo } from 'react';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //pass mode into createTheme, in theme file, themeSetting in the mode and use createTheme to configure neccessary for UI
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;

