import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './scenes/layout';
import Dashboard from './scenes/dashboard';
import Products from './scenes/products';
import Customers from './scenes/customers';
import Transactions from './scenes/transactions';
import Geography from './scenes/geography';
import Overview from './scenes/overview';
import Daily from 'scenes/daily';
import Monthly from 'scenes/monthly';
import Breakdown from './scenes/breakdown';
import Admin from './scenes/admin';
import Performance from './scenes/performance';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //pass mode into createTheme, in theme file, themeSetting in the mode and use createTheme to configure neccessary for UI
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/daily' element={<Daily />} />
              <Route path='/monthly' element={<Monthly />} />
              <Route path='/breakdown' element={<Breakdown />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/performance' element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

