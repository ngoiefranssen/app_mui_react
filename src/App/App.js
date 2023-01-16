import './App.css';
// import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Employees from '../Pages/Employees';


const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#8324526',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <SideMenu /> */}
      <Header />
      <Employees />
      <CssBaseline />
    </ThemeProvider >
  );
}

export default App;
